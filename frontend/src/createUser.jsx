import { useEffect, useRef, useState } from "react";


export default function CreateUser(){
    const firstNameRef=useRef()
    const lastNameRef=useRef()
    const ageRef=useRef()
    const emailRef=useRef()
    const [user,setUser]=useState()

    function submitFunction(e){
        e.preventDefault()
        if(firstNameRef.current.value&&lastNameRef.current.value&&ageRef.current.value&&emailRef.current.value){
            setUser({
                firstname:firstNameRef.current.value,
                lastname:lastNameRef.current.value,
                age:ageRef.current.value,
                email:emailRef.current.value,
            })
            console.log(user);
            firstNameRef.current.value=""
            lastNameRef.current.value=""
            ageRef.current.value=""
            emailRef.current.value=""
        }else{alert("Please fill in valid data!")}
    }
    useEffect(()=>{
        console.log(user)
        if(user){
            console.log("send Post Request");
            const url="http://localhost:4040/users"
            const config={
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(user)
            }
            fetch(url,config)
                .then(response=>response.json())
                .then(result=>console.log(result))
                .catch(error=>console.log(error))
        }
    },[user])
    return(
        <div>
            CREATEUSER
            <form action="" onSubmit={submitFunction}>
                <input type="text" ref={firstNameRef} placeholder="first name"/>
                <input type="text" ref={lastNameRef} placeholder="last name"/>
                <input type="number" ref={ageRef} placeholder="age"/>
                <input type="email" ref={emailRef} placeholder="email"/>
                <button type="submit">Save user</button>
            </form>
        </div>
    )
}
