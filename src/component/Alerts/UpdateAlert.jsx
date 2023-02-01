  

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
export const UpdateAlert = ({ bg, text }) => { 
    console.log("text",text);
  return (  
        <div className=''>  
            <Container className='p-4'>  
              <Alert variant={bg}>{text }</Alert>  
            </Container>  
        </div>  
  );  
}  
 