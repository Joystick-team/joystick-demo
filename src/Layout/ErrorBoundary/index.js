import React from 'react'
import ErrorPage from '../../pages/ErrorPage';

class ErrorBoundary extends React.Component {
    
    // state = { hasError: false };
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, eventID: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo, mike) {
        console.log({ error, errorInfo })
    }

    render() {
        if (this.state.hasError) {
            return  <ErrorPage message={'An error has been encountered.'} btn={'Go Back'}/>
        }else{
            return <>
                {this.props.children}
            </>
        }
        
    }  
}

export default ErrorBoundary;