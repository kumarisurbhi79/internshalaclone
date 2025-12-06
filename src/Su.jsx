import React from 'react'
import bh1 from './bh1.png'
import bh2 from './bh2.png'
import bh3 from './bh3.png'
import bh4 from './bh4.png'
import na from './na.png'
function Su() {
  return (
        <div className='ram'>
<h1 id="hii">Certification courses for you</h1>
<div className='imgss'>
    <img id="bh1" src={bh1} alt="bh1" />
    <img id="bh2" src={bh2} alt="bh2" />
    <img id="bh3" src={bh3} alt="bh3" />
    <img id="bh4" src={bh4} alt="bh4" />    
</div>
<div>
    <p id="g"><b>🧠Internshala Skill Pass:</b> Unlock lifetime access to all 70+ certification courses. <a id="k">Explore now </a></p>
</div>
<div className='na'>
                <img id="na" src={na} alt="na" />
                </div>
    </div>
   
  )
}

export default Su