import React, { ReactElement } from 'react'
import "./RepliesList.css"

export default function RepliesList(replies:ReactElement[]) {
  return (
    <div className='RepliesList'>
        {replies}
    </div>
  )
}
