import React from 'react';
import DataLists from "./components/DataLists";

const users = ["Tom", "Bob", "Sam", "Uwe", "Mike"];
const posts = ["Hello world", "Hello you", "Post it", "Post out", "Another Post"];

function App() {
  return (
    <DataLists users={users} posts={posts} />
  );
}

export default App;
