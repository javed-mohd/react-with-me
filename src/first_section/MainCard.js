import React, { useState } from 'react'
import "./Style.css"
import DataApi from "./DataApi"
import ChildCard from "./ChildCard"

const MainCard = () => {

    const UneaqueList = [...
        (DataApi.map((curElem) => {
            return curElem.category;
        })),
        "All"
    ]

    const FilterItem = (category) => {
        if(category === "All") {
            setinitialdata(DataApi)
            return;
        }
        const UpdatedList = DataApi.filter((curElem) => {
        return curElem.category === category;
        });
        setinitialdata(UpdatedList);
    }

    const [initialdata, setinitialdata] = useState(DataApi)
    return (
        <>
            <div className='container_fluid'>
                {UneaqueList.map((curElem) => {
                    return (
                        <button onClick={() => FilterItem(curElem)}>{curElem}</button>
                    )
                })}
            </div>
            <ChildCard initialdata = {initialdata} />
        </>
    )
}

export default MainCard
