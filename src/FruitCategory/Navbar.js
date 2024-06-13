import React from 'react'
import "./Style.css"

const Navbar = ({FilterItem, UneaqueList}) => {
  return (
    <>
        <div className='main_header'>
            <div className='header'>
                <h1>Welcome To Ecommerce Website</h1>
            </div>
            <div className='navbar_strip'>
                {UneaqueList.map ((currentElem) => {
                    return (
                        <button className='btn_grp' onClick={() => FilterItem(currentElem)}>{currentElem}</button>
                    )
                })}
            </div>
        </div>

        
    </>
  )
}

export default Navbar
