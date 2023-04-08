import React from 'react'
import { BsFillBellFill , BsSearch} from "react-icons/bs";
import './SalesListViewHeader.css'

export default function SalesListviewHeader(){
  return (
    <div className='sales-listviewheader-main' >
        <div className='sales-listviewheader'>
            <div className='sales-listview-header-input'>
                <BsSearch className='navbar-logo-size'/>
                <input  
                 placeholder='Type here ....'
                 className='sales-listview-input'   
                />
                
            </div>
        </div>

        <div>
            <div className='sales-listview-header-input'>

                <BsFillBellFill className='navbar-logo-size' />
                <p>Name</p>
            </div>

        </div>
        

    </div>
  )
}

