import React, { ReactElement } from 'react'
import "./List.css"

interface Props{
  elements:ReactElement[]
}
export default function RepliesList({elements}:Props) {
  return (
    <div className='List'>
        {elements}
    </div>
  )
}
