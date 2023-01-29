import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

export default function Banner() {
  const MainBox = styled.div`
    width: 1920px;
    height: 400px;
    display: flex;
  `;

  const SLiderBox = styled(Slider)`
    width: 1920px;
    height: 400px;

    ul {
      position: absolute;
      bottom: 20px;

      li button::before {
        color: white;
      }
    }

    .slick-dots li.slick-active button:before {
      color: white;
    }

    .slick-next:before {
      color: white;
      position: absolute;
      left: -75px;
    }

    .slick-prev {
      left: 50px;
      z-index: 1;
    }
  `;

  const SubBox = styled.div`
    width: 1920px;
    height: 400px;
    background-color: black;
    position: relative;

    img {
      opacity: 50%;
    }
  `;
  const TextBox = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    position: absolute;
    top: 102px;
    left: 25%;
    z-index: 2;
  `;
  const TitleText = styled.div`
    width: 100%;
    font-size: 48px;
    font-weight: 700;
    color: white;
  `;
  const ContentText = styled.div`
    width: 40%;
    font-size: 12px;
    font-weight: 500;
    color: white;
    text-align: center;
  `;

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots",
  };

  return (
    <MainBox>
      <SLiderBox {...settings}>
        <div>
          <SubBox>
            <TextBox>
              <TitleText>CAROUSEL DESING</TitleText>
              <ContentText>
                캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
                같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만
                보이고 각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
              </ContentText>
            </TextBox>
            <img src="/image/img_carousel.png" alt="" />
          </SubBox>
        </div>
        <div>
          <SubBox>
            <TextBox>
              <TitleText>CAROUSEL DESING</TitleText>
              <ContentText>
                캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
                같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만
                보이고 각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
              </ContentText>
            </TextBox>
            <img src="/image/img_carousel.png" alt="" />
          </SubBox>
        </div>
        <div>
          <SubBox>
            <TextBox>
              <TitleText>CAROUSEL DESING</TitleText>
              <ContentText>
                캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
                같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만
                보이고 각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
              </ContentText>
            </TextBox>
            <img src="/image/img_carousel.png" alt="" />
          </SubBox>
        </div>
      </SLiderBox>
    </MainBox>
  );
}
