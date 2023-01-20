import React, {useState} from 'react';
import  { default as api } from '../../config/config.json'

function History({history}) {
  const [text, setText] = useState('copy')
  const handleCopy=(p)=>{
    navigator.clipboard.writeText(p)
    setText('copied')
  }
  const tBody=  history?.map((req)=>{
    return(
        <tr key={req.id}>
            <td>{req.created_at}</td>
            <td>{req.room_id}</td>
            <td>{req.name}</td>
            <td>
              {`${api.localServer}/livestream/${req.name}`}
            </td>
            <td>{req.pass_code}</td>
            <td>{req.privacy ==='public'? 
              <button className='btn btn-sm text-white' style={{background:'#1BB04A'}}>{req.privacy}</button>:
              <button className='btn btn-sm btn-danger'>{req.privacy}</button>}
            </td>
        </tr>
    )
})
  return (
    <div className='container-fluid'>
      <div className='row mt-3 mb-3'>
        <div className='col-5 col-md-3'>
          <input type='text' 
          className='form-control'
          placeholder="Search..."/>
        </div>
        <div className='col-5 offset-md-6 pr-0 col-md-2 align-self-center text-right'>
          <span>
            Show Results
          </span>
        </div>
        <div className='col-2  col-md-1 pl-0 text-right'>
          <span>
            <select className='form-control w-90'>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </span>
        </div>
      </div>
      <div className='row '>
        <div className='col-12'>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>ROOMID</th>
                        <th>ROOMNAME</th>
                        <th>ROOMURL</th>
                        <th>PASSCODE</th>
                        <th>PRIVACY</th>
                    </tr>
                </thead>
                <tbody>
                    {tBody}
                </tbody>
            </table>
        </div>
    </div>
    </div>
  );
}

export default History;