import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import { useEffect, useState } from 'react';
import {useDispatch ,useSelector } from 'react-redux';
import { getalluserdetail } from '../redux/actions/action';
const AllUserByRedux = ()=>{
    const [alluser , setalluser] = useState([]);
 const dispatch = useDispatch();
    
 useEffect(()=>{
    if(userdata){
       dispatch(getalluserdetail());
       setalluser(userdata);
    }
    },[]);

    const {userdata} = useSelector(state=>state.users);
    
    //console.log(userdata);

     
    return (
         <Table>
            <TableHead>
                <TableRow>
                <TableCell>Serial Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>User-Name</TableCell>
                <TableCell>Email </TableCell>
                <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>{
                   alluser.map(item=>(

                                 
                <TableRow>
                <TableCell> {item._id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                </TableRow>
            ))}  
            </TableBody>
         </Table>
    )
}

export default AllUserByRedux;