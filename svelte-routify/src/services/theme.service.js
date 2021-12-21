import { gql } from "@apollo/client/core";
import { query } from "svelte-apollo";

export function getThemeSettings() {
  return query(gql`
    {
      themeGeneralFields {
        theme {
          errorPage {
            title
            main
            leading
            fieldGroupName
            backLinkText
            mobileImage {
              sizes(size: MEDIUM)
              srcSet
              mediaItemUrl
              sourceUrl(size: TINY)
              altText
            }
            image {
              sizes(size: _2048X2048)
              srcSet
              mediaItemUrl
              sourceUrl(size: TINY)
              altText
            }
            links {
              link {
                url
                title
                target
              }
            }
          }
          icons {
            address{
              mediaItemUrl
            }
            email{
              mediaItemUrl
            }
            phone{
              mediaItemUrl
            }
            externalLink{
              mediaItemUrl
            }
            markerIcon{
              mediaItemUrl
            }
          }
          newsletter {
            buttonText
            fieldGroupName
            headingText
            inputboxText
            sideText
            title
          }
          contact {
            title
            addressLabel
            address
            phoneLabel
            phone
            emailLabel
            email
            location {
              city
              country
              countryShort
              latitude
              longitude
              placeId
              postCode
              state
              stateShort
              streetAddress
              streetName
              streetNumber
              zoom
            }
          }
          faqDefaults {
            title
            leading
            main
            link {
              target
              title
              url
            }
            image {
            mediaItemUrl
            altText
          }
          questionsTitle
            questions {
            link {
              target
              title
              url
            }
            question
          }
          }
          faqBackLinkText
          colorCta {
            title
            content
                buttonLink{
                url
                title
                }
            image {
          sizes(size: MEDIUM)
          srcSet
          mediaItemUrl
          sourceUrl(size: MEDIUM)
          altText
                }
          }
          sellingPoints {
            buttonText
            inputPlaceholder
            leading
            main
            title
            url {
              target
              title
              url
            }
            foundText
            image {
          sizes(size: MEDIUM_LARGE)
          srcSet
          mediaItemUrl
          sourceUrl(size: MEDIUM_LARGE)
          altText
            }
            location {
              latitude
              longitude
              zoom
            }
          }
          collectionTitles {
            color
            desc
            fieldGroupName
            image
            nr
            sizes
          }
          collectionLoad
          copyright
        }      
      }      
    }
  `);
}
