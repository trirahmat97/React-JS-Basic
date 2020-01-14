import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceIList';

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
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return (
        <PlaceList items={loadedPlaces}/>
    )
}

export default UserPlaces;