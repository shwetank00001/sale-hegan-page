import './SalesList.css'
import SalesListHeader from './SalesListHeader';

import { React, useEffect, useState, useRef } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { FaFileCsv, FaRegCopy } from "react-icons/fa";
import Swal from "sweetalert2";

import data from './data'

export default function SalesList (){

  const ele = data.map(function(item){
    return(
      <tr>
                <td><span className='span-width'>{item.id + 1}</span></td>
                <td><span className='span-width'>{item.date}</span></td>
                <td><span className='span-width'>{item.invoice}</span></td>
                <td><span className='span-width'>{item.fName}</span></td>
                <td><span className='span-width'>{item.region}</span></td>
                <td><span className='span-width'>{item.type }</span></td>
                <td><span className='span-width'>{item.amt}</span></td>
                <td className='action-button-sales-table'>
                 
                  <button className='edit-sale-list'>Edit</button>
                  <button className='view-sale-list'>View</button>
                  <button className='del-sale-list'>Delete</button>
                </td>

      </tr>
    )
  })

  console.log(data)


return (
    <div className="main-saleslist-file">
              
      <div className="saleslist-main">
        <SalesListHeader /> 
        <div className="saleslist">
          
          <div className="saleslist-header">
            <h1>SALES LIST</h1>
          </div>

          <div className="table-top-saleslist">
            <div className="show-name-saleslist">
              <label htmlFor="show">Show : </label>
              <input id="show" />
              <FaRegFilePdf className="pdf-saleslist" />
              <FaFileCsv className="csv-saleslist" />
              <FaRegCopy className="copy-saleslist" />
            </div>

            <div className="search-name-saleslist">
              <input placeholder="Search by Name, sales Name" />
            </div>
          </div>
          <div className="table-customer-saleslist">
            <table  id="customers-saleslist">
              <tr className="table-customer-heading-saleslist">
                <th>Sr.No</th>
                <th>dATE</th>
                <th>Invoice No.</th>
                <th>Firm Name </th>
                <th>Region</th>
                <th>Type</th>
                <th>Amount </th>
                <th>Action</th>
              </tr>

                {ele}

              
            </table>
          </div>
        </div>
      </div>
    </div>
  )

}