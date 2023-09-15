import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    user {
      name
      id
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts {
    post {
      id
      post
      date
    }
  }
`;
