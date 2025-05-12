

function directionDisplay({obj}:any){

    return(<>
    <div className="wrap">
     <div className='container fw-100' id="HPSD">
      <div className="row" >
        <div className="col" id="rightLine"><span className="parameters1">{obj.humidity}%</span>
          <div className='mention1'>Humidity</div>
        </div>
    <div className="col" id="rightLine"><span className="parameters2">{obj.priciptation}%</span>
      <div className='mention2'>Precipition</div>  
    </div>
    
    <div className="col" id="rightLine"><span className="parameters3">{obj.speed}Km/h</span>
      <div className='mention3'>Wind</div>
    </div>
    <div className="col" id="rightLine"><span className="parameters4">{obj.direction}</span>
      <div className='mention4'>Wind Direction</div>
    </div>
    </div>
    </div>
    </div>
    </>);
}

export default directionDisplay;