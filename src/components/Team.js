import React from 'react'
import TeamMember from './TeamMember'
import Counter from './Counter'
export default function Team() {

  
  return (
    <div className='row mt-5 '>
     <h1> <Counter/></h1>
        <TeamMember number="1" age='17' image="/images/img1.jpg"/><br/>
        <TeamMember number="2" image="/images/img2.jpg"/>
        <TeamMember number="3" image="/images/img3.jpg"/>
        </div>
  )
}
