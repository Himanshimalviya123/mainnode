import {useState,useEffect } from "react";
import { useParams } from "react-router";
import BackendURL from "../utils/backendurl";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from "axios";

const Editdata=()=>{
    const {id}=useParams();
    const[mydata,setMydata]=useState({});
    const loadData=async()=>{
        let api=`${BackendURL}students/edit/?id=${id}`;
        const response=await axios.get(api);
        setMydata(response.data)
    }
    useEffect(()=>{
        loadData();
    },[])

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(Values=>({...Values,[name]:value}));
        console.log(mydata)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api=`${BackendURL}students/editsave`;
        const response=await axios.post(api,mydata);
        console.log(response.data);
        alert("data updated!!")
}
    return(
        <>
        <h3>Edit Data!!! </h3>
         <Form id="form">
               <Form.Group className="mb-3" >
                 <Form.Label>Enter Name</Form.Label>
                 <Form.Control type="text" name="name" value={mydata.name} onChange={handleInput}/>
              </Form.Group>
         
               <Form.Group className="mb-3" >
                 <Form.Label>Enter Rollno</Form.Label>
                 <Form.Control type="text" name="rollno" value={mydata.rollno} onChange={handleInput}/>
               </Form.Group>
               <Form.Group className="mb-3">
                 <Form.Label>Enter City</Form.Label>
                 <Form.Control type="text" name="city" value={mydata.city} onChange={handleInput}/>
               </Form.Group>
               <Form.Group className="mb-3" >
                 <Form.Label>Enter Fees</Form.Label>
                 <Form.Control type="text"  name="fees" value={mydata.fees} onChange={handleInput}/>
               </Form.Group>
               
               <Button variant="primary" type="submit" onClick={handleSubmit}>
                 Edit save
               </Button>
             </Form>
          
        </>
    )
}
export default Editdata;