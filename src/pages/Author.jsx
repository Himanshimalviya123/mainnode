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
const Author=()=>{
const [input, setInput] = useState({});

const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setInput(values=>({...values, [name]:value}));
  console.log(input);
}
const handleSubmit=async(e)=>{
  e.preventDefault();
  let api="http://localhost:8000/authorsave";
  const response = await axios.post(api, input);
  console.log(response);
 ;
}
return(
        <>
          <h1 align="center"> User Registration </h1>
           <Form style={{width:"600px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter authorname</Form.Label>
        <Form.Control type="text" name="authorname" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>author Email</Form.Label>
        <Form.Control type="text" name="email"  onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>book detail</Form.Label>
        <Form.Control type="text" name="bookdetail"  onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price</Form.Label>
        <Form.Control type="text" name="price"  onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Author;