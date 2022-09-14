import {React, useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
    }
      
export default function LoadingButton(props) {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
    if (isLoading) {
        simulateNetworkRequest().then(() => {
        setLoading(false);
        });
    }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
    <Button
        variant={props.color}
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        className={props.className}
        type={props.type}
    >
        {isLoading ? 'Loading…' : props.title}
    </Button>
    );

}
