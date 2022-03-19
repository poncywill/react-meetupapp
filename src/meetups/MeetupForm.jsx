import React from 'react'
import { Card } from '../ui/Card'
import './MeetupForm.css'
import { useRef } from 'react'


export const MeetupForm = ({addMeetup}) => {
    const titleRf=useRef("")
    const addressRf=useRef("")
    const imageRf=useRef("")
    const descRf=useRef("")
    const addBtnHandler=(event)=>{
        event.preventDefault()
        const title=titleRf.current.value;
        const address=addressRf.current.value;
        const image=imageRf.current.value;
        const desc=descRf.current.value;
        console.log(title);
        console.log(address);
        addMeetup({"title":title,"address":address,"image":image,"description":desc})



    }
    
  return (

   <Card>
       <form>
           
           <div>
           <input type="text" placeholder='Enter meetup title' ref={titleRf}/>
           </div>
           <br></br>
           <div>

           <input type="text" placeholder='Enter meetup address' ref={addressRf}/>
           </div>
           <br />
           <div>
           <input type="url" placeholder='Enter meetup image url' ref={imageRf}/>
           </div>
           <br />
           <div>
           <input type="url" placeholder='Enter meetup description' ref={descRf}/>
           </div>
           <br />
           <button onClick={addBtnHandler}>Save</button>
          



       </form>



   </Card>


  
  )
}
