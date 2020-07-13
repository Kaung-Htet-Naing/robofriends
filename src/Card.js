import React from 'react';

const Card = ({name,email,id}) => {
    return(
        
        <div className="tc bg-light-green dib br3 pd3 ma2 grow">
            <div>
                <img alt="robot" src={`https://robohash.org/${id}?200x200`}></img>
            </div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default Card;