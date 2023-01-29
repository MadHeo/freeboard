// import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GlobalStyle } from "../src/commons/globalStyles/globalStyles";
import { Global } from "@emotion/react";
import Layout from "../src/commons/layout";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={GlobalStyle}></Global>

      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}
