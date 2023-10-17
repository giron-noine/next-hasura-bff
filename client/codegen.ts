import type { CodegenConfig } from "@graphql-codegen/cli";

// dotenvを使わないと環境変数は使えないみたい
// https://the-guild.dev/graphql/codegen/docs/config-reference/require-field

//Hasura Cloud
// const url = NEXT_PUBLIC_HASURA_URL;
// const secret = HASURA_GRAPHQL_ADMIN_SECRET;

// docker
const url = "http://localhost:8080/v1/graphql";
const secret = "myadminsecretkey";

const config: CodegenConfig = {
  require: ["ts-node/register"],
  overwrite: true,
  schema: {
    [url]: {
      headers: {
        // If you have an admin secret set
        "x-hasura-admin-secret": secret,
      },
    },
  },
  config: {
    skipTypename: true,
    enumsAsTypes: true,
    scalars: {
      numeric: "number",
    },
  },
  documents: "src/**/*.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
    },
  },
};

export default config;
