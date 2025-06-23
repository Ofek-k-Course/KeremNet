import React from 'react'
import './Reply.css'

interface Props{
  author:string
  children:string
}
export default function Reply({author, children}:Props) {
  return (
    <div className='reply'>
      <h2>{author} : {children}</h2>
    </div>
  )
}
