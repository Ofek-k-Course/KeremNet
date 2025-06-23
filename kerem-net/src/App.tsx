import React from 'react';
import Post from './Components/Post/Post'
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <Post authorName='ofek'
        amountOfLikes={3}
        replies = {[
          {
            author: "Ofek",
            text: "test reply"
          },
          {
            author: "Oren",
            text: "test reply2"
          }
        ]}
        text='this is a test text for post by ofek'
        uploadTime={new Date()}></Post>
    </div>
    </>
  );
}

export default App;
