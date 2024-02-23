import { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    // this would be a good place to make a POST request with fetch() to login to the site
    if (username==="admin" && password==="1234") {
      alert("You have logged in!");
    } else {
      alert("You cannot enter :(");
    }
  }

  return (
  <>
  <div className="login">
   <h2>Login</h2>
   <form onSubmit={handleSubmit}>
    <TextField
      id="username" 
      label="Username" 
      variant="outlined"  
      value={username} 
      margin="normal"
      onChange={(e) => {
        setUsername(e.target.value);
      }} 
      required
    />
    <br></br>
    <TextField 
      id="password" 
      label="Password" 
      variant="outlined" 
      type="password" 
      value={password} 
      margin="normal"
      onChange={(e) => {
        setPassword(e.target.value);
      }} 
      required 
    />
    <br></br>
    <Button 
    type="submit" 
    variant="contained" 
    size="small" 
    color="secondary"
    >Login</Button>
   </form>
  </div>
  </>
);
}