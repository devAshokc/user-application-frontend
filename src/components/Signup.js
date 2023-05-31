import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { API } from "./global";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import { Box } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const signupValidationSchema = yup.object({
  username: yup.string().required("Why not fill this User-Name?").min(1),
  phone: yup
    .string()
    .required("Why not fill this Phone Number?")
    .min(10)
    .max(10),
  email: yup.string().required("Why not fill this e-mail ID?").min(8),
  password: yup.string().required("Why not fill this Password?").min(8),
});

export function Signup() {
  const navigate = useNavigate();

  const { handleSubmit, values, handleBlur, handleChange, touched, errors } =
    useFormik({
      initialValues: {
        username: "",
        phone: "",
        email: "",
        password: "",
      },
      validationSchema: signupValidationSchema,
      onSubmit: (newList) => {
        // console.log("User details", newList)
        addUser(newList);
      },
    });
  const addUser = (newList) => {
    fetch(`${API}/users/signup`, {
      method: "POST",
      body: JSON.stringify(newList),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(
        () =>
          toast.success("Account Created Successfully", {
            position: toast.POSITION.TOP_RIGHT
          }),
        navigate(`/users/login`)
      );
  };

  return (
    <div className="home-fr">
            <AppBar className='navbar' position="relative">
        <Toolbar>
          <Typography onClick={() => navigate('/')} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            user<span className='logo-F'>Appli</span>cation
          </Typography>
          <Button onClick={() => navigate('/users/login')} color="inherit">Login</Button>
          <Button onClick={() => navigate('/users/signup')} color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
      <Card  className="auth-container" elevation={5}>
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>SIGNUP</h2>

          <TextField
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && errors.username}
            helperText={
              touched.username && errors.username ? errors.username : null
            }
            className="textfield-auth"
            // type='text'
            label="User-Name"
            variant="outlined"
          />

          <TextField
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone && errors.phone}
            helperText={touched.phone && errors.phone ? errors.phone : null}
            className="textfield-auth"
            // type='text'
            label="Phone Number"
            variant="outlined"
          />

          <TextField
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
            helperText={touched.email && errors.email ? errors.email : null}
            className="textfield-auth"
            // type='text'
            label="e-mail ID"
            variant="outlined"
          />

          <TextField
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password}
            helperText={
              touched.password && errors.password ? errors.password : null
            }
            className="textfield-auth"
            type="password"
            label="Password"
            variant="outlined"
          />

          <Button
            type="submit"
            className="button-auth"
            variant="contained"
            // onClick={() => navigate('/products')}
          >
            S<span>ignup</span>
          </Button>
          <Box sx={{display:"flex",flexDirection:"column",textAlign:"center", gap:2, marginBottom:"1rem"}}>
            <Link className="auth-link" to="/users/login">
              Already have an account
            </Link>
            <Link onClick={() => navigate(-1)}>Back</Link>
          </Box>
        </form>
      </Card>
    </div>
  );
}