import React from 'react';
import Post from './Components/Post/Post'
import Reply from './Components/Comment/Reply';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <Post authorName='ofek'
        likes={3}
        replies = {[
          <Reply author = 'ofek' >test</Reply>,
          <Reply author = 'oren' >test2</Reply>,
        ]}
        text='this is a test text for post by ofek'
        uploadTime={new Date()}></Post>
    </div>
    
   
    
    </>
  );
}

export default App;
