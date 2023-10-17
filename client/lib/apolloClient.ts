import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import "cross-fetch/polyfill";
import { setContext } from "@apollo/client/link/context";

const link = new HttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_URL,
});

const withTokenLink = setContext(async () => {
  const response = await fetch("/api/auth/token");
  console.log("response", response);
  if (response.ok) {
    const data = await response.json();
    return {
      headers: {
        Authorization: `Bearer ${data.token}`,
        "content-type": "application/json",
      },
    };
  } else {
    console.error("Failed to fetch token", response);
  }
});

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([withTokenLink, link]),
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};
