import React from 'react'
import '../styles/components/Dropdown.css'
const Dropdown = ({data, setSeçimChange}) => {
  return (
    <div className='dropdown'>
        <select onChange={e=> setSeçimChange(e.target.value)}name="" id ="">
            {
                data.map((dt,i) =>(
                    <option value={dt}>{dt}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Dropdown