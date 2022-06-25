import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u3vnvu0k3t01t6bt21784s/master',
    cache: new InMemoryCache()
});