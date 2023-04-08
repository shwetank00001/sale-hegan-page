import './SalesListView.css'

import { React, useEffect, useState, useRef } from "react";

import SalesListViewHeader from './SalesListViewHeader';

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
                 
//                   <button className='view-sale-list'>view</button>
//                   <button className='view-sale-list'>View</button>
//                   <button className='del-sale-list'>Delete</button>
//                 </td>

//       </tr>
//     )
//   })

//   console.log(data)


return (
    <div className="main-saleslist-view-file">
              
      <div className="saleslist-view-main">
        <SalesListViewHeader />
        <div className="saleslist-view">
          
          <div className="saleslist-view-header">
            <h1>view SALES LIST</h1>
          </div>

          <div className='saleslist-view-input-area'>
              <div className="table-top-saleslist-view">

                <div className="show-name-saleslist-view">
                  <label htmlFor="show">Enter Invoice No* : </label>
                  <input id="show" placeholder='Enter Invoice No'/>
                </div>

                <div className="search-name-saleslist-view">
                  <label>Enter Firm Name*</label>
                  <input placeholder="Enter Firm Name" />
                </div>

              </div>
              <div className="table-top-saleslist-view">

                <div className="show-name-saleslist-view">
                  <label htmlFor="show">Enter Region </label>
                  <input id="show" />
                </div>

                <div className="search-name-saleslist-view">
                  <label htmlFor="type">Enter Type </label>
                  <input placeholder="Add type.." />
                </div>

              </div>
              <div className="table-top-saleslist-view">

                <div className="show-name-saleslist-view">
                  <label htmlFor="show">Enter Amount </label>
                  <input id="show" placeholder='amt.' />
                </div>

                <div className="search-name-saleslist-view">
                  <label>Add date</label>
                  <input type='date' placeholder="Search by Name, sales Name" />
                </div>

              </div>
          </div>


        </div>
      </div>
    </div>
  )

}