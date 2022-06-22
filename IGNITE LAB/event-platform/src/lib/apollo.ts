import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pzy6jw2mv401xs4tx3fvw0/master',
  cache: new InMemoryCache()
});