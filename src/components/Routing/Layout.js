import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../Context/UserContext';
import axios from 'axios';
import Loader from '../utils/loader/Loader';

function Layout({children}) {
    const [loading, setLoading] = useState(false);
    const { login } = useContext(UserContext);
    // const [loding , setLoding]= useState(true);
    // const navigate = useNavigate();
    
    const validateToken = async()=>{
      try {
        setLoading(true)
        const response = await axios.post("https://realtyprop-backend-production-d2c6.up.railway.app/auth/get-user-by-id",{},{
          headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
        })
        if(response.data.success){
          login(response.data.data)
          // setLoding(false)
        }else{
          localStorage.removeItem('token');
          alert(response.data.message);
          // setLoding(false)
          // navigate("/login")
        }
      } catch (error) {
          localStorage.removeItem('token');
          alert(error.message);
        // setLoding(false)
          // navigate("/login")
      }
      finally{
        setLoading(false)
      }
    }
    useEffect(()=>{
      if (localStorage.getItem("token")) {
        validateToken()
        console.log('token')
      }
    },[])
  
  
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
  
    if (loading) {
      return(
        <Loader/>
      )
      }
      else{

  return (
    <>{loading?<Loader/>:<>{children} </>}</>
  )
      }
}

export default Layout