import React, { ReactElement } from 'react'
import HomePage  from './HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function page():ReactElement {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}