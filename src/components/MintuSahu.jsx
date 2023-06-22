import { useContext, useEffect } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { AccountContext } from "../context/AccountProvider";
//import {getUserdetail} from '../service/api';

import Youtube from "../Assets/Images/youtube.png";
import InstaTele from "../Assets/Images/InstaTele.jpeg";
import jwt_decode from "jwt-decode";
const Header = styled(Box)`
  margin: 50px;
  & > div {
    margin-top: 50px;
  }
`;

const Image = styled("img")({
  width: "50%",
  height: "50%",
});
const Container = styled(Box)`
  display: flex;
`;
const ButtonStyled = styled(Button)`
  margin-left: auto;
  width: 15%;
  height: 40px;
`;
const Heading = styled(Box)`
  display: absolute;
`;

const MintuSahu = () => {
  const { user } = useContext(AccountContext);

  //    //const local = localStorage.getItem('myData');

  //    const decoded = jwt_decode(account);
  //    let idtogetuser = decoded.existinguser.id;
  //    //console.log(idtogetuser);

  //    useEffect(()=>{

  // getuserbytoken();
  //    } , []);

  //    const  getuserbytoken = async ()=>{
  //     const response= await getUserdetail(idtogetuser);
  //     let userDetail =   response.data;
  //     await setUser(userDetail);
  //    // console.log(document.cookie);

  //     }

  const print = () => {
    window.print();
  };

  window.onload = function () {  
    document.onkeydown = function (e) {  
        return (e.which||e.keyCode) != 116;  
    };  
};

//   window.onload = function () {  
//     document.addEventListener('keydown', (e) => {
//       e = e || window.event;
//       if(e.keyCode == 116){
//           e.preventDefault();
//       }
//   });
// };
  
  window.onbeforeunload = () => {
    return false;
  };

  return (
    <Header>
      <Container>
        <Heading>
          <Typography variant="h4" style={{ color: " #1a75ff" }}>
            Hello,
          </Typography>
          <Typography
            variant="h4"
            style={{ marginLeft: "80px", color: "#007542" }}
          >
            Developer
          </Typography>
        </Heading>
        <ButtonStyled variant="contained" onClick={() => print()}>
          {" "}
          Print
        </ButtonStyled>
      </Container>
      <Box style={{ display: "flex" }}>
        <Image src={Youtube} />
        <Image src={InstaTele} />
      </Box>
    </Header>
  );
};

export default MintuSahu;
