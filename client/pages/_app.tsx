import { ApolloProvider } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const client = initializeApollo();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
