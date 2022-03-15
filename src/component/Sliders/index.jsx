import React, {useState} from 'react'
import { Button, Collapse } from 'bootstrap';
import { Card } from 'react-bootstrap';

export default function Sliders() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <div style={{minHeight: '150px'}}>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <Card style={{width: '400px'}}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
              </Card>
            </div>
          </Collapse>
        </div>
      </>
    );
  }