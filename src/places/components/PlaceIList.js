import React from 'react';

import Card from '../../shared/component/UIElement/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/component/FormElements/Buttom';

import './PlaceIList.css';


const PlaceList = props => {
    if(props.items.length === 0){
        return (
            <div className="place-list center">
                <Card>
                    <h2>No place found. maybe create one?</h2>
                    <Button to="/places/new">Share Place</Button>
                </Card>
            </div>
        )
    }

    return <ul className="place-list">
        {props.items.map(place => (
            <PlaceItem 
                key={place.id} 
                id={place.id} 
                image={place.imageUrl} 
                title={place.title} 
                description={place.description} 
                address={place.address} 
                creatorId={place.creator} 
                coordinates={place.location} />
        ))}
    </ul>
}

export default PlaceList;