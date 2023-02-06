import VisitorsPresenter from "./visitors.presenter";
import { firebaseApp } from "../../../commons/liverise/firebase";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  DocumentData,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { useEffect, useState } from "react";

export default function VisitorsContainer() {
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");
  const [dataVisit, setDataVisit] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchVisit = async () => {
      const visit = collection(getFirestore(firebaseApp), "visit");
      const result = await getDocs(visit);
      const datas = result.docs.map((el) => el.data());
      // const nameData = result.docs.map((el) => el.data().name);
      // const contentsData = result.docs.map((el) => el.data().contents);
      setDataVisit(datas);
    };
    void fetchVisit();
  }, []);

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
        onChangeName={onChangeName}
        onChangeContents={onChangeContents}
        onClickWrite={onClickWrite}
        name={name}
        dataVisit={dataVisit}
        contents={contents}
      ></VisitorsPresenter>
    </>
  );
}
