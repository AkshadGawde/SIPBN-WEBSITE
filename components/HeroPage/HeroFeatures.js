import React, { useState } from 'react'


function HeroFeatures() {

    const [src,setSrc] = useState("https://wbf.wobi.com/wp-content/uploads/2023/12/wbf_syd_2023_cameron_background_004_1680x1120-min.webp");
    
    function handleGameChanger(){
        setSrc("https://wbf.wobi.com/wp-content/uploads/2023/12/wbf_syd_2023_cameron_background_004_1680x1120-min.webp");
    }
    function handleImpact(){
        setSrc("https://info.wobi.com/wp-content/uploads/2023/11/wbf_syd_2023_vip_event_001_840x560-min.webp?_t=1701080555");
    }
    function handleInnovate(){
        setSrc("https://info.wobi.com/wp-content/uploads/2023/11/wbf_syd_2023_akinola_001_840x560-min.webp?_t=1701080572");
    }
   

  return (
    <div className='heroContainer' style={{background:"linear-gradient(135deg, #1e3c72 0%, #000000 50%)"}}>
      <div className="featureContainer">
        <h1>WHERE BUSINESS LEADERS <br /> CONVERGE</h1>
        <hr />
      <div className="heroContent" style={{justifyContent:"center"}}>
        <div className="featureContainer" style={{justifyContent:"flex-end" , alignItems:"normal"}}>
            <button className='button-primary' onClick={handleGameChanger}>GAME-CHANGING CEOS</button>
            <button className='secondary-button' onClick={handleImpact}>IMPACTFUL DESICION MAKERS</button>
            <button className='button-primary' onClick={handleInnovate}>INNOVATIVE ENTREPRENEURS</button>
        </div>
        <img src={`${src}`} alt="" className='featureImg'/>
      </div>
      {/* <div style={{display:"flex", marginBottom:"30px"}}>
        <button className='secondary-button'>Download Brocher</button>
        <button className='secondary-button'>Buy <br /> Tickets</button>
      </div> */}
      </div>
    </div>
  )
}

export default HeroFeatures
