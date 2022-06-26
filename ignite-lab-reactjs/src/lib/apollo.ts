import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VIT_API_URL,
    headers: {
        'Authorization': `Bearer ${import.meta.env.VIT_API_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache()
});