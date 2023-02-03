import axios from "axios";
import { useEffect, useState } from "react";
import PictureListPresenter from "./pictureList.presenter";

export default function PictureListContainer() {
  const [apiData, setApiData] = useState();

  const getAPI = async () => {
    const result = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(result);
    setApiData(result.data.message);
  };

  const onClickChangeData = () => {
    getAPI();
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <>
      <PictureListPresenter
        onClickChangeData={onClickChangeData}
        apiData={apiData}
      />
    </>
  );
}
