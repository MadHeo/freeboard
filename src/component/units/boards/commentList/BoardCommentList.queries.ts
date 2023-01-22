import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

// export const FETCH_BOARD_COMMENTS = gql`

// `;

// export const FETCH_BOARD_COMMENTS = gql`

// `;
