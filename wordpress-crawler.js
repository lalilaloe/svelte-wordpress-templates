import fetch from "node-fetch";
import jsdom from "jsdom";
const { JSDOM } = jsdom;
import fs from "fs";

let generateList = async function (url) {
    let pages = await generateUrlsFromXMLSitemap(`${url}/page-sitemap.xml`);

    let vacancies = await generateUrlsFromXMLSitemap(
        `${url}/vacancy-sitemap.xml`
    );

    let blogs = await generateUrlsFromXMLSitemap(`${url}/blog-sitemap.xml`);

    let faq = await generateUrlsFromXMLSitemap(`${url}/faq-sitemap.xml`);

    return [...pages, ...vacancies, ...blogs, ...faq];
};

let generateUrlsFromXMLSitemap = async function (url) {
    const response = await fetch(url);
    const responseText = await response.text();
    const dom = new JSDOM(responseText);
    const xmlURLs = dom.window.document.querySelectorAll("url");
    const urlArray = Array.from(xmlURLs)
        .map((e) => {
            const textContent = e.textContent ? e.textContent.trim().split('\n').shift() : ''
            const url = new URL(textContent);
            return url.pathname;
        });

    return urlArray
};

(async () => {
    let urlArrays = await generateList(process.env.WORDPRESS_URI);
    console.debug("urlArray for", process.env.WORDPRESS_URI, urlArrays)
    console.debug("Number of urls found", urlArrays.length)
    fs.writeFileSync('./sitemap.json', JSON.stringify(urlArrays))
})();