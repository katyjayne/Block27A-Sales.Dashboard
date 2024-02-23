import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Sidebar() {
  return (
    <>
      <h2>Sidebar/Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="username" 
          label="Username" 
          variant="outlined"  
          value={username} 
          onChange={(e) => {
            setUsername(e.target.value);
          }} 
          required
        />
        <TextField 
          id="password" 
          label="Password" 
          variant="outlined" 
          type="password" 
          value={password} 
          onChange={(e) => {
            setPassword(e.target.value);
          }} 
          required 
        />
        <Button type="submit" variant="outlined">Login</Button>
      </form>
    
    </>
  )
}