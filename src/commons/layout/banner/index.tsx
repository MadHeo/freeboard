import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

export default function Banner() {
  const MainBox = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  `;

  const SLiderBox = styled(Slider)`
    width: 100%;
    height: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ul {
      position: absolute;
      bottom: 20px;

      li button::before {
        color: white;
      }
    }

    .slick-dots li.slick-active button:before {
      color: white;
      width: 200px;
      height: 200px;
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
    width: 100%;
    height: 400px;
    position: relative;
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
            <img src="/image/Banner10.png" alt="" />
          </SubBox>
        </div>
        <div>
          <SubBox>
            <img src="/image/Banner_4.png" alt="" />
          </SubBox>
        </div>
        <div>
          <SubBox>
            <img src="/image/Banner9.png" alt="" />
          </SubBox>
        </div>
      </SLiderBox>
    </MainBox>
  );
}
