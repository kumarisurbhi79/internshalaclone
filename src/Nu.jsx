import React from 'react'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import na from './na.png'
function Nu() {
  return (
    <div className='ram'>
<h1 id="hii">Recommended for you</h1>
<h3 id="bye">as per your <a id="ji">preferences</a></h3>
    <div className='img'>
        <img id="img1" src={img1} alt="img1" />
        <img id="img2" src={img2} alt="img2" />
        <img id="img3" src={img3} alt="img3" />
        <img id="img4" src={img4} alt="img4" />
    </div>
    <div className='na'>
            <img id="na" src={na} alt="na" />
            </div>
    </div>
  )
}

export default Nu