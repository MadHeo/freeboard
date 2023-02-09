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
    border-radius: 10px;
  `;

  const SLiderBox = styled(Slider)`
    width: 1920px;
    height: 400px;
    border-radius: 10px;

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
    border-radius: 10px;

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
    left: 500px;
    z-index: 2;
    border-radius: 10px;
  `;
  const TitleText = styled.div`
    width: 100%;
    font-size: 120px;
    font-weight: 700;
    color: #e3e3e3;
    border-radius: 10px;
  `;
  const ContentText = styled.div`
    width: 40%;
    font-size: 12px;
    font-weight: 500;
    color: white;
    text-align: center;
    border-radius: 10px;
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
              <TitleText>모르는 모든 모드</TitleText>
            </TextBox>
            <img src="/image/Banner_3.png" alt="" />
          </SubBox>
        </div>
        <div>
          <SubBox>
            <TextBox>
              <TitleText>HI! HOW ARE YOU</TitleText>
            </TextBox>
            <img src="/image/Banner_4.png" alt="" />
          </SubBox>
        </div>
        <div>
          <SubBox>
            <TextBox>
              <TitleText>무지 무지 무지개</TitleText>
            </TextBox>
            <img src="/image/Banner_2.png" alt="" />
          </SubBox>
        </div>
      </SLiderBox>
    </MainBox>
  );
}
