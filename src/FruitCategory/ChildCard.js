import React from 'react'

const ChildCard = ({initiaData}) => {
  return (
    <>
        <div className='cards_container'>
            {initiaData.map((currentElem) => {
                const {id, name, imageurl} = currentElem;
                return (
                    <>
                        <div className='cards' key={id}>
                            <div className='card_body'>
                                <img src={imageurl} alt='product'/>
                                <h2>{name}</h2>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    </>
  )
}

export default ChildCard
