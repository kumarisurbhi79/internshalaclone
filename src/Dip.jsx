import React from 'react'
import Sp1 from './Sp1.png'
import Sp2 from './Sp2.png'
import Sp3 from './Sp3.png'
import Sp4 from './Sp4.png'
import n from './n.png'
function Dip() {
  return (
    <div>
        <div className='ra'>
        <h1 id="hiii">Certification courses for you</h1>
            <div className='imgs'>
               <img id="sp1" src={Sp1} alt="sp1" />
               <img id="sp2" src={Sp2} alt="sp2" />
               <img id="sp3" src={Sp3} alt="sp3" />
               <img id="sp4" src={Sp4} alt="sp4" />
            </div>
            <div className='na'>
                    <img id="n" src={n} alt="n" />
                    </div>
            </div>
    </div>
  )
}

export default Dip