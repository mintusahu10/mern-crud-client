import { Box, Button, Dialog, Input, InputLabel, Typography, styled } from "@mui/material";
import { useState ,useContext } from "react";
import signup from "../../Assets/Images/signup.webp";
import {loginData } from "../../service/api";
import { Link, useNavigate } from "react-router-dom";
import { AccountContext } from "../../context/AccountProvider";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Cookies from 'universal-cookie';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const cookies = new Cookies();

const Container = styled(Box)`
  background-color: #c1d7d7;
  height: 100vh;
`;
const DialogStyle = {
  width: "50%",
  height: "80%",
  maxWidth: "100%",
   
  boxShadow: "none",
  marginTop: "6%",
};

const LeftCointainer = styled(Box)`
  width: 50%;
`;
const RightCointainer = styled(Box)`
  width: 50%;
`;
const MainContainer = styled(Box)`
  display: flex;
`;

const RightContent = styled(Box)`
padding:56px 5px 0 30px;

`;
const TypographyStyle = styled(Typography)`
font-size:25px;
text-align:center;
margin:0 0 20px 0;
font-weight:600;
`;

const Image = styled("img")({
  height: "430px",
  width: "350px",
});

const InputField = styled(Box)`
margin-bottom:10px;
width:100%;

`;
const Inputstyled = styled(Input)`
font-size:14px
`;

const IconTypoStyled = styled(Box)`
padding: 0 0 10px 50px;
margin:0 0 10px 40px;
display:flex;
 
 
`;


const InitialValue = {
  
  email:'',
    
  password:''
   

}
const Login = () => {

  const {setAccount, setUser} = useContext(AccountContext);
  let [passwordtype ,setPasswordtype] = useState("password");


  const [login , setLogin] = useState(InitialValue);

  const { email, password} = login;

  const navigate = useNavigate();
  
  const InputHandle = (e)=>{
     
    setLogin({...login ,[e.target.name]:e.target.value});
    //console.log(data);

  }

  const onSubmitdata = async ()=>{

 const response = await loginData(login);
  const ResponseData = response.data;
  //console.log(ResponseData.existinguser);
 
 localStorage.setItem('myData',ResponseData.Auth);
 localStorage.setItem('userdata',JSON.stringify(ResponseData.existinguser));
 const usertoken=localStorage.getItem('myData');
 const userdata = localStorage.getItem('userdata');
 setAccount(true);
 setUser(userdata);
 setLogin('');
 cookies.set('jwttoken1', ResponseData, {   expires: new Date(Date.now()+25920000)
 });
 
navigate('/');
  }

  const TogglePassword = ()=>{
    if(passwordtype="password"){
      setPasswordtype("text"); 
}}

const TogglePassword1 = ()=>{
  if(passwordtype="text"){
    setPasswordtype("password"); 
}}


  return (
    <Container>
      <Dialog
        open={true}
        BackdropProps={{ style: { backgroundColor: "unset" } }}
        PaperProps={{ sx: DialogStyle }}
      >
        <MainContainer> 
          <LeftCointainer>
            <Image src={signup} alt="signup" />
            <IconTypoStyled>
            <TaskAltIcon style={{marginRight:5}} />
            <Link to='/signup' style={{textDecoration:'none',color:'inherit',fontSize:14}}> New User? Sign Up First.</Link>
              
            </IconTypoStyled>
          </LeftCointainer>
          <RightCointainer>
            <RightContent>
               
               <TypographyStyle> Log In</TypographyStyle>
               
              
              <InputField>
                <InputLabel style={{fontWeight:'600'}}>Email</InputLabel>
                <Inputstyled placeholder="Enter Email Address" onChange={(e)=>InputHandle(e)} name='email' value={email}/>
              </InputField>
               
              <InputField>
                <InputLabel style={{fontWeight:'600'}}>Password</InputLabel>
                <Inputstyled  type ={passwordtype} placeholder="Enter Password" onChange={(e)=>InputHandle(e)} name='password' value={password} style={{width:'60%'}}/>
                <Button> {
                        passwordtype =="password"
                         ?
             <VisibilityOffIcon  onClick={TogglePassword} />
                         :
              <VisibilityIcon onClick={TogglePassword1}/>

}</Button>
              </InputField>
               
              <InputField>
                <Button variant="contained" style={{ width:'200px' , marginTop:'5px'}} onClick={()=>onSubmitdata()}>Log In</Button>  
              </InputField>
            </RightContent>
          </RightCointainer>
        </MainContainer>
      </Dialog>
    </Container>
  );
};
export default Login;
