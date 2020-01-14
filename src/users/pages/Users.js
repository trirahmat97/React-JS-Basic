import React from 'react';
import UserList from '../components/UserList';


const Users = () => {
    const USERS = [
        {id: 'u1', name: 'tra', image: 'https://www.nativeindonesia.com/wp-content/uploads/2019/10/Menara-Siger.jpg', places: 3},
        {id: 'u2', name: 'gilda', image: 'https://www.lampost.co/upload/umk-bandar-lampung-bakal-naik-tahun-depan.JPG'}
    ];
    return <UserList items={USERS} />
}

export default Users;