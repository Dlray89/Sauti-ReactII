import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';

const UserListings = ({ userListings, user }) => {
    const [listings, setListings]  = useState(userListings);

    const [state, setState] = useState({
        columns: [
            { title: 'Item', field: 'item' },
            { title: 'Description', field: 'description' },
            { title: 'Location', field: 'location' },
            { title: 'Price', field: 'price', type: 'numeric' }
        ],
        data: userListings.map(listing => ({ 
            item: listing.item,
            description: listing.description,
            location: listing.location,
            price: listing.price 
        }))
    })

    useEffect(() => {
        // setListings(userListings);
        setState({...state, data: userListings.map(listing => ({ 
            item: listing.item,
            description: listing.description,
            location: listing.location,
            price: listing.price 
        }))})
    }, [])

    
    return (
        <MaterialTable 
            title='My listings'
            columns={state.columns}
            data={state.data}
        />
    )
}

export default UserListings
