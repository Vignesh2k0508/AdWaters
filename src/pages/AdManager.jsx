import React from 'react'
import Logo from '../Assets/Logo.png'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import RetailersList from './RetailersList';
import "../pages/AdManager.css"
import Compagin from './Compagin';

const AdManager = () => {

  

  return (
    <div className="container">
        <div className="header">
            <div className="image">
                <img src={Logo} alt="" />
            </div>
            <h5>Adwaters ad manager</h5>
        </div>

        <div className="content-container">
            <Compagin/>
            <RetailersList/>
        </div>
        
    </div>
  )
}

export default AdManager