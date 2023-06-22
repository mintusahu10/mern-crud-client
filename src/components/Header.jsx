
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import {AppBar , Toolbar,  styled, Button} from '@mui/material';
import { NavLink , useNavigate } from 'react-router-dom';

const Components = styled(AppBar)`
background:#000000;
position:relative;
 
`;
const Tab = styled(NavLink)`
margin-right:20px;
color:inherit;
text-decoration:none;
`
const Header = ()=>{
    const { setAccount } = useContext(AccountContext);
     
const navigate = useNavigate();
    const signOut = ()=>{
        localStorage.clear();
        setAccount(false);
        navigate('/login');
    }
    return (
        <Components>
        <Toolbar>
        <Tab to='/'>Home</Tab>
        <Tab to='all'> All Users by normal</Tab>
        <Tab to='add'>Add User</Tab>
        <Tab style={{color:'inherit',textDecoration:'none'}} onClick={()=>signOut()}>SignOut</Tab>
        {/* <Tab to='all'>All User by redux</Tab> */}
        </Toolbar>
    </Components>
    )
}

export default Header;