import { gql } from "@apollo/client/core";
import { query } from "svelte-apollo";

export function getHomepageById(id, preview = false, idType = "DATABASE_ID") {
  return query(gql`
    {
      page(id: "${id}", idType: ${idType}, asPreview: ${preview} ) {
        databaseId
          title
          homepage {
          blog {
                    description
          title
          posts {
          ... on Post {
            databaseId
          }
        }
          }
            usp {
          description
          title
          image {
          sizes(size: MEDIUM)
          srcSet
          mediaItemUrl
          sourceUrl(size: MEDIUM)
          altText
        }
        }
        slogan
            productDots{
              dots {
                description
                x
                y
              }
              product {
          title
         url
              }
            }
            colorContent {
          readmoreLink
          readmoreLabel
          mainContent
          leadingContent
          image {
          sizes(size: MEDIUM)
          srcSet
          mediaItemUrl
          sourceUrl(size: MEDIUM)
          altText
        }
          contentTitle
        }
      }
    }
    }
  `);
}

export function getPageById(id, preview = false, idType = "DATABASE_ID") {
  return query(gql`{
page(id: "${id}", idType: ${idType}, asPreview: ${preview} ) {
    title
    databaseId
    blocks {
      content {
        blocks {
          ctaLeft {
            title
            leading
            textblock
            button {
              url
              title
            }
          }
          ctaRight {
            title
            leading
            textblock
            button {
              title
              url
            }
          }
          imageLeft {
          sizes(size: MEDIUM)
          srcSet
          mediaItemUrl
          sourceUrl(size: LARGE)
          altText
        }
          imageRight {
          sizes(size: MEDIUM)
          srcSet
          mediaItemUrl
          sourceUrl(size: LARGE)
          altText
        }
          textLeft {
            title
            leading
            textblock
          }
          textRight {
            title
            leading
            textblock
          }
        }
        layout
      }
    }
    }
}`);
}
export function getPostById(id, preview = false, idType = "DATABASE_ID") {
  return query(gql`{
post(id: "${id}", idType: ${idType}, asPreview: ${preview} ) {
    title
    databaseId
    blocks {
      content {
        blocks {
          ctaLeft {
            title
            leading
            textblock
            button {
              url
              title
            }            
          }
          ctaRight {
            title
            leading
            textblock
            button {
              title
              url
            }
          }
          imageLeft {
          sizes(size: MEDIUM)
          srcSet
          mediaItemUrl
          sourceUrl(size: LARGE)
          altText
        }
          imageRight {
          sizes(size: MEDIUM)
          srcSet
          mediaItemUrl
          sourceUrl(size: LARGE)
          altText
        }
          textLeft {
            title
            leading
            textblock
          }
          textRight {
            title
            leading
            textblock
          }
        }
        layout
      }
    }
    }
}`);
}

export function getBlogPageById(id, preview = false, idType = "DATABASE_ID") {
  return query(gql`{
  page(id: "${id}", idType: ${idType}, asPreview: ${preview} ) {
        title
        databaseId
        isFrontPage
        slug
        template {
        templateName
      }
        blog {
            leading
            main
          }
        }
  }`);
}

export function getColorPageById(id, preview = false, idType = "DATABASE_ID") {
  return query(gql`{
  page(id: "${id}", idType: ${idType}, asPreview: ${preview} ) {
        title
        databaseId
        isFrontPage
        slug
        template {
        templateName
      }
        colors {
            colorsHeight
            colorsChannelLink
            leading
            main
          }
        }
  }`);
}

export function getSellingPointsPageById(id, preview = false, idType = "DATABASE_ID") {
  return query(gql`{
  page(id: "${id}", idType: ${idType}, asPreview: ${preview} ) {
        databaseId
        title
        isFrontPage
        slug
        template {
        templateName
      }
        sellingPoints {
            location {
              latitude
              longitude
              zoom
            }
            buttonText
            fieldGroupName
            foundText
            inputPlaceholder
            leading
            main
          }
        }
  }`);
}

export function getFaqPageById(id, preview = false, idType = "DATABASE_ID") {
  return query(gql`{
  page(id: "${id}", idType: ${idType}, asPreview: ${preview} ) {
        databaseId
        title
        isFrontPage
        slug
        template {
        templateName
      }
      faqpage {
          scrollToContact
          leading
          main
        }
      }
  }
  `);
}

export function getProductPageById(id, preview = false, idType = "DATABASE_ID") {
  return query(gql`{
      page(id: "${id}", idType: ${idType}, asPreview: ${preview} ) {
      databaseId
      title
      isFrontPage
      slug
      template {
        templateName
      }
      productpage {
      collectionTitle
      collectionShortText
      colorsButton
      colorsChannelLink
      colorsLeading
      colorsMain
      colorsTitle
      colorsHeight
      descContent
      descLeading
      descTitle
      downloadsTitle
      faqLeading
      faqMain
      faqQuestionsTitle
      faqTitle
      faqButton {
              title
              url
            }
      fieldGroupName
      photosDescription
      photosTitle
      specsContent
      specsContentAfter
      specsLeading
      specsLink
      specsLinkText
      specsTitle
      specsTable {
        label
        value
      }
      photos {
        image {
          sizes(size: MEDIUM)
          srcSet
          mediaItemUrl
          sourceUrl(size: THUMBNAIL)
          altText
        }
      }
      faqQuestions {
        link {
          url
          title
        }
        question
      }
      faqImage {
                  sizes(size: MEDIUM)
          srcSet
          mediaItemUrl
          sourceUrl(size: THUMBNAIL)
          altText
      }
      downloads {
        buttonlink
        buttontext
        category
        title
        type
        image {
          sizes(size: THUMBNAIL)
          srcSet
          mediaItemUrl
          sourceUrl(size: THUMBNAIL)
          altText
        }
      }
      decsImages {
        image {
          sizes(size: THUMBNAIL)
          srcSet
          mediaItemUrl
          sourceUrl(size: THUMBNAIL)
          altText
        }
      }
      collection {
        color {
          code
          fieldGroupName
          name
        }
        desc
        fieldGroupName
        image {
          sizes(size: THUMBNAIL)
          srcSet
          mediaItemUrl
          sourceUrl(size: THUMBNAIL)
          altText
        }
        extra {
                image {
          sizes(size: THUMBNAIL)
          srcSet
          mediaItemUrl
          sourceUrl(size: THUMBNAIL)
          altText
        }
        }
        size {
          size
        }
        nr
      }
    }
    }
}`);
}

