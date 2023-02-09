import { css } from "@emotion/react";

export const GlobalStyle = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "Noto Sans KR";
  }

  @font-face {
    font-family: "Noto Sans KR Black";
    src: url("/font/NotoSansKR/NotoSansKR-Black.otf");
  }

  @font-face {
    font-family: "Noto Sans KR Bold";
    src: url("/font/NotoSansKR/NotoSansKR-Bold.otf");
  }

  @font-face {
    font-family: "Noto Sans KR";
    src: url("/font/NotoSansKR/NotoSansKR-Regular.otf");
  }

  @font-face {
    font-family: "Noto Sans KR Light";
    src: url("/font/NotoSansKR/NotoSansKR-Light.otf");
  }
`;
