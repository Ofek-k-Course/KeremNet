import React from 'react'
import './Reply.css'

interface ReplyProps{
  author:string
  text:string
}
export default function Reply({author, text}:ReplyProps) {
  return ( 
    <h3 className='reply'>{author} : {text}</h3>
  )
}
