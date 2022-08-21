import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useFetch(url = '', options = null) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let isMounted = true
        setLoading(true)

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

        return () => {
            isMounted = false
        }
    }, [url, options])

    return (
        [loading, data, error]
    )
}
