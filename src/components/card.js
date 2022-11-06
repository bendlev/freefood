import React from 'react';
import "../App.css";
import {GoLocation} from 'react-icons/go';
import {FiCoffee} from 'react-icons/fi';
import {AiOutlineTag} from 'react-icons/ai';

const Card = (props) => {
    return (
        <div className="cardbox">
            <div className="innerbox">
                <p className='cardheader'>{props.name}</p>
                <p><GoLocation style={{marginRight: '5px'}}/>{props.location}</p>
                <p><FiCoffee style={{marginRight: '5px'}}/>{props.servingsize}</p>
                <p><AiOutlineTag style={{marginRight: '5px'}}/>{props.tags}</p>
            </div>
            <button
                onClick={() => {
                    alert('Item claimed!');
                }}
            >
            Claim me
            </button>
        </div>
    );
}

export default Card;