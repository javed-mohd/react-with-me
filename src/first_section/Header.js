import React from 'react'
import "./Style.css"
import DataApi from './DataApi'

const Header = ({setinitialdata}) => {
  const FilterItem = (category) => {
    const UpdatedList = DataApi.filter((curElem) => {
      return curElem.category === category;
    });
    setinitialdata(UpdatedList);
  }
  return (
    <>
      <div className='container_fluid'>
          <button onClick={() => FilterItem("grapes")}>Grapes</button>
          <button>Orange</button>
          <button>Litchi</button>
      </div>
    </>
  )
}

export default Header
