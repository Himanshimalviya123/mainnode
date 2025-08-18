import Table from 'react-bootstrap/Table';

import { useState } from "react";
import BackendURL from "../utils/backendurl";
import axios from "axios";
const Search=()=>{
    const[rno,setRno]=useState([]);
      const [mydata,setMydata]=useState([]);

    const handlesubmit=async(e)=>{
            let api=`${BackendURL}students/search`;
    const response=await axios.post(api,{rollno:rno});
    console.log(response.data);
    setMydata(response.data);
    alert("data found!!")

    }
 

    return(
        <>
        <h5>search</h5>
        enter rollno:<input type="text" value={rno} onChange={(e)=>{setRno(e.target.value)}} />
        <button onClick={handlesubmit}>search</button>
         <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Rollno</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {mydata.length>=1 && mydata.map((key)=>{
            return(
                <>
            <tr>
       
        <td>{key.name}</td>
        <td>{key.rollno}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
      </>
                
            )
        }) }
         {/* {ans} */}
      </tbody>
      </Table>
        </>
    )
}
export default Search;