import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import BackendURL from '../utils/backendurl';
import axios from 'axios';
 import { useNavigate } from 'react-router';
const Update=()=>{
  const [mydata,setMydata]=useState([]);
  const navigate=useNavigate();

  const loadData=async()=>{
    let api=`${BackendURL}students/update`;
    const response=await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
  }

  useEffect(()=>{
    loadData();
  },[])

  const mydel=async(id)=>{
    let api=`${BackendURL}students/delete/${id}`;
    const response=await axios.delete(api);
    console.log(response.data);
   alert("data successfully deleted");
    loadData();
  }

  const myEdit=(id)=>{
    console.log(id);
    navigate(`/edit/${id}`);
  }

  let sno=0;
  const ans=mydata.map((key)=>{
    sno++;
    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>{key.name}</td>
        <td>{key.rollno}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
        <td>  
           <span onClick={()=>{myEdit(key._id)}}>edit</span>
        </td>
        <td>
          <span onClick={()=>{mydel(key._id)}}>delete</span>
        </td>
      </tr>
      </>
    )
  })
    return(
        <>
         <h3 className="h33">Student Data display page!!!</h3>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Rollno</th>
          <th>City</th>
          <th>Fees</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
         {ans}
      </tbody>
      </Table>
   
        </>
    )
}
export default Update;