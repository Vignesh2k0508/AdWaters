import { Button, ButtonGroup } from '@mui/material'
import React, { useRef } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { LuSearch } from "react-icons/lu";


const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'Name', headerName: 'Name', width: 350 },
  { field: 'BottlesDistributed', headerName: 'Bottles Distributed',type: 'number', width: 200 },
  {
    field: 'VerifiedScans',
    headerName: 'Verified Scans',
    type: 'number',
    width: 150,
  },
  {
    field: 'Pincode',
    headerName: 'Pincode',
    // description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
  },
  {
    field: "RecentDeliveryDate",
    headerName: "Recent Delivery Date",
    width: 200,
  },
  {
    field: "ScanRate",
    headerName: "ScanRate",
    width: 150,
  }
];
// scan rate - out of 100, recent delivery date

const rows = [
  { 
    id: 1, 
    Name: 'Snow',
    BottlesDistributed: 45,
    VerifiedScans: 35 ,
    Pincode: 560085, 
    RecentDeliveryDate:"20/12/2022",
    ScanRate: "40%",
  },
  { id: 2, 
    Name: 'Lannister', 
    BottlesDistributed: 452, 
    VerifiedScans: 42 , 
    Pincode: 5600185 ,
    RecentDeliveryDate:"20/12/2023",
    ScanRate: "10%",
  },
  { id: 3, 
    Name: 'Lannister', 
    BottlesDistributed: 400, 
    VerifiedScans: 45 , 
    Pincode: 560205, 
    RecentDeliveryDate:"20/12/2023",
    ScanRate: "90%",
  },
  { 
    id: 4, Name: 'Stark', 
    BottlesDistributed: 200, 
    VerifiedScans: 16 , 
    Pincode: 560553,
    RecentDeliveryDate:"20/12/2023",
    ScanRate: "60%",
  },
  { 
    id: 5, 
    Name: 'Targaryen', 
    BottlesDistributed: 201, 
    VerifiedScans: null, 
    Pincode: 570085,
    RecentDeliveryDate:"20/12/2010",
    ScanRate: "50%",
  },
  { 
    id: 6, 
    Name: 'Melisandre', 
    BottlesDistributed: null, 
    VerifiedScans: 150 , 
    Pincode: 560015,
    RecentDeliveryDate:"20/12/2003",
    ScanRate: "70%",
  },
  { 
    id: 7, 
    Name: 'Clifford', 
    BottlesDistributed: 100, 
    VerifiedScans: 44 , 
    Pincode: 562085,
    RecentDeliveryDate:"30/12/2015",
    ScanRate: "20%" 
  },
  { 
    id: 8,
    Name: 'Frances', 
    BottlesDistributed: 120, 
    VerifiedScans: 36 ,
    Pincode: 561085,
    RecentDeliveryDate:"20/12/2023",
    ScanRate: "80%"
  },
  { 
    id: 9,
    Name: 'Roxie', 
    BottlesDistributed: 420, 
    VerifiedScans: 65, 
    Pincode: 560885,
    RecentDeliveryDate:"20/12/2023",
    ScanRate: "20%" 
  },
];

// dates sort
// const currencies = [
//   {
//     value: 'USD',
//     label: '$',
//   },
//   {
//     value: 'EUR',
//     label: '€',
//   },
//   {
//     value: 'BTC',
//     label: '฿',
//   },
//   {
//     value: 'JPY',
//     label: '¥',
//   },
// ];


const RetailersList = () => {

  let createInputBox=()=>{
    
    let existingFromDate = document.getElementById("fromDate")
    let existingToDate = document.getElementById("toDate")
    let existingLabelFrom = document.getElementById("labelFrom")
    let existingLabelTo = document.getElementById("labelTo")

    if(existingFromDate && existingToDate ){
      existingFromDate.remove()
      existingToDate.remove()
      existingLabelFrom.remove()
      existingLabelTo.remove()
    }else{
      
      let sortDateValue = document.getElementById("sort-date").value
      console.log(sortDateValue);
      let labelFrom = document.createElement("span")
      labelFrom.id="labelFrom"
      labelFrom.textContent = "From"
      labelFrom.style.marginRight="10px"
      

      let labelTo = document.createElement("span")
      labelTo.id="labelTo"
      labelTo.textContent = "To"
      labelTo.style.marginRight="10px"

      let from= document.createElement("input");
      from.type="date"
      from.id ="fromDate"
      from.style.marginRight="15px"
      let to = document.createElement("input");
      to.type ="date"
      to.id ="toDate"
      if(sortDateValue ==="Custom"){
        document.getElementById("from-date").appendChild(labelFrom)
        document.getElementById("from-date").appendChild(from)
        document.getElementById("to-date").appendChild(labelTo)
        document.getElementById("to-date").appendChild(to)
      }
    }

   
    
  
  }
 
 
  
  return (
    <div className="retailers">
        <div className="retailers-list">
            <h3>RETAILERS LIST</h3>
                <ButtonGroup id="retailers-list-btns"
                  disableElevation
                  variant="contained"
                  aria-label="Disabled elevation buttons">
                  <Button className='btn-list'>List</Button>
                  <Button>Map</Button>
                </ButtonGroup>
        </div>
        <div className="retailers-data">

        <div className="search-filter">
          <div className="search">
            <h4>SEARCH RETAILER</h4>
            <select name="" id="" >
              <option value="ByID">By ID</option>
              <option value="ByPincode">By Pincode</option>
            </select>
            <div className="search-box">
              <input type="search" />
              <span><LuSearch/></span>
            </div>
           
          </div>
          <div className="sort">
          {/* <TextField
              id="standard-select-currency txt"
              select
              label="Select"
              defaultValue="EUR"
              helperText="Please select your currency"
              variant="standard"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              defaultValue="EUR"
              helperText="Please select your currency"
              variant="standard"
            >
           
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField> */}
            <select name="sort-date" id="sort-date" onChange={createInputBox}>
              <option value="LastWeek">LastWeek</option>
              <option value="LastMonth">LastMonth</option>
              <option value="WholeCampagin">Whole Campagin</option>
              <option value="Custom">Custom</option>
            </select>
            <div id="from-date"></div>
            <div id="to-date"></div>
          </div>
        </div>
      
    <div style={{ height: 370, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>

    
    </div>
</div>
  )
}

export default RetailersList