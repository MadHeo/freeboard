import VisitorsPresenter from "./visitors.presenter";
import { firebaseApp } from "../../../commons/liverise/firebase";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  DocumentData,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { withAuth } from "../../commons/withAuth/withAuth";

function VisitorsContainer() {
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");
  const [nameEdit, setNameEdit] = useState("");
  const [contentsEdit, setContentsEdit] = useState("");
  const [isEdit, setIsEdit] = useState(true);
  const [dataVisit, setDataVisit] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchVisit = async () => {
      const visit = collection(getFirestore(firebaseApp), "visit");
      const result = await getDocs(visit);
      const datas = result.docs.map((el) => el.data());
      console.log(datas);
      // setDataVisit(datas);
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

  const onClickEdit = (e) => {
    // const visit = collection(getFirestore(firebaseApp), "visit");
    // const result = await getDocs(visit);
    // const datas = result.docs.map((el) => el.data());
    // console.log(result.docs);
    // const visit = doc(getFirestore(firebaseApp), "visit");
    // await updateDoc(visit, {
    //   name: name,
    //   contents: contents,
    //   date: new Date(),
    // });
  };

  const onClickDelete = async (e) => {
    const visit = collection(getFirestore(firebaseApp), "visit");
    console.log(e.currentTarget.id);
    await deleteDoc(doc(visit, "2Y4kctUvciNdTgi3WAdn"));
  };

  const onClickFetchData = async (): Promise<void> => {
    // const visit = collection(getFirestore(firebasehnApp), "visit");
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

  const onChangeNameEdit = (event) => {
    setName(event.currentTarget.value);
  };

  const onChangeContentsEdit = (event) => {
    setContents(event.currentTarget.value);
  };

  return (
    <>
      <VisitorsPresenter
        onChangeName={onChangeName}
        onChangeContents={onChangeContents}
        onClickWrite={onClickWrite}
        onChangeNameEdit={onChangeNameEdit}
        onChangeContentsEdit={onChangeContentsEdit}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        name={name}
        dataVisit={dataVisit}
        contents={contents}
        isEdit={isEdit}
      ></VisitorsPresenter>
    </>
  );
}

export default withAuth(VisitorsContainer);
