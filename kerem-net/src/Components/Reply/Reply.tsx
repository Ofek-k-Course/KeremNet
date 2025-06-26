import React from 'react'
import './Reply.css'
import User from '../../Models/user'
interface ReplyProps{
  author:User
  text:string
}
export default function Reply({author, text}:ReplyProps) {
  return ( 
    <h3 className='reply'>{author.name} : {text}</h3>
  )
}
