import axios from 'axios';

const URL = "https://mern-crud-server-jws6.onrender.com/";

 

    //axios.defaults.withCredentials = true;
    // let axiosConfig = {
    //     headers: {
    //         'Content-Type': 'application/json;charset=UTF-8',
    //         "Access-Control-Allow-Origin": "*",
    //     }
    //   };
    let token =  localStorage.getItem('myData');    
      
    //console.log(token);

//for google login
export const addLoginuserDetail= async(decoded)=>{
    try {
       return  await axios.post(`${URL}/loginbygoogle`,decoded);
      // console.log(userdata);
    } catch (error) {
        console.log('error while  calling addUseer API' , error);
        
    }
}


export const addUserDetail= async(user )=>{
try {
    const userdata= await axios.post(`${URL}/add`,user,  {
        headers: {
        Authorization: `${token}`
    }} );
    
     if(userdata.status=== 401 || !userdata)
     {
        window.alert("Invaloid credential");

     }
     else{
        window.alert("data Successfully saved");
     }
} catch (error) {
    console.log('error while  calling addUseer API' , error);
    
}
}

export const getUsers = async ()=>{
   try {
        return await axios.get(`${URL}/all`,  {
            headers: {
                Authorization: `${token}`
        }});
    } catch (error) {
        console.log('error while  calling getUseer API' , error);
        
    }

}
export const getUsersbyId = async (id)=>{
    
      try {
          return await axios.get(`${URL}/${id}`,  {
            headers: {
                Authorization: `${token}`
        }})
      } catch (error) {
          console.log('error while  calling getUseerById API' , error);
          
      }
  
  }

export const DeleteUser = async (id)=>{
    try {
        return await axios.delete(`${URL}/${id}`,  {
            headers: {
            Authorization: `${token}`
        }});
        
    } catch (error) {
        console.log('error while calling DeleteUser API',error);
        
    }
}

export const editUser =async(id,user)=>{
    try {
        return await axios.put(`${URL}/${id}` ,user,  {
            headers: {
                Authorization: `${token}`
        }})
    } catch (error) {
        console.log('Error While Calling Edit User API ',error);
    }
}

export const submitdata = async (data)=>{
    try {
         //const Authtokenno=
         return await axios.post(`${URL}/signup`,data);
        //console.log(Authtokenno.data);
    } catch (error) {
        console.log('Error while calling SubmiData API',error);
    }
}


export const loginData = async (login)=>{
    
    
    try {
        
     const ReturnedData = await axios.post(`${URL}/login`,login);
        return ReturnedData;
         
    } catch (error) {
        console.log("Error While calling Logindata API  ",error);
    }
}


 export const getUserdetail =  async (id)=>{
    try {
        return await axios.get(`${URL}/home/${id}`);

    } catch (error) {
        console.log("Error While calling getUserdetail API  ",error);
   
    }
}