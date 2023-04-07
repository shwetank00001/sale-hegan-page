import './SalesList.css'
import SalesListHeader from './SalesListHeader';

import { React, useEffect, useState, useRef } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { FaFileCsv, FaRegCopy } from "react-icons/fa";
import Swal from "sweetalert2";

export default function SalesList (){


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

              <tr>
                <td>1</td>
                <td>Date</td>
                <td id='appadd'>SHWETANK</td>
                <td>SHWETANK</td>
                <td><span className='span-width'>SHWETANKqqqqqqqqqqqqqqqqqqqqqqqqq</span></td>
                <td>SHWETANK</td>
                <td>SHWETANK</td>
                <td className='action-button-sales-table'>
                    <button>Add</button>
                    <button>Edit</button>
                    <button>Del</button>
                </td>
              </tr>

              
            </table>
          </div>
        </div>
      </div>
    </div>
  )

}