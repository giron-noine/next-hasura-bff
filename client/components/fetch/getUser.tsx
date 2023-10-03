import { GetPostsQuery } from "../../src/gql/graphql";
import { GET_POSTS } from "../../src/posts";
import { initializeApollo } from "../../lib/apolloClient";
const client = initializeApollo();

export default async function getUser() {
  const { data } = await client.query<GetPostsQuery>({
    query: GET_POSTS,
  });

  return data;
}
