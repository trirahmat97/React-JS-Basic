import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/component/FormElements/Input';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import Button from '../../shared/component/FormElements/Buttom';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/component/UIElement/Card';

import './UpdatePlace.css';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Bandar Lampung',
        description: 'City of Lampung',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipPIMUh78qAOeCQzMwMoG36OoroO0ZJ12p6QpWFY=w668-h240-k-no',
        address: 'Jl. Soekarno Hatta No.10, Rajabasa Raya, Kec. Rajabasa, Kota Bandar Lampung, Lampung 35141',
        creator: 'u1',
        location: {
            lat: 105.232675,
            lng: -5.358350
        }
    },
    {
        id: 'p2',
        title: 'Poltekkes Kemenkes Tanjung Karang',
        description: 'City of Lampung',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNK2v0UxDRti3DZVPQBNjwYNB0_heJ-v67z6Ami=w408-h306-k-no',
        address: 'Jalan Soekarno - Hatta No.1 dan No. 6, Hajimena, Kec. Natar, Kabupaten Lampung Selatan, Lampung 35145',
        creator: 'u2',
        location: {
            lat: 105.227441,
            lng: -5.359720
        }
    }
];

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;
    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '', 
            isValid: false
        },
        address: {
            value: '', 
            isValid: false
        }
    }, false);
    
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    useEffect(() => {
        if (identifiedPlace) {
            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                },
                address: {
                    value: identifiedPlace.address,
                    isValid: true
                }
            }, true); 
        }
        setIsLoading(false) 
    }, [setFormData, identifiedPlace]);

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    if (!identifiedPlace) {
        return (
            <div className="center">
                <Card>
                    <h2>Could not find place!</h2>
                </Card>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="center">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="address"
                element="input"
                type="text"
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid address."
                onInput={inputHandler}
                initialValue={formState.inputs.address.value}
                initialValid={formState.inputs.address.isValid}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>
                UPDATE PLACE
            </Button>
        </form>
  );
}

export default UpdatePlace;