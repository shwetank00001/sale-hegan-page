import './SalesListEdit.css'

import { React, useEffect, useState, useRef } from "react";

import SalesListEditHeader from './SalesListEditHeader';

export default function SalesList (){

//   const ele = data.map(function(item){
//     return(
//       <tr>
//                 <td><span className='span-width'>{item.id + 1}</span></td>
//                 <td><span className='span-width'>{item.date}</span></td>
//                 <td><span className='span-width'>{item.invoice}</span></td>
//                 <td><span className='span-width'>{item.fName}</span></td>
//                 <td><span className='span-width'>{item.region}</span></td>
//                 <td><span className='span-width'>{item.type }</span></td>
//                 <td><span className='span-width'>{item.amt}</span></td>
//                 <td className='action-button-sales-table'>
                 
//                   <button className='edit-sale-list'>Edit</button>
//                   <button className='view-sale-list'>View</button>
//                   <button className='del-sale-list'>Delete</button>
//                 </td>

//       </tr>
//     )
//   })

//   console.log(data)


return (
    <div className="main-saleslist-edit-file">
              
      <div className="saleslist-edit-main">
        <SalesListEditHeader />
        <div className="saleslist-edit">
          
          <div className="saleslist-edit-header">
            <h1>Edit SALES LIST</h1>
          </div>

          <div className='saleslist-edit-input-area'>
              <div className="table-top-saleslist-edit">

                <div className="show-name-saleslist-edit">
                  <label htmlFor="show">Enter Invoice No* : </label>
                  <input id="show" placeholder='Enter Invoice No'/>
                </div>

                <div className="search-name-saleslist-edit">
                  <label>Enter Firm Name*</label>
                  <input placeholder="Enter Firm Name" />
                </div>

              </div>
              <div className="table-top-saleslist-edit">

                <div className="show-name-saleslist-edit">
                  <label htmlFor="show">Enter Region </label>
                  <input id="show" />
                </div>

                <div className="search-name-saleslist-edit">
                  <label htmlFor="type">Enter Type </label>
                  <input placeholder="Add type.." />
                </div>

              </div>
              <div className="table-top-saleslist-edit">

                <div className="show-name-saleslist-edit">
                  <label htmlFor="show">Enter Amount </label>
                  <input id="show" placeholder='amt.' />
                </div>

                <div className="search-name-saleslist-edit">
                  <label>Add date</label>
                  <input type='date' placeholder="Search by Name, sales Name" />
                </div>

              </div>
          </div>

          <div className='saleslist-edit-button'>
            <button>Submit</button>
          </div>

        </div>
      </div>
    </div>
  )

}