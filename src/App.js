 
//import Logindialog from "./components/logindialog";

 //import { GoogleOAuthProvider } from "@react-oauth/google";
 import AccountProvider from './context/AccountProvider';
 
import HomePage from "./components/HomePage";
//import Signup from "./components/loginsignup/Signup";
//import Login from "./components/loginsignup/Login";

 
const App = ()=>{
  //const clientId = '246648691460-bsj1rub53iami1btvii0577h1on2je01.apps.googleusercontent.com';
  return (
   //<GoogleOAuthProvider clientId={clientId}>
    <AccountProvider >
    <HomePage/>
     {/* <Signup/> */}
    </AccountProvider>
    //</GoogleOAuthProvider>
  )
}

export default App ;