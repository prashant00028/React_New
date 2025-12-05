
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-55 rounded-4xl relative shrink-0 overflow-hidden '>
      <img className='h-full w-full object-cover ' src={props.img} alt="" />
      <Rightcardcontent id={props.id} tag={props.tag}/>
      </div>
  )
}

export default Rightcard
