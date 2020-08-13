import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookList from "./components/BookList/BookList";
import AddBook from "./components/AddBook/AddBook";

//  apollo client setup
const client = new ApolloClient({
  uri: "https://stormy-basin-84609.herokuapp.com/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Sample Project Built with </h1>
        <h1>Graphql, React, Apollo and </h1>
        <h1>Express to Get and Post Data</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
