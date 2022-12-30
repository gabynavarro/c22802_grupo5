import React,{useEffect,useState} from 'react'
import { collection,getDocs,getDoc,doc } from 'firebase/firestore'
import {db} from '../utils/Fire'
const Mostrar = () => {
    const [usuarios, setUsers]=useState([])
    const usersCollection=collection(db, "usuario")
    //leer los datos db
    const getUsers=async ()=>{
        const data= await getDocs(usersCollection)
        console.log(data.docs)
        setUsers(
            data.docs.map(
                (index)=>({
                    nombre:index.nombre
                })
            )            
        );
        console.log(usuarios)
    }
useEffect(()=>{
    getUsers();
},[])


  return (
    <div>
      
    </div>
  )
}

export default Mostrar
