import { Routes, Route } from "react-router-dom";
import { useContext  } from "react";
import { AccountContext } from "../context/AccountProvider";
import AddUser from "./AddUser";
import Header from "./Header";
import MintuSahu from "./MintuSahu";
import AllUser from "./AllUser";
import AllUserByRedux from "./AllUserByRedux"
//import Logindialog from "./logindialog";
import EditUser from "./EditUser";
import NotFound from "./Notfound";
import Signup from "./loginsignup/Signup";
import Login from "./loginsignup/Login";
//import {getUserdetail} from '../service/api';
//import jwt_decode from 'jwt-decode';


const HomePage = () => {
  const { account } = useContext(AccountContext);
  //let mintu = jwt_decode(account);
//console.log(mintu);


//     useEffect(()=>{
// getUserByID( );
//     },[]);

//     const getUserByID = async ( )=>{

//         await getUserdetail( );
   // }
     
  return (
       < >
       <Header />
       { account ?
      
       <>
        
      
      <Routes>
        <Route  exact path="/"   element={<MintuSahu />} />  
         
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
         
        <Route path="add" element={<AddUser />} />
        {/* <Route   path="all" element={<AllUserByRedux />} /> */}
        <Route   path="all" element={<AllUser />} />
        <Route path="/edit/:id" element={<EditUser/>} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
     </>
     :
     <>
     <Login/>
     <Routes>
     <Route path='/signup' element={<Signup />} />
     </Routes>
     
     </>
      
       }
 </>
  );
};

export default HomePage;
