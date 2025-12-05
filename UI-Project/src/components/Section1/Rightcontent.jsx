import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div className='h-[75vh] w-2/3  p-4  flex flex-nowrap gap-5'>
      {props.users.map(function(elem){
        return <Rightcard id={elem.id} img={elem.img} tag={elem.tag}/>
})}
    </div>
  )
}

export default Rightcontent
