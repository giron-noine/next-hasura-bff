import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      last_seen
    }
  }
`;

export const GET_POST = gql`
  query GetPost {
    post {
      id
      content
      create
    }
  }
`;
