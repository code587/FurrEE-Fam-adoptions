import React from 'react';

function AnimalDetail(props) {
  return (
    <div className="text-center">
      {/* changed title to type for historical purposes while building the app */}
      <img
        alt={props.type}
        className="img-fluid"
        // src={props.src}
        style={{ margin: '0 auto' }}
      />
      <h3>Breed(s): {props.breed}</h3>
    </div>
  );
}

export default AnimalDetail;
