import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { AppContextInit } from '../context/AppContext'

const usePost = async ({url, option, res}) => {
    const [isLoading, setIsLoading] = useState(false)
    const { isUser, setIsUser, message, setMessage, success, setSuccess } = AppContextInit()
//     var config = {
//         method: 'post',
//         url: url,
//         headers: { },
//         data : option
//     };

//     useEffect(() => {
//         let isMounted = true
//         setIsLoading(true)

//         async function fetchData() {        
//             try{ 
//                 const response = await axios(config);
//                 console.log(response.data);
//                 if(isMounted){
//                     JSON.stringify(response.data);
                    
//                     setSuccess(true)
//                     localStorage.setItem('userToken', response.data.access_token)
//                     setError(null)
//                     setSuccess(true)
//                 }
//             }catch(error){ 
//                 if(isMounted){
//                     setSuccess(false)
//                     setError(error)
//                     // console.log(error);
//                 }
//             }
//         }
//         fetchData();

//         isMounted && setIsLoading(false)

//         return () => {
//             isMounted = false
//         }
//         // eslint-disable-next-line
//     }, [url, option])
//   return (
//     [isLoading, error ]
//   )

    

    
    // // You POST method here
    // const postData = useCallback(() => {
    //     let isMounted = true
    //     setIsLoading(true)

    //     //  setRes(prevState => ({...prevState}));
    //      axios.post(url, headers, option)
    //      .then(res => {
    //         setError(null)
    //         setSuccess(true)
    //         // setRes({data: res.data});
    //         setIsLoading(false)
    //      })
    //      .catch((error) => {
    //         // setRes({data: null});
    //         setError(error)
    //         setSuccess(false)
    //         setIsLoading(false)
    //      })
    //      .finally(() => {
    //         isMounted && setIsLoading(false)
    //      })
    //      isMounted = false
    //      // eslint-disable-next-line
    // }, [url, headers, option])

    // return { postData, error, isLoading };




    // const postData = async ({url, option}) => {

    //     var config = {
    //         method: 'post',
    //         url: url,
    //         headers: { },
    //         data : option
    //     };

    //     try{ 
    //         setIsLoading(true)
    //         const response =  await axios(config);
            
    //             console.log(response.data);
    //             JSON.stringify(response.data);
    //             setSuccess(true)
    //             // localStorage.setItem('userToken', response.data.access_token)
    //             setIsLoading(true)
    //     }catch(error){ 
    //         setSuccess(false)
    //         console.log(error.message);
    //         setIsLoading(false)
    //     }
    // // }
    // // postData()

    // return (
    //     [ isLoading, error ]
    //   )


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