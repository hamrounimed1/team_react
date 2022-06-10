import React from 'react'

export default function TeamMember(props) {
  return (
    <div className='col-md-4 col-sm-6'>
       <div className='card bg-primary'>
         <div className='card-header'>

         <img className='w-100' src={props.image} alt='ggg'/>
         </div>
         <div className='card-body'>

             {props.number}
         </div>

            
            </div>
        </div>
  )
}
