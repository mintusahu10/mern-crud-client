import { Table, TableBody, TableCell, TableHead, TableRow ,Button, Typography, styled, TextField ,Box, CircularProgress} from "@mui/material";
import { useState,useEffect } from "react";
import { getUsers  , DeleteUser} from "../service/api";
import { Link } from "react-router-dom";


// .tr td:first-child:before
// {
//   counter-increment: Serial;      /* Increment the Serial counter */
//   content: "Serial is: " counter(Serial); /* Display the counter */
// }
const Typographystyled = styled(Typography)`

text-align:center;
padding : 50px 0 50px 0;
font-size:30px;
font-weight:700;
text-decoration:underline;
`;
 
 
const AllUser = ()=>{

    const [allusers , setAllusers] = useState([]);
     const [filterallusers,setfilterallusers] = useState('');
     const [loading, setLoading] = useState(false);

    useEffect(()=>{
           setLoading(true)
    setTimeout(() => {
    setLoading(false)
     }, 2500);
     getAllUsers();
        
    } ,[]);

 if (loading) return <CircularProgress color="secondary"   />
    const getAllUsers = async ()=>{
          let response = await getUsers();
          let responseddata = response.data;
        //  console.log(responseddata);
          //let filteredData = responseddata.filter(mintu => mintu.name.toLowerCase().includes(filterText.toLowerCase()));
            
          setAllusers(responseddata);

    }
    const  DeleteUserData = async(id)=>{
        await  DeleteUser(id);
        getAllUsers();
    }
    return (
       <Box>
        <Box>
       <Typographystyled> All Active User Data </Typographystyled>
        <TextField onChange={(e)=>setfilterallusers(e.target.value)} style={{paddingLeft:'80%'}}/>
        
        </Box>
        <Box>
         
         <Table>
            <TableHead> 
                <TableRow>
                    <TableCell>Serial Number</TableCell>
                    <TableCell>Full Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>User Email ID</TableCell>
                    <TableCell>User Contact</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                 allusers.filter((item)=>{
                    return filterallusers===''
                    ? item
                    :
                    item.name.toLowerCase().includes(filterallusers.toLowerCase());
                 }).map((user ,index)=>(
                            <TableRow key={user._id}>
                                <TableCell>  {index}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                 
                                <TableCell>
                            <Button variant='contained' component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button color='secondary' variant='contained' style={{marginLeft:10}} onClick={()=>DeleteUserData(user._id)}>Delete</Button>

                                </TableCell>
                            </TableRow>
                        ))
                     }
                     
            </TableBody>
         </Table>
         
         </Box>
         </Box>
    )
                    }

export default AllUser;