import React, {useState, useEffect} from 'react';
import {reviews} from '../Assets/ReviewData'

function ReviewCard() {
    const [index, setIndex] = useState(0);
    const {name, job, text, image} = reviews[index];
    const prevPerson = () => {
        setIndex((index)=>{
            let newIndex = index-1;
            return checkNumber(newIndex)
        })
    }
    const nextPerson = () => {
        setIndex((index)=>{
            let newIndex = index+1;
            return checkNumber(newIndex)
        })
    }
    const checkNumber = (number) => {
        if(number>reviews.length-1){
            return 0;
        }
        if(number < 0){
            return reviews.length-1;
        }
        return number;
    }

    return (
        <div className='review-item-container'>
            <img src={image}
                 alt={name}
                 className='person-img'
            />
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button
                    className='review-btn'
                    onClick={prevPerson}
                        >
                    <i className="fas fa-arrow-left"></i>
                </button>

                <button
                    className='review-btn'
                    onClick={nextPerson}>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>


        </div>
    )
}


export default ReviewCard