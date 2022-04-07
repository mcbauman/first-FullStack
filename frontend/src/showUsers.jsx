import { useEffect, useState } from "react"

export default function ShowUsers(){
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4040/users")
        .then(response=>response.json())
        .then(result=>{
            console.log(result)
            setUsers(result)
        })
    },[])
    return(
        <div>
            <h2>List of Users</h2>
            {users.map(usr=><li key={usr._id}><span className="highlighted">{usr.firstname}</span> - <span className="highlighted">{usr.lastname}</span> - <span className="highlighted">{usr.age}</span></li>)}
        </div>
    )
}