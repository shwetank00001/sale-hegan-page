import React from 'react'
import { BsFillBellFill , BsSearch} from "react-icons/bs";
import './SalesListEditHeader.css'

export default function SalesListEditHeader(){
  return (
    <div className='sales-listEditheader-main' >
        <div className='sales-listEditheader'>
            <div className='sales-listEdit-header-input'>
                <BsSearch className='navbar-logo-size'/>
                <input  
                 placeholder='Type here ....'
                 className='sales-listEdit-input'   
                />
                
            </div>
        </div>

        <div>
            <div className='sales-listEdit-header-input'>

                <BsFillBellFill className='navbar-logo-size' />
                <p>Name</p>
            </div>

        </div>
        

    </div>
  )
}

