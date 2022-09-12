import { useState } from 'react'
import axios from 'axios'
import { AppContextInit } from '../context/AppContext'

const usePost = async ({url, option, res}) => {
    // eslint-disable-next-line
    const [isLoading, setIsLoading] = useState(false)
    // eslint-disable-next-line
    const { isUser, setIsUser, message, setMessage, success, setSuccess } = AppContextInit()

    async function postDataAuth({url, option, res}) {
        var config = {
            method: 'post',
            url: url,
            headers: { },
            data : option
          };

        try{ 
            const response =  await axios(config);
                setSuccess(true)
                setMessage(() => response.data.username ?? res)
                setIsUser(true)
                localStorage.setItem('userToken', response.data.access_token)

        }catch(error){ 
            setSuccess(false)
            setIsUser(true)
            setMessage(() => error.response.data.message ?? res)
            // console.log(error.response.data.message);

            setTimeout(() => {
                setIsUser(false)
            }, 2000);
        }   

    }
    postDataAuth(url, option, res)
    return (
        [ isLoading, postDataAuth]
    )
}

export default usePost;