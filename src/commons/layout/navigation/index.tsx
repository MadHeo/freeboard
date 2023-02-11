import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Fragment } from "react";
import type { MouseEvent } from "react";

const MainBox = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #8811ff;
`;

const ButtonBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;

  span {
    color: white;
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
            </Fragment>
          ))}
        </ButtonBox>
      </MainBox>
    </>
  );
}
