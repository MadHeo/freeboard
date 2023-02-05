import VisitorsPresenter from "./visitors.presenter";
import { firebaseApp } from "../../../commons/liverise/firebase";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import { async } from "@firebase/util";
import { useState } from "react";

export default function VisitorsContainer() {
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");

  const visit = collection(getFirestore(firebaseApp), "visit");
  const result = getDocs(visit);
  const Datas = result.docs.map((el) => el.data());
  const nameData = result.docs.map((el) => el.data().name);
  const contentsData = result.docs.map((el) => el.data().contents);
  setName(nameData);
  setContents(contentsData);

  const onClickWrite = () => {
    const visit = collection(getFirestore(firebaseApp), "visit");

    void addDoc(visit, {
      name: name,
      contents: contents,
      date: new Date(),
    });

    setName("");
    setContents("");
  };

  const onClickFetchData = async (): Promise<void> => {
    // const visit = collection(getFirestore(firebaseApp), "visit");
    // const result = await getDocs(visit);
    // const nameData = result.docs.map((el) => el.data().name);
    // const contentsData = result.docs.map((el) => el.data().contents);
    // setName(nameData);
    // setContents(contentsData);
  };

  const onChangeName = (event) => {
    setName(event.currentTarget.value);
  };

  const onChangeContents = (event) => {
    setContents(event.currentTarget.value);
  };

  return (
    <>
      <VisitorsPresenter
        onClickFetchData={onClickFetchData}
        onChangeName={onChangeName}
        onChangeContents={onChangeContents}
        onClickWrite={onClickWrite}
        name={name}
        Datas={Datas}
        contents={contents}
        nameData={nameData}
        contentsData={contentsData}
      ></VisitorsPresenter>
    </>
  );
}
