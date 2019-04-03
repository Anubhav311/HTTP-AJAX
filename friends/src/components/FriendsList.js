import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const FriendsList = (props) => {
    return (
        <div>
            {props.friends.map((element, index) => (
                <div key={index}>
                    <h2>{element.name}</h2>
                    <h4>{element.age}</h4>
                    <h4>{element.email}</h4>
                </div>
            ))}                

        </div>
    )
}


export default FriendsList;