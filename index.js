import React, { useState, useEffect } from "react";
import Head from "next/head";
// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
import { parseCookies } from "nookies";
import styled from "styled-components";
import withApollo from "../hoc/withApollo";
// import LoadingOrError from '../hoc/LoadingOrError';
// import LinkRouter from '../components/LinkRouter';
import Layout from "../components/Layout";
import BoundaryExample from "../utilities/ErrorBoundries";
import CookieBar from "../components/CookieBar/index";

const Home = () => {
  // const { loading, error, data } = useQuery(PAGE_QUERY);
  const [cookiesSelected, setCookiesSelected] = useState(true);
  const cookies = parseCookies();

  useEffect(() => {
    if (!cookies.cookiesSelected) {
      setCookiesSelected(false);
    }
  }, [cookies.cookiesSelected]);

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container>
          <section className="hero">
            <div className="hero-body has-text-centered">
              <h1 className="title">
                Welcome to Apacio&apos;s {process.env.NEXT_PUBLIC_SITE_NAME}
              </h1>
            </div>

            <BoundaryExample />
          </section>
          <section className="section">
            <div className="container">
              <div className="tile is-ancestor">
                <div className="tile is-vertical is-parent is-4">
                  <div className="tile is-child box">
                    <h2>Overview</h2>
                    <ul>
                      <li>
                        <b>Framework:</b> Next.js
                      </li>
                      <li>
                        <b>Formatter:</b> Prettier
                      </li>
                      <li>
                        <b>Linter:</b> ESLint
                      </li>
                      <li>
                        <b>Styles:</b> Bulma/Styled Components
                      </li>
                      <li>
                        <b>Testing:</b> Cypress
                      </li>
                      <li>
                        <b>Communication layer: </b>Apollo
                      </li>
                    </ul>
                  </div>
                  <div className="tile is-child box">
                    <h2>Templates</h2>
                    <h3>ContentPage</h3>
                    <p>A generic content page for dynamic routes</p>
                    <h3>ContentList</h3>
                    <p>Not sure...</p>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <h2>Styles</h2>
                    Anything related to global styles can be found in the
                    <code>{"/styles"}</code> directory.
                    <h3>Variables</h3>
                    <p>
                      <code>variables.js</code> contains an object that is
                      subdivided into different variables categories such as
                      colours and fonts. These can be accessed using styled
                      components like so:
                      <br />
                      <code>
                        {
                          "button: (props)=>props.theme.Variables.colors.warning"
                        }
                      </code>
                    </p>
                    <h3>Mixins</h3>
                    {
                      "These are a little different to variables as they can take variables when called. For this reason they have been created as functions and can be viewed in"
                    }
                    <code>{"mixins.js"}</code>{" "}
                    {
                      ". Examples of mixins include media queries and box shadows where certain values (e.g. screen width) would need to be dynamic."
                    }
                    &nbsp;A mixin can be called with styled components like so:
                    <pre>{`\${(props)=>props.theme.Mixins.from(props.theme.Variables.gaps.tablet, "background: red; font-size: 3rem")}`}</pre>
                    <h3>Globals</h3>
                    In <code>{"globals.js"}</code> you will find the
                    project&apos;s global stylesheet. Here there are default
                    styles for various elements which tend to take priority over
                    Bulma classes. If anything weird is happening with styles,
                    it&apos;s worth checking here first.
                  </div>
                </div>
              </div>
            </div>
          </section>
          {!cookiesSelected && (
            <CookieBar setCookiesSelected={() => setCookiesSelected(true)} />
          )}
        </Container>
        {/* <LoadingOrError loading={loading} error={error}>
          {data && data.page && data.page.homePageLinks && (
            <ul>
              {data.page.homePageLinks.map((pagelink, idx) => (
                <li key={idx}>
                  <LinkRouter
                    as={
                      pagelink.pageLink ? pagelink.pageLink.url : '/'
                    }
                  >
                    {pagelink.title}
                  </LinkRouter>
                </li>
              ))}
            </ul>
          )}
        </LoadingOrError> */}
        <p>Does this show?</p>
      </Layout>
    </>
  );
};

const Container = styled.div`
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    margin-top: 1em;
  }
`;

// const PAGE_QUERY = gql`
//   query {
//     page(slug: "home") {
//       title
//       ... on HomePage {
//         carouselItems {
//           title
//           description
//           fullImage {
//             id
//             rendition(jpegquality: 80) {
//               src
//             }
//           }
//           focusImage {
//             id
//             rendition(jpegquality: 80) {
//               src
//             }
//           }
//           pageLink {
//             id
//             url
//           }
//           pageLinkText
//         }
//         pageLinksContentLeft
//         pageLinksContentRight
//         homePageLinks {
//           title
//           subtitle
//           background
//           icon {
//             id
//             rendition(height: 160) {
//               src
//             }
//           }
//           pageLink {
//             url
//           }
//         }
//         homeCurrentDevelopments {
//           caseStudy {
//             id
//             title
//             slug
//             thumbnailImage {
//               id
//               rendition(max: "700x440") {
//                 src
//               }
//             }
//             developer
//             excerpt
//             formattedDate
//           }
//         }
//       }
//     }
//   }
// `;

export default withApollo(Home);
