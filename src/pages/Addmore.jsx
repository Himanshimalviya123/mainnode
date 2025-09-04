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



import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
const Authormore=()=>{
    const {id}=useParams();
const [name, setName] = useState("");
const[price,setPrice]=useState("");

const handleSubmit=async()=>{
  let api="http://localhost:8000/bookSave";
  const response = await axios.post(api,{bookname:name,price:price,id:id});
  console.log(response);
 ;
}
return(
        <>
          <h1 align="center">add more book </h1>
          enter book name:-<input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <br/>
          enter price:-<input type='text' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
          <br/>
          <button onClick={handleSubmit}>save</button>
        </>
    )
}
export default Authormore;