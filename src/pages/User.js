import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "../config/axios";


export default function User() {
    let { id } = useParams();

    const [user, setUser] =  useState({});

    useEffect ( () => {
       axios.get("users/"+id)
            .then ((res) => {
                if(res.status === 200){
                  setUser(res.data)
                }else{
                  console.err("Error")
                }
            }          
            ).catch ( err => console.log("error", err ))
    }, [id])
  
    return (
      <div>
        <h3>ID: {id}</h3>
        Name:  {user.name} <br />
        Username:  {user.username} <br />
        email:  {user.email} <br />

      </div>
    );
}
