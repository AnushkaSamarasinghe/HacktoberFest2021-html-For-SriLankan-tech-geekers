import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='./images/img-9.jpeg' 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src='./images/img-2.jpeg' 
                        text='Travel to the isalnds of Bali in a Private Cruise'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='./images/img-3.jpeg' 
                        text='Set sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services'
                        />
                        <CardItem 
                        src='./images/img-4.jpeg' 
                        text='Experience on Football on top of the Himalayan Mountains'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src='./images/img-8.jpeg' 
                        text='Ride through Sahara Desert on a guided camel tour'
                        label='Adrenaline'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
