import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient, createHttpLink } from "@apollo/client/core";

const graphqlHttpLink = createHttpLink({
    uri: WORDPRESS_URI + "/graphql",
});

const graphqlClient = new ApolloClient({
    link: graphqlHttpLink,
    cache: new InMemoryCache(),
    onError: ({ networkError, graphQLErrors }) => {
        console.debug("graphQLErrors", graphQLErrors);
        console.error("networkError", networkError);
    },
})

export {
    graphqlClient
}