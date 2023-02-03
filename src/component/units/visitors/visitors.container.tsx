import VisitorsPresenter from "./visitors.presenter";
import { firebaseApp } from "../../../commons/liverise/firebase";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import { async } from "@firebase/util";
import { useState } from "react";

export default function VisitorsContainer() {
  const onClickSubmit = (): void => {
    const visit = collection(getFirestore(firebaseApp), "visit");

    void addDoc(visit, {
      number: 1,
      name: "바나나킥",
      contents:
        "안녕하세요 .반갑습니다. 잘부탁드립니다. 감사합니다. 안녕히 ㄱ?ㅖ세ㅐ요",
    });
  };

  const onClickFetchData = async (): Promise<void> => {
    const visit = collection(getFirestore(firebaseApp), "visit");
    const result = await getDocs(visit);
    const data = result.docs;
    console.log(data);
  };

  return (
    <>
      <VisitorsPresenter
        onClickSubmit={onClickSubmit}
        onClickFetchData={onClickFetchData}
      ></VisitorsPresenter>
    </>
  );
}
