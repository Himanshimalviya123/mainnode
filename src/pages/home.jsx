// import axios from "axios";
// import { useEffect } from "react";
// import BackendUrl from "../utils/BackendUrl";
// import { useNavigate } from "react-router-dom";

// const Home=()=>{

//   const navigate = useNavigate();

//  let api=`${BackendUrl}user/userauth`;

//   const userAuntehticate=async()=>{
//    const token = localStorage.getItem("token");
   
//     if (token)
//     {
//       const response = await axios.post(api, null, {headers: { "x-auth-token": token }} );
//       console.log(response);
      
//       localStorage.setItem("username", response.data.name);
//       localStorage.setItem("useremail", response.data.email);
//      navigate("/dashboard");
//     }
   
     

//   }

//  useEffect(()=>{
//     userAuntehticate();
//  }, [])




//     return(
//         <>
//           <h1> Welcome To Home Page</h1>
//         </>
//     )
// }

// export default Home;



import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
const Home=()=>{
const [input, setInput] = useState({});

const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setInput(values=>({...values, [name]:value}));
  console.log(input);
}
const handleSubmit=async(e)=>{
  e.preventDefault();
  let api="http://localhost:8000/usersave";
  const response = await axios.post(api, input);
  console.log(response);
 ;
}
return(
        <>
          <h1 align="center"> User Registration </h1>
           <Form style={{width:"600px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter username</Form.Label>
        <Form.Control type="text" name="username" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" name="email"  onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter firstname</Form.Label>
        <Form.Control type="text" name="firstname"  onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter lastname</Form.Label>
        <Form.Control type="text" name="lastname"  onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Home;