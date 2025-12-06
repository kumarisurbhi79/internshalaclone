import React from 'react'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import n from './n.png'
function musu() {
  return (
    <div>
    <h1 id="hi">Hi, Kumari!🤚</h1>
    <p id="by">Let’s help you land your dream career</p>
    <h1 id="hi">Trending on Internshala🔥</h1>
    <div className='pic'>
    <img id="pic1" src={pic1} alt="pic1" />
    <img id="pic2" src={pic2} alt="pic2" />
    <img id="pic3" src={pic3} alt="pic3" />
     </div>
      <div className='na'>
        <img id="n" src={n} alt="n" />
        </div>
 </div>
  )
}

export default musu