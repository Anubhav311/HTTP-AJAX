import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const FriendsList = (props) => {
    return (
        <div>
            {props.friends.map((element, index) => (
                <div key={index}>
                    <h2>{element.name}</h2>
                    <h4>{element.age}</h4>
                    <h4>{element.email}</h4>
                    <div>
                        <Link to="/updateform"><button onClick={props.setActiveFrient} id={index+1}>update</button></Link>
                        <button>delete</button>
                    </div>
                </div>
            ))}                

        </div>
    )
}


export default FriendsList;