import { useState,useEffect } from "react";
import axios from "axios"


const UserList =()=>{
    const[users,setusers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{console.log(res)
            setusers(res.data)
        })
        .catch(err=>{console.log(err);})
    },[])




    return(
        <div>
           <ol> {
               users.map(user=>
              <li className="name">
                 <h6 > Name:{user.name}</h6>
                 <h6>Username:{user.username}</h6>
                 <h6>  Email:{user.email}</h6>
              </li>
             )
             }
          </ol>
    
    
    
        </div>
    )
}




export default UserList;


