import React from 'react'

const ChildData = ({MyData}) => {
  return (
    
    <>
    <div className='container'>
        {MyData.map((MyElem) => {
            const {id, name, role} = MyElem;
            return (
                <>
                    <div className='cards bg-danger' key={id}>
                        <div className='card_header'>
                        </div>
                        <div className='card_bodt'>
                            <div className='card_name'>
                                <p>Name : <span>{name}</span></p>
                                <p>Role : <span>{role}</span></p>
                            </div>
                        </div>
                    </div>
                </>
            )
        })}
        
    </div>

        
    </>
  )
}

export default ChildData
