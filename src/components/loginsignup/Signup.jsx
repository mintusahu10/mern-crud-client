import { Box, Button, Dialog, Input, InputLabel, Typography, styled } from "@mui/material";
import { useState } from "react";
import signup from "../../Assets/Images/signup.webp";
import { submitdata } from "../../service/api";
import {useNavigate ,Link} from 'react-router-dom';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Container = styled(Box)`
  background-color: #c1d7d7;
  height: 100vh;
`;
const DialogStyle = {
  width: "50%",
  height: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
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
margin:0 0 10px 30px;
display:flex;
 
 
`;

const InitialValue = {
  name :'',
  email:'',
  phone:'',
  password:'',
  cpassword:''

}
const Signup = () => {

  let navigate = useNavigate();

  const [data , setData] = useState(InitialValue);

  const {name,email,phone,password,cpassword} = data;
  
  const InputHandle = (e)=>{
     
    setData({...data ,[e.target.name]:e.target.value});
    //console.log(data);

  }

  const onSubmitdata = async ()=>{
await submitdata(data);
setData('');
navigate('/login');
  }
  
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
            <TaskAltIcon style={{marginRight:4}} />
            <Link to='/login' style={{textDecoration:'none',color:'inherit' ,fontSize:14}}> Already A user? Go and Log in</Link>
              
            </IconTypoStyled>
          </LeftCointainer>
          <RightCointainer>
            <RightContent>
               <TypographyStyle>Sign Up</TypographyStyle>
              <InputField> 
                <InputLabel style={{fontWeight:'600'}}>Name</InputLabel>
                <Inputstyled placeholder="Enter Name" onChange={(e)=>InputHandle(e)} name='name' value={name}  />
              </InputField>
              
              <InputField>
                <InputLabel style={{fontWeight:'600'}}>Email</InputLabel>
                <Inputstyled placeholder="Enter Email Address" onChange={(e)=>InputHandle(e)} name='email' value={email}/>
              </InputField>
              <InputField>
                <InputLabel style={{fontWeight:'600'}}>Phone</InputLabel>
                <Inputstyled placeholder="Enter Contact Number" onChange={(e)=>InputHandle(e)} name='phone' value={phone}/>
              </InputField>
              <InputField>
                <InputLabel style={{fontWeight:'600'}}>Password</InputLabel>
                <Inputstyled placeholder="Enter Password" onChange={(e)=>InputHandle(e)} name='password' value={password}/>
              </InputField>
              <InputField>
                <InputLabel style={{fontWeight:'600'}}>Currect Password</InputLabel>
                <Inputstyled placeholder="Enter Correct Password" onChange={(e)=>InputHandle(e)} name='cpassword' value={cpassword}/>
              </InputField>
              <InputField>
                <Button variant="contained" style={{ width:'200px' , marginTop:'5px'}} onClick={()=>onSubmitdata()}>Sign Up</Button>  
              </InputField>
            </RightContent>
          </RightCointainer>
        </MainContainer>
      </Dialog>
    </Container>
  );
};
export default Signup;
