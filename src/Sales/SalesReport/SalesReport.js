import './SalesReport.css'

import { React, useEffect, useState, useRef } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { FaFileCsv, FaRegCopy } from "react-icons/fa";
import Swal from "sweetalert2";

import SalesReportHeader from './SalesReportHeader';

export default function Salesreport (){


return (
    <div className="main-salesreport-file">
      <div className="salesreport-main">
      <SalesReportHeader />
        <div className="salesreport">
          <div className="salesreport-header">
            <h1>SALES report</h1>
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
                <td>SHWETANK</td>
                <td>SHWETANK</td>
                <td>SHWETANK</td>
                <td>Will add button with map</td>
                {/* <td className='action-button-sales-table'>
                    <button>Add</button>
                    <button>Edit</button>
                    <button>Del</button>
                </td> */}
              </tr>

              
            </table>
          </div>
        </div>
      </div>
    </div>
  )

}