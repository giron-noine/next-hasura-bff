import { GetUsersQuery } from "../../src/gql/graphql";
import { GET_USERS } from "../../src/query";
import { initializeApollo } from "../../lib/apolloClient";
const client = initializeApollo();

export default async function getUser() {
  const { data } = await client.query<GetUsersQuery>({
    query: GET_USERS,
  });

  return data;
}
