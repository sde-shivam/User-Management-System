import React,{useEffect,useState} from "react";
import { Link,useParams} from "react-router-dom";
import axios from "axios";
export default function AddUser() {

  const[user,setUser]=useState({
    name:"",
    username:"",
    email:""
  })

  const {id}=useParams();

  useEffect(()=>{
    loadUser();
  },[]);

  const loadUser = async ()=>{
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h2 className="text-center mb-4">User Details</h2>

          <div className="card">
            <div className="card-header text-center">
               Details of user id :{id}
               <ul className="list-group list-group-flush">
                 <li className="list-group-item text-center">
                    <b>Name:</b>
                    {user.name}
                 </li>
                 <li className="list-group-item text-center">
                    <b>UserName:</b>
                    {user.username}
                 </li>
                 <li className="list-group-item text-center">
                    <b>Email:</b>
                    {user.email}
                 </li>
               </ul>
            </div>
          </div>
        <div className="d-flex justify-content-center">
        <Link className="btn btn-primary my-2" to="/">
            Back to Home
        </Link>
</div> 
     </div> 
     </div>
     </div>
  );
} 