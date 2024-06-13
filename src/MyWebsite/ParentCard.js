import React, { useState } from 'react'
import MyApi from "./MyApi"
import ChildData from "./ChildData"
import "./Style.css"

const UneaqueList = [
  ...new Set
    (MyApi.map ((curElem) => {
      return curElem.category;
    })
  ),
  "all"
];


const ParentCard = () => {
    const [MyData, setMyData] = useState(MyApi);

    const FilterItem = (category)=> {
      if (category === "all") {
        setMyData(MyApi);
        return;
      };
      const updatedList = MyApi.filter((curElem) => {
        return curElem.category === category;
      });
      setMyData(updatedList);
    }

  return (
    <>
      <div className='navbar'>
        {UneaqueList.map((curElem) => {
          return (
            <button onClick={()=> FilterItem(curElem)}>{curElem}</button>
          )
        })}
      </div>
      <ChildData MyData = {MyData} />
    </>
  )
}

export default ParentCard
