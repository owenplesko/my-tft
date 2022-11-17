import React from 'react'

const DropDown = () => {
  return (
    <div className='dropdown'>
        <div className='select'>
            <span className='selected'>Region</span>
            <div className='caret'/>
        </div>
        <ul className='menu'>
            <li className='active'>NA</li>
            <li>EUW</li>
            <li>KR</li>
            <li>EUW</li>
        </ul>
    </div>
  )
}

export default DropDown