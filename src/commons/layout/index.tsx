import Banner from "./banner/index";
import Header from "./header/index";
import Navigation from "./navigation/index";
import styled from "@emotion/styled";

export default function Layout(props) {
  const BodyBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #9745ff;
  `;

  const ContentBox = styled.div`
    margin-top: 80px;
  `;

  return (
    <>
      <BodyBox>
        <Header></Header>
        <Banner></Banner>
        <Navigation></Navigation>
        <ContentBox>
          <div> {props.children}</div>
        </ContentBox>
      </BodyBox>
    </>
  );
}
