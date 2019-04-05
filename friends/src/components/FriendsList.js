import React from 'react';
import { Link } from 'react-router-dom';
// import styled, { css } from 'styled-components';

// const FriendContainer = styled.div`
//     border: 2px solid gray;
//     width: 31%;
//     margin: 10px auto;
//     padding: 5px;
// `

const FriendsList = (props) => {

    const clickHandler = (event) => {
        event.preventDefault()
        props.setActiveFriend(event)
        props.history.push('/updateform')
    }

    // console.log(this.props)

    return (
        <div>
            {props.friends.map((element, index) => (
                <div key={index}>
                    <h2>{element.name}</h2>
                    <h4>{element.age}</h4>
                    <h4>{element.email}</h4>
                    <div>
                        {/* <Link to="/updateform"> */}
                            <button onClick={e => clickHandler(e)} id={element.id}>
                                update
                            </button>
                        {/* </Link> */}
                        <button onClick={props.deleteFriend} id={element.id}>
                            delete
                        </button>
                    </div>
                </div>
            ))}                

        </div>
    )
}


export default FriendsList;