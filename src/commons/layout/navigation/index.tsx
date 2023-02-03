import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Fragment } from "react";
import type { MouseEvent } from "react";

const MainBox = styled.div`
  width: 1920px;
  height: 64px;
  background-color: #9f31ed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonBox = styled.div`
  width: 1920px;
  height: 64px;
  background-color: #9f31ed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  span {
    color: white;
    margin: 0px 40px 0px 40px;
  }
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
  border: 0px;
  background: none;
  cursor: pointer;

  :hover {
    font-weight: 1000;
    color: black;
  }
`;

const NAVIGATION_MENUS = [
  { name: "자유게시판", page: "/boards/listPage" },
  { name: "사진첩", page: "/picture" },
  { name: "마켓", page: "/boards/listPage" },
  { name: "마이페이지", page: "/boards/listPage" },
  { name: "방명록", page: "/visitors" },
];

export default function Navigation() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    void router.push(event.currentTarget.id);
  };

  return (
    <>
      <MainBox>
        <ButtonBox>
          {NAVIGATION_MENUS.map((el) => (
            <Fragment>
              <Button id={el.page} onClick={onClickMenu}>
                {el.name}
              </Button>
              <span>|</span>
            </Fragment>
          ))}
        </ButtonBox>
      </MainBox>
    </>
  );
}
