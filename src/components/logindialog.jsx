import { useContext } from 'react';
import {AppBar,Toolbar, Dialog,Box, styled,List,ListItem, Typography} from '@mui/material';
import {qrCodeImage} from '../constant/data';
import { GoogleLogin } from '@react-oauth/google';
import { AccountContext } from '../context/AccountProvider';
import jwt_decode from "jwt-decode";
import {addLoginuserDetail} from '../service/api';
 
const Component= styled(Box)`
height:100vh;
background-color:#DCDCDC;

`;


const LoginHeader = styled(AppBar)`
background-color:#ccffcc;
height:180px;

`;


const DialogStyle = {
    marginTop:'12%',
    height:'95%',
    width:'60%',
    maxHeight:'100',
    maxWidth:'100%',
    borderRadius:0,
    boxShadow:'none',
    overflow:'hidden',
     
};

const Container = styled(Box)`
display:flex;
`; 
const TypographyStyle = styled(Typography)`

padding:50px 10px 0 56px;
font-size:25px;
font-family:Lucida Handwriting;
`;
const ImageBox= styled(Box)`
margin-left:auto;
padding: 5px 56px 0 0;
height:150px;
max-height:100%;

`;
const Image = styled('img')({
    height:264,
    width:264,
    margin:'50px 0 0 50px'
})

const ListStyle = styled(List)`
padding: 10px 5px 5px 56px;
font-family:Papyrus;

`;

const Logindialog = ()=>{
    const { setAccount,showloginButton, setShowloginButton } = useContext(AccountContext);
    const onloginSuccess = async (res) => {
        let decoded = jwt_decode(res.credential);
        setAccount(decoded);
         
        setShowloginButton(false);
    
        await addLoginuserDetail(decoded);
    };

    const onloginError = (res) => {
        console.log('Login Failed:', res);
    };
     
    return (
        <>
        <Component>
         <LoginHeader>
            <Toolbar></Toolbar>

         </LoginHeader> 
         
         <Dialog   open={true}
         BackdropProps={{style: {backgroundColor: 'unset'}}}
         PaperProps={{sx:DialogStyle}}>
           <Container>
            <Box>
            <TypographyStyle>Log-In Using QR Code.</TypographyStyle>
            <ListStyle>
                <ListItem>1. Click The QR Code .</ListItem>
                <ListItem>2. Select The   Google Account .</ListItem>
                <ListItem>3. After Sign In , Enjoy The WebSite Experiences.</ListItem>
            </ListStyle>
            </Box>
            <ImageBox>
            <Image src={qrCodeImage} alt='QRCode' />
            <Box style={{position:'absolute' ,top:'40%' , transform :'translateX(25%) translateY(-25%)', }}>
                {
                    showloginButton ?
                 <GoogleLogin 
                 onSuccess={onloginSuccess}
                 onError={onloginError}/> 
                 : null
                }
            </Box>
            </ImageBox>
           </Container>
          
            
         </Dialog>
         </Component>
         
         </>
    )
}

export default Logindialog;