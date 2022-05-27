import React from 'react'
import {Dropdown} from 'react-bootstrap'
function Box4() {
  return (
    <div className='selecting-turbin'>
        <ul>
            <li>
              <div className="trubin">
              <Dropdown className='dropdown-turbine'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   Turbin 1
  
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"> Turbin 2</Dropdown.Item>
    <Dropdown.Item href="#/action-2"> Turbin 3</Dropdown.Item>
    <Dropdown.Item href="#/action-3"> Turbin 4</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
              </div>
              <p className='text-bottom'>Turbin</p>
            </li>
            <li>
            <div className="trubin">
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">

    Gearbox
  
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
<p className='text-bottom'>Part</p>
            </li>
            <li>
            <div className="trubin">
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Bearing D
  
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
<p className='text-bottom'>Sub part</p>
            </li>
            <li>
            <div className="trubin">
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Good
  
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
<p className='text-bottom'>Condition</p>
            </li>


        </ul>
    </div>
  )
}

export default Box4