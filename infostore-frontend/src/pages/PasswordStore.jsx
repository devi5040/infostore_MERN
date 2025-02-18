import React, { Fragment, useState } from 'react';
import AddItemButton from '../components/Button/AddItemButton';
import AddPassword from '../components/password/AddPassword';
import Paginator from '../components/Paginator/Paginator';
import PasswordCard from '../components/ItemCard/PasswordCard';

let TOTAL_PASSWORDS = 0;
const ITEMS_PER_PAGE = 3;

function PasswordStore() {
    const [addPassword, setAddPassword] = useState( false );
    const [currentPage, setCurrentPage] = useState( 1 );

    TOTAL_PASSWORDS = 4;

    const passwordData = [
        {
            _id: '67a0e3a8e6448dc418c578ba',
            username: '-',
            platform: 'https://github.com/',
            email: 'devi@gmail.com',
            password: 'Devu4563',
            userId: '679a64dcb2440f3edcfc21fe',
            __v: 0,
        },
        {
            _id: '67a0e4aee9419cdc1bcf0f8e',
            platform: 'https://github.com/',
            username: '-',
            email: 'devi@gmail.com',
            password: 'Devu0063',
            userId: '679a64dcb2440f3edcfc21fe',
            __v: 0,
        },
    ];

    const passwordAddHandler = () => {
        setAddPassword( false );
    };

    return (
        <Fragment>
            <AddItemButton btnCaption="Add Password" isEditing={ setAddPassword } />
            { addPassword && <AddPassword closeModal={ passwordAddHandler } /> }
            <Paginator
                currentPage={ currentPage }
                onChangePage={ setCurrentPage }
                lastPage={ Math.ceil( TOTAL_PASSWORDS / ITEMS_PER_PAGE ) }
            >
                { passwordData.map( ( password ) => {
                    return <PasswordCard key={ password._id } passwordData={ password } />
                } ) }
            </Paginator>
        </Fragment>
    );
}

export default PasswordStore;
