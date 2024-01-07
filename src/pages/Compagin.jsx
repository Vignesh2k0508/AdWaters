import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { IoIosSettings } from "react-icons/io";

const Compagin = () => {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
        //   backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
          backgroundColor: theme.palette.mode === 'light' ? '#1b1c1c' : '#1b1c1c',
        },
      }));

  return (
    <div className="campagin">
        <div className="compagin-header">
            <h3>Compagin : Ad#16545 Banglore first </h3><span><IoIosSettings/></span>
        </div>
            
            <div className="stats-box">
                <h4>Stats box</h4>
                <div className="box">
                    <div className="status-bar">
                    {/* <Box sx={{ flexGrow: 1 }}> */}
                 
                    <BorderLinearProgress variant="determinate" id="progress" value={40} />
                {/* </Box> */}
                    </div>
                    <h4>Status : 40% (40000 / 100000)</h4>
                </div>
                <div className="box">
                    <h4>Total Scan : 12,434</h4>
                    <h4>scan rate: 31%</h4>
                </div>
                <div className="box">
                    <p>Verified repeated scan</p>
                </div>
            </div>
        </div>
  )
}

export default Compagin