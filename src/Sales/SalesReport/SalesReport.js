import './SalesReport.css'

import { React, useEffect, useState, useRef } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { FaFileCsv, FaRegCopy } from "react-icons/fa";
import Swal from "sweetalert2";

import SalesReportHeader from './SalesReportHeader';

import value from '../SalesReport/value';

export default function Salesreport (){

  const ele = value.map(function(item){
    return(
      <tr>
                <td><span className='span-width'>{item.id + 1}</span></td>
                <td><span className='span-width'>{item.date}</span></td>
                <td><span className='span-width'>{item.invoice}</span></td>
                <td><span className='span-width'>{item.fName}</span></td>
                <td><span className='span-width'>{item.region}</span></td>
                <td><span className='span-width'>{item.type }</span></td>
                <td><span className='span-width'>{item.amt}</span></td>
                <td><span className='span-width'>{item.discount}</span></td>
                <td><span className='span-width'>{item.sgst}</span></td>
                <td><span className='span-width'>{item.csgst}</span></td>
                <td><span className='span-width'>{item.igst}</span></td>
                <td><span className='span-width'>{item.cess}</span></td>
                <td><span className='span-width'>{item.tax}</span></td>zzzzy
                <td><span className='span-width'>{item.cnamt}</span></td>
                <td><span className='span-width'>{item.total}</span></td>

      </tr>
    )
  })



return (
    <div className="main-salesreport-file">
      <div className="salesreport-main">
      <SalesReportHeader />
        <div className="salesreport">
          <div className="salesreport-header">
            <h1>SALES REPORT</h1>
          </div>

          <div className="table-top-salesreport">
            <div className="show-name-salesreport">
              <label htmlFor="show">Show : </label>
              <input id="show" />
              <FaRegFilePdf className="pdf-salesreport" />
              <FaFileCsv className="csv-salesreport" />
              <FaRegCopy className="copy-salesreport" />
            </div>

            <div className="search-name-salesreport">
              <input placeholder="Search by Name, sales Name" />
            </div>
          </div>
          <div className="table-customer-salesreport">
            <table  id="customers-salesreport">
              <tr className="table-customer-heading-salesreport">
                <th>Sr.No</th>
                <th>Firm Name </th>
                <th>dATE</th>
                <th>Invoice No.</th>
                <th>Region</th>
                <th>Type</th>
                <th>Amount </th>
                <th>Discount</th>
                <th>SGST</th>
                <th>CGST</th>
                <th>IGST</th>
                <th>CESS</th>
                <th>Tax Amt</th>
                <th>CN Amt</th>
                <th>Sub Total</th>
              </tr>


              {ele}

              
            </table>
          </div>
        </div>
      </div>
    </div>
  )

}