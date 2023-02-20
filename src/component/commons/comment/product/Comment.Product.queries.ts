import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      useditem {
        name
        contents
        seller
      }
      user {
        _id
        name
      }
      createdAt
    }
  }
`;

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      useditem {
        _id
        name
        remarks
        contents
        price
        seller
      }
      user {
        _id
        name
      }
      createdAt
      # updateAt
    }
  }
`;
