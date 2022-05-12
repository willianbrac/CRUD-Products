import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Home from "./Components/Home";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4005/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </>
  );
}

export default App;
