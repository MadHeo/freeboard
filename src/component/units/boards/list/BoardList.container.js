import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import BoardListPresenter from "../list/BoardList.presenter";

export default function BoardListContainer() {
  return <BoardListPresenter />;
}
