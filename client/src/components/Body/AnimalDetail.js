import React from 'react';

function AnimalDetail(props) {
  
  return (
    <div className="text-center" >
      
      <img
        alt= "dog"
        className="img-fluid"
        src={props.image}
        style={{ margin: '0 auto' }}
      />
      
    </div>
 ) 
  
}

export default AnimalDetail;