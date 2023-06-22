import { createContext , useState } from "react";
//import jwt_decode from 'jwt-decode';


 export const AccountContext = createContext(null);



const AccountProvider = ({children})=>{

    const [account , setAccount] = useState(null);
    const[user  ,setUser]= useState('');

      //let mintu = jwt_decode(account);
      

    
   // const [showloginButton, setShowloginButton] = useState(true);
     
    return (
        <AccountContext.Provider value = {{
            account,
            setAccount,
            user,
            setUser
            
        }}>

            {children}
        </AccountContext.Provider>
            
       
    )
}

export default AccountProvider;