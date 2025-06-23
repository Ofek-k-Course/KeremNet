import React from 'react'
import './Reply.css'

interface Props{
  author:string
  children:string
}
export default function Reply({author, children}:Props) {
  return ( 
    <h3 className='reply'>{author} : {children}</h3>

  )
}
