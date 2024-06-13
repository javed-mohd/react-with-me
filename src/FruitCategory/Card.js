import React, { useState } from 'react'
import ChildCard from "./ChildCard"
import DataApi from './DataApi'
import Navbar from "./Navbar"
import "./Style.css"

const Card = () => {

    const UneaqueList = [...
        (DataApi.map ((currentElem) => 
            {
                return currentElem.category;
            })
        ),
        "All"
    ];

    const [initiaData, setinitiaData] = useState(DataApi);
    
    const FilterItem = (category) => {
        if(category === "All") 
            {
                setinitiaData(DataApi)
                return;
            }
        const updatedList = DataApi.filter((currentElem) => {
            return currentElem.category === category;
        });
        setinitiaData(updatedList);
    };

  return (
    <>
        <Navbar FilterItem = {FilterItem} setinitiaData = {setinitiaData} UneaqueList = {UneaqueList} />
        <ChildCard initiaData = {initiaData} />
    </>
  )
}

export default Card
