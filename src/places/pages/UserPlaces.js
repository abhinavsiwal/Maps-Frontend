import React from 'react'
import {useParams} from 'react-router-dom';
import PlaceList from '../components/PlaceList'

const DUMMY_PLACES=[
    {
    id:"p1",
    title:"Empire State Building",
    description:"one of the most scrapers in the world",
    imageUrl:"https://images.unsplash.com/photo-1533752125192-ae59c3f8c403?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
    address:"20 W st NewYork",
    location:{
        lat:40.7484,
        lng:73.9857,
    },
    creator:'u1',
},
    {
    id:"p2",
    title:"Empire State Building",
    description:"one of the most scrapers in the world",
    imageUrl:"https://images.unsplash.com/photo-1533752125192-ae59c3f8c403?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
    address:"20 W st NewYork",
    location:{
        lat:40.7484,
        lng:-73.9857,
    },
    creator:'u2',
},
]

const UserPlaces = () => {
    const userId=useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place=>place.creator===userId);

 

    return (

        <PlaceList items={loadedPlaces} />
    )
}

export default UserPlaces
