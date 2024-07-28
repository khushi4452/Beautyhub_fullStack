import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("user") || "{}");
    if (store?.name) {
      alert("You are already logged in");
      window.location.href = "/";
    }
  }, []);

  const loginHere = async () => {
 try {
 const response = await axios.post("/api/v1/logins", {
 email: email,
password: password,
  });


  if (response?.data?.success) {
alert(response?.data?.message);
localStorage.setItem("user", JSON.stringify(response?.data?.data));
window.location.href = "/addproduct";

setEmail("");
setPassword("");
} else {
 alert(response?.data?.message);
 }
} catch (error) {
 console.error("Login failed", error);
alert("Login failed. Please try again.");
 }
  };

return (
 <>
<Navbar />
 <div className="mb-20"></div>
<div className="flex justify-center gap-x-20 flex-wrap">
        
 <div>
  <form className="form-control mx-auto" onSubmit={(e) => e.preventDefault()}>
 <p className="title">Login</p>
 <div className="input-field">


 <input
 required
 className="input"
 type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
 id="email"
 />
  <label className="label" htmlFor="email">
 Enter Email
 </label>



 </div>
 <div className="input-field">
 <input
 required
className="input"
 type="password"
 value={password}
 onChange={(e) => setPassword(e.target.value)}   id="password" />



<label className="label" htmlFor="password">
 Enter password
 </label>
  </div>


         
  <Link to="/signup" className="no-underline text-blue-600">
  Create a new account!!
</Link>


 <button
  type="button"
 className="submit-btn bg-pink-600"
  onClick={loginHere}
>
Login
  </button>
 </form>
</div>
</div>
 </>
  );
}

export default Login;
