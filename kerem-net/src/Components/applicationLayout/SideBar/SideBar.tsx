import React from 'react'
import './SideBar.css'
import logo from '../../../Assets/logo.png'
import { Button } from '@mui/material'

export default function SideBar() {
  return (
    <div className='sidebar-body'>
        <div className='sidebar-top'>
            <img className= 'logoimage' src = {logo} alt='logo'></img> 
            <h1>KeremNet</h1>
        </div>
        <div className='sidebar-content'>
            <Button className='sidebar-button' variant='outlined'>test</Button>
            <Button className='sidebar-button' variant='outlined'>test</Button>
            <Button className='sidebar-button' variant='outlined'>test</Button>
        </div>
    </div>

  )
}