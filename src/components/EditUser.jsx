import { FormControl, FormGroup, InputLabel ,Typography,Input,styled , Button} from "@mui/material";
import { useEffect, useState } from "react";

import {   getUsersbyId ,editUser } from "../service/api";
import {  useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
width:50%;
margin:5% 0 0 25%;
&> div{
    margin-top:20px;
}
`;

const DefaultValue ={
    name:'',
    username:'',
    email:'',
    phone:''
}

const EditUser = ()=>{
   let navigate = useNavigate();

    const[text ,setText] = useState(DefaultValue);
    const { name, username, email, phone } = text;
    const {id} = useParams();

    useEffect(()=>{
loadUserDetail();
    },[ ]);

    const loadUserDetail = async()=>{
            const response = await getUsersbyId(id);
            setText(response.data);
    }

    const onChangeValue = (e)=>{
        setText({...text ,[e.target.name]:e.target.value})
        console.log(text);
    }
const editUserDetails = async ()=>{
    await editUser(id,text);
    navigate('/all');


}
     

    return (
         <Container>
             <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input name="name"  onChange={(e)=>onChangeValue(e)} value={name}/>
            </FormControl>
        
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input name="username" onChange={(e)=>onChangeValue(e)} value={username}  />
            </FormControl>
          
          
            <FormControl>
                <InputLabel>Email Id</InputLabel>
                <Input name="email"  onChange={(e)=>onChangeValue(e)} value={email} />
            </FormControl>
          
          
            <FormControl>
                <InputLabel>Contact Number</InputLabel>
                <Input name="phone" onChange={(e)=>onChangeValue(e)}  value={phone} />    
            </FormControl>

            <FormControl>
                <Button variant='contained'  onClick={() => editUserDetails()} > Edit User</Button>
            </FormControl>
          
         </Container>
    )
}

export default EditUser;