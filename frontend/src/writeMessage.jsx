import { useEffect, useRef, useState } from "react"

export default function WriteMessage(){

    const from=useRef()
    const to=useRef()
    const sub=useRef()
    const msg=useRef()
    const [message,setMessage]=useState()

    function submitFunction(e){
        e.preventDefault()
        if(from.current.value&&to.current.value&&sub.current.value&&msg.current.value){
            setMessage({
                from:from.current.value,
                to:to.current.value,
                at:new Date(),
                sub:sub.current.value,
                content:msg.current.value
            })
        }else{alert("Please fill in valid data!")}
    }

    useEffect(()=>{
        if(message){
            console.log("send Server Request");
            console.log(message);
        }
    },[message])

    return(
        <div>
            WRITEMESSAGE
            <form action="" onSubmit={submitFunction}>
                <input type="text" placeholder="from" ref={from} />
                <input type="text" placeholder="to" ref={to} />
                <input type="text" placeholder="subject" ref={sub} />
                <textarea placeholder="message" ref={msg} cols="30" rows="3"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}