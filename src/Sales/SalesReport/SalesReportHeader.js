import React from 'react'
import { BsFillBellFill , BsSearch} from "react-icons/bs";
import './SalesReportHeader.css'

export default function SalesReportHeader(){
  return (
    <div className='sales-reportheader-main' >
        <div className='sales-reportheader'>
            <div className='sales-report-header-input'>
                <BsSearch className='navbar-logo-size'/>
                <input  
                 placeholder='Type here ....'
                 className='sales-report-input'   
                />
                
            </div>
        </div>

        <div>
            <div className='sales-report-header-input'>

                <BsFillBellFill className='navbar-logo-size' />
                <p>Name</p>
            </div>

        </div>
        

    </div>
  )
}

