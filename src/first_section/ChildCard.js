import React from 'react'

const ChildCard = ({initialdata}) => {
  return (
    <>
        <div className='container-fluid'>
            <div className='container_main'>
                {initialdata.map((curElem) => {
                    return (
                        <>
                            <div className='cards' key={curElem.id}>
                                <div className='card'>
                                    <img src={curElem.imageurl} alt='imageproduct'/>
                                    <h1>{curElem.name}</h1>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default ChildCard
