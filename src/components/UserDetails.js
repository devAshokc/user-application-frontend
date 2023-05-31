import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export function UserDetails(){
    const navigate = useNavigate();
    const handleClick = ()=>{
        localStorage.clear();
        navigate("/");
        window.location.reload();
      }
      const token = localStorage.getItem("Authorization")
      if(token){
        var email = localStorage.getItem("email")
        var username = localStorage.getItem("username")
        var phone = localStorage.getItem("phone")
      }

    return<>
   <div className="header">
   <AppBar className='navbar' position="relative">
        <Toolbar>
          <Typography onClick={handleClick} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            user<span className='logo-F'>Appli</span>cation
          </Typography>
          <Button onClick={handleClick} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
<div className="tbl">
   <table>
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone No</th>
  </tr>
    <tr>
    <td>{username}</td>
    <td>{email}</td>
    <td>+91-{phone}</td>
  </tr>
</table>
</div>
   </div>
    </>
}