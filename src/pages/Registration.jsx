// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import BackendUrl from '../utils/BackendUrl';
// import axios from "axios";
// const Registration=()=>{
// const [input, setInput] = useState({});

// const handleInput=(e)=>{
//   let name=e.target.name;
//   let value=e.target.value;
//   setInput(values=>({...values, [name]:value}));
//   console.log(input);
// }
// const handleSubmit=async(e)=>{
//   e.preventDefault();
//   let api=`${BackendUrl}user/registration`;
//   const response = await axios.post(api, input);
//   console.log(response);
//   alert(response.data.msg);
// }
// return(
//         <>
//           <h1 align="center"> User Registration </h1>
//            <Form style={{width:"600px", margin:"auto"}}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Name</Form.Label>
//         <Form.Control type="text" name="name" onChange={handleInput} />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Email</Form.Label>
//         <Form.Control type="email" name="email"  onChange={handleInput} />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Password</Form.Label>
//         <Form.Control type="password" name="password"  onChange={handleInput} />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//         </>
//     )
// }
// export default Registration;












import { useState, useEffect } from "react";

import Table from 'react-bootstrap/Table';
import axios from "axios";


const Registration = () => {
  const [mydata, setMydata] = useState([]);
 

  const loadData = async () => {
  let api="http://localhost:8000/userdisplay";

    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }
  useEffect(() => {
    loadData();
  }, []);
  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td> {key.firstname} </td>
          <td> {key.lastname} </td>
          <td> {key.userid.email} </td>
          <td> {key.userid.username} </td>
         
        </tr>
      </>
    )
  })
  return (
    <>
      <h1> Update Page</h1>
      <Table striped bordered hover align="center" style={{ width: "600px" }}>
        <thead>
          <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
            <th>username</th>
           
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </Table>
    </>
  )
}
export default Registration;