import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookList from "./components/BookList/BookList";
import AddBook from "./components/AddBook/AddBook";

//  apollo client setup
const client = new ApolloClient({
  uri: "https://stormy-basin-84609.herokuapp.com/",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
