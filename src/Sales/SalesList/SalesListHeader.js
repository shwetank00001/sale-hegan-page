import React from 'react'
import { BsFillBellFill , BsSearch} from "react-icons/bs";
import './SalesListHeader.css'

export default function SalesListHeader(){
  return (
    <div className='sales-listheader-main' >
        <div className='sales-listheader'>
            <div className='sales-list-header-input'>
                <BsSearch className='navbar-logo-size'/>
                <input  
                 placeholder='Type here ....'
                 className='sales-list-input'   
                />
                
            </div>
        </div>

        <div>
            <div className='sales-list-header-input'>

                <BsFillBellFill className='navbar-logo-size' />
                <p>Name</p>
            </div>

        </div>
        

    </div>
  )
}

