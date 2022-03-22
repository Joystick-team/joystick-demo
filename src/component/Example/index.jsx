import { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import {BiMenu} from 'react-icons/bi'

export default function Example() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <p
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <BiMenu />
        </p>
        <div>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <Card body style={{width: '200px'}}>
                <ul>
                  <li>Home</li>
                  <li>Live</li>
                  <li>Socials</li>
                  <li>Games</li>
                  <li>Footer</li>
                </ul>
              </Card>
            </div>
          </Collapse>
        </div>
      </>
    );
  }
  
//   render(<Example />);