import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      createdAt
      boardAddress {
        zipcode
        address
        addressDetail
      }
      youtubeUrl
      images
    }
  }
`;

// export const UPDATE_BOARD = gql`
//   mutation updateBoard(
//     $updateBoardInput: UpdateBoardInput!
//     $password: String
//     $boardId: ID!
//   ) {
//     updateBoard(updateBoardInput: $updateBoardInput) {
//       _id
//       writer
//       title
//       contents
//       youtubeUrl
//       boardAddress {
//         zipcode
//         address
//         addressDetail
//       }
//     }
//   }
// `;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      boardId: $boardId
      password: $password
      updateBoardInput: $updateBoardInput
    ) {
      _id
      writer
      title
      contents
      youtubeUrl
    }
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      createdAt
      likeCount
      dislikeCount
      boardAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;
