"use client";
import { ApolloProvider } from "@apollo/client";
import { initializeApollo } from "./apolloClient";

export const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
  const client = initializeApollo();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
