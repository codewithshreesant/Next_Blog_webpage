'use client'

import AdminNav from '@/components/AdminNav'
import { checkAdmin } from '@/utils/check'
import axios from 'axios'
import { redirect } from 'next/navigation'
import React, { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react'
// import { cookies } from 'next/headers';
function Admin() {
  useLayoutEffect(()=>{
    const userAdmin = document.cookie
    .split('; ')
    .find(row => row.startsWith('isAdmin='))
    ?.split('=')[1];
  const actualAdmin=JSON.parse(userAdmin);
  if (!actualAdmin) {
    window.location.href = '/';
  }
  },[])
  let [loginData, setLoginData] = useState([]);
  let [show, setShow] = useState(false);
  let [showError, setError]=useState(false);
  const getLoginData = async () => {
    const userToken = document.cookie
  .split('; ')
  .find(row => row.startsWith('userToken='))
  ?.split('=')[1];

   try {
     const logindata = await axios.get('http://localhost:3000/api/logindata',{
         headers: {
           Authorization: 'Bearer ' + userToken //the token is a variable which holds the token
         }
     });
     if(logindata.status === 200){
      let actualdata=logindata.data;
       setShow(true);
       setLoginData(actualdata);
     }
   } catch (error) {
    setError(true);
   }
    
  }

  useEffect(() => {
    getLoginData();
  }, [])
  return (
    <div>
      <AdminNav />
      {
        show &&
        <div>
          <table className='border-2 border-solid border-black'>
            <tr className='border-2 border-solid border-black'>
              <th className='border-2 border-solid border-black px-4'>username</th>
              <th className='border-2 border-solid border-black px-4'>email</th>
              <th className='border-2 border-solid border-black px-4'>password</th>
            </tr>
            {

              loginData.map((ele, index) => {
                return (
                  <tr className='border-2 border-solid border-black'>
                    <td className='border-2 border-solid border-black px-4'>{ele.username}</td>
                    <td className='border-2 border-solid border-black px-4'>{ele.email}</td>
                    <td className='border-2 border-solid border-black px-4'>{ele.password}</td>
                  </tr>
                )
              })

            }
          </table>
        </div>
      }
      {
        showError && <div>
          You are not an Authorized Person 

        </div>
      }
    </div>
  )
}

export default Admin


