import React, { useContext, useRef, useState } from "react";
import  { useEffect } from "react";
import { loginUser } from "../../js/actions/user";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

const bull = (
  <Box
    component='span'
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navig = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const userAuth = useSelector((state) => state.userReducer.isAuth);
  console.log(userAuth)
  useEffect(() => {
    if (userAuth === true) {
      navigate("/listhotel");
    } else {
      navigate("/");
    }
  }, [userAuth]);
  console.log(email)
  console.log(password)
  const form = useRef();
  const [done, setDone] = useState(false);

  return (
    <div clanssName='skewbox'>
      <Card
        sx={{ maxWidth: 450, height: 390, marginTop: "11%", marginLeft: "17%" }}
      >
        <Typography
          sx={{ marginLeft: "12%", marginTop: "5%" }}
          variant='h5'
          component='div'
        >
          Se Conecter dans SkyTours
        </Typography>
        <CardContent sx={{ marginTop: "5%" }}>
          <Form  onSubmit={navig}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label
                type='text'
                name='email'
                id='email'
                value={email}
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
              >
                Email Address :
              </Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label
                type='password'
                name='password'
                value={password}
                id='pwd'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              >
                Password :
              </Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>

            <Button
              sx={{ borderRadius: "20px", marginLeft: "30%" }}
              variant='contained'
             onClick={navig}
            >
              Success
            </Button>
          </Form>
        </CardContent>
      </Card>

      <div className='devidershap' style={{ marginTop: "-39.8%" }}></div>
    </div>
  );
};
export default Login;
