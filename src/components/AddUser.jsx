import { FormControl, FormGroup, InputLabel ,Typography,Input,styled , Button} from "@mui/material";
import { useState } from "react";

import { addUserDetail } from "../service/api";
import { useNavigate } from "react-router-dom";

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

const AddUser = ()=>{
    let navigate = useNavigate();

    const[text ,setText] = useState(DefaultValue);
    const { name, username, email, phone } = text;

    const onChangeValue = (e)=>{
        setText({...text ,[e.target.name]:e.target.value})
        console.log(text);
         
    }

    const SubmitUserDetail = async()=>{
        await addUserDetail(text);
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
                <Button variant='contained' onClick={()=>SubmitUserDetail()}> Add User</Button>
            </FormControl>
          
         </Container>
    )
}

export default AddUser;