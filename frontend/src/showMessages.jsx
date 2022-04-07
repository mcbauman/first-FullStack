import { useEffect, useState } from "react"

export default function ShowMessages(){
    const [messages,setMessages]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4040/messages")
        .then(response=>response.json())
        .then(result=>{
            console.log(result)
            setMessages(result)
        })
    },[])
    return(
        <div>
            <h2>list of Messages</h2>
            {messages.map(msg=><li key={msg._id}>from <span className="highlighted">{msg.from}</span> to <span className="highlighted">{msg.to} </span>at <span className="highlighted">{msg.at}</span> with <span className="highlighted">{msg.sub}</span></li>)}
        </div>
    )
}