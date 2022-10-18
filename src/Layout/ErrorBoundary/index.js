import React from 'react'
import Layout from '..';

class ErrorBoundary extends React.Component {
    
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // componentDidCatch(error, errorInfo) {
    //     console.log({ error, errorInfo });
    // }

    render() {
        if (this.state.hasError) {
            return  <> 
                {/* <Layout> */}
                    <h1>Oops, we done goofed up <a href='/'> Go Back Home</a></h1>
                {/* </Layout> */}
            </>
        }
        return <> {this.props.children} </>
    }  
}

export default ErrorBoundary;