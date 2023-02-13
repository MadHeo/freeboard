// import "../styles/globals.css";
import { GlobalStyle } from "../src/commons/globalStyles/globalStyles";
import { Global } from "@emotion/react";
import Layout from "../src/commons/layout";
import ApolloSetting from "../src/component/commons/apollo";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={GlobalStyle}></Global>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
