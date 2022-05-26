import React from 'react'

function Header(props) {
  return (<>
    <div className='head-main'> 
    <div className="head-left">
  
   <img className="image-brand" src="./images/1.png" alt=""  />
  
    </div>
    <div className="head-middle">
    <ul>
        <li>
            STATUS
        </li>
        <li>ANALYSIS</li>
        <li>PREDICTION</li>
    </ul>
    </div>
    <div className="head-right">
<ul className='icons'>
    <li>
    <img className="head-phone" src="./images/headset.png" alt=""  />
    </li>
    <li>
    <img className="head-person" src="./images/headset.png" alt=""  />
    </li>
    <li>
    <img className="head-menu" src="./images/more.png" alt=""  />
    </li>
</ul>
    </div>
    
    </div>
    <div className="content">
                {props.children}

            </div>
    </>
    
  )
}

export default Header