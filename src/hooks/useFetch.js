import axios from 'axios'
import { useEffect, useState } from 'react'
import { AppContextInit } from '../context/AppContext'

export default function useFetch(url = '', options = null) {
    const online = navigator.onLine
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { setMessage, setSuccess, setIsUser } = AppContextInit()

    useEffect(() => {
        let isMounted = true
        setLoading(true)
        if(!online){
            setTimeout(() => {
                setLoading(false)
            }, 500);
            setSuccess(false)
            setIsUser(true)
            setMessage('Check your internet Connection')
            
        }else{
        axios.get(url, options)
        .then(res => res)
        .then(data => {
            if(isMounted){
                setData(data)
                setError(null)
                // console.log(data);
            }
        })
        .catch(error => {
            if(isMounted){
                setError(error)
                setData(null)
                // console.log(error);
            }
        })
        .finally(() => {
            isMounted && setLoading(false)
        })
    } 

        return () => {
            isMounted = false
        }
        // eslint-disable-next-line
    }, [url, options, online])

    return (
        [loading, data, error]
        
    )
}
