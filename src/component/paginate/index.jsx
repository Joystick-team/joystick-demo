import react, { useState } from "react"
import { Pagination } from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
export const Paginate = ({ pages, page }) => {
    const [num, setNum] = useState(1)
    const [sliceStart,setSliceStart] = useState(0)
    const [sliceEnd, setSliceEnd] = useState(3)
    
    
    const next = () => {
        setSliceStart(sliceStart + 3)
        setSliceEnd(sliceEnd+3)
    }
    const prev = () => {
        setSliceStart(sliceStart>0&&sliceStart-3)
        setSliceEnd(sliceEnd>5&&sliceEnd-3)
    }
    
    return pages>1&&(
        <Pagination>
           { sliceStart>0&&<Pagination.Prev onClick={prev}/>}
                    {
                        [...Array(pages).keys()].slice(sliceStart,sliceEnd).map(x => (
                            <LinkContainer key={x + 1} to={`/page/${x + num}`}>
                                <Pagination.Item active={x + 1 === page}>{x+1}</Pagination.Item>
                            </LinkContainer>
                        ))
            }
            {sliceEnd<pages &&<Pagination.Next onClick={next}/>}
        </Pagination>
    )
}