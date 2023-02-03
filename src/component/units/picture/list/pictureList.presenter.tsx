import * as S from "./pictureList.style";

interface IPictureListProps {
  apiData: any;
  onClickChangeData: any;
}

export default function PictureListPresenter(
  props: IPictureListProps
): JSX.Element {
  return (
    <>
      <S.MainBox>
        <S.MyButton onClick={props.onClickChangeData}>
          🥳 강쥐 사진 보기 👉
        </S.MyButton>
        <S.ImageBox>
          <img src={props.apiData} />
        </S.ImageBox>
      </S.MainBox>
    </>
  );
}
