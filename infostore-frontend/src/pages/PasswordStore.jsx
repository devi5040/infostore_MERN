import React, { Fragment, useEffect, useState } from 'react';
import AddItemButton from '../components/Button/AddItemButton';
import AddPassword from '../components/password/AddPassword';
import Paginator from '../components/Paginator/Paginator';
import PasswordCard from '../components/ItemCard/PasswordCard';
import { useDispatch, useSelector } from 'react-redux';
import { getPasswordStore } from '../store/actions/passwordStoreActions';

const ITEMS_PER_PAGE = 3;

function PasswordStore() {
    const [addPassword, setAddPassword] = useState( false );
    const [currentPage, setCurrentPage] = useState( 1 );
    const dispatch = useDispatch();
    const isLoggedIn = useSelector( state => state.auth.isLoggedIn );
    const passwordData = useSelector( state => state.passwordStore.passwordStore );
    const TOTAL_PASSWORDS = useSelector( state => state.passwordStore.count );

    useEffect( () => {
        if ( isLoggedIn )
        {
            dispatch( getPasswordStore( currentPage ) )
        }
    }, [dispatch, isLoggedIn] )


    const passwordAddHandler = () => {
        setAddPassword( false );
        dispatch( getPasswordStore( currentPage ) )
    };

    return (
        <Fragment>
            <AddItemButton btnCaption="Add Password" isEditing={ setAddPassword } />
            { addPassword && <AddPassword closeModal={ passwordAddHandler } /> }
            <Paginator
                currentPage={ currentPage }
                onChangePage={ setCurrentPage }
                lastPage={ Math.ceil( TOTAL_PASSWORDS / ITEMS_PER_PAGE ) }
                dispatchAction={ getPasswordStore }
            >
                { passwordData.map( ( password ) => {
                    return <PasswordCard key={ password._id } passwordData={ password } />
                } ) }
            </Paginator>
        </Fragment>
    );
}

export default PasswordStore;
