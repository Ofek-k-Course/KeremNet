import React, { ReactElement } from 'react'
import HomePage  from './HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostPage from './PostPage/PostPage'


export default function page():ReactElement {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path="/post/:id" element = {<PostPage/>}/> 

        </Routes>
      </BrowserRouter>
    </div>
  )
}