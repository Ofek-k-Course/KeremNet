import React, { ReactElement } from 'react'
import "./List.css"

interface ListProps{
  elements:ReactElement[]
}
export default function List({elements}:ListProps) {
  return (
    <div className='list'>
        {elements}
    </div>
  )
}
