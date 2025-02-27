import React, { Fragment, useEffect, useState } from 'react'
import DocumentAdd from '../components/documents/DocumentAdd';
import ItemCard from '../components/ItemCard/ItemCard';
import Paginator from '../components/Paginator/Paginator';
import AddItemButton from '../components/Button/AddItemButton';
import { useDispatch, useSelector } from 'react-redux'
import { getDocuments } from '../store/actions/documentsAction';

const ITEMS_PER_PAGE = 3;

function Documents() {
    const isLoggedIn = useSelector( state => state.auth.isLoggedIn )
    const [isEditing, setIsEditing] = useState( false );
    const [currentPage, setCurrentPage] = useState( 1 );
    const documents = useSelector( state => state.documents.documents );
    const TOTAL_DOCUMENTS = useSelector( state => state.documents.documentCount )
    const dispatch = useDispatch();
    useEffect( () => {
        if ( isLoggedIn )
        {
            dispatch( getDocuments( currentPage ) )
        }
    }, [isLoggedIn, dispatch] )

    const editingHandler = () => {
        setIsEditing( true )
    }

    const closeModal = () => {
        setIsEditing( false );
        dispatch( getDocuments( currentPage ) )
    }

    return (
        <Fragment>
            { isEditing && <DocumentAdd closeModal={ closeModal } /> }
            <AddItemButton btnCaption='Add Document' isEditing={ editingHandler } />
            <Paginator currentPage={ currentPage } lastPage={ Math.ceil( TOTAL_DOCUMENTS / ITEMS_PER_PAGE ) } onChangePage={ setCurrentPage }>
                { documents.length > 0 && documents.map( ( document ) => {
                    return (
                        <ItemCard key={ document._id } item={ document } />
                    )
                } ) }
            </Paginator>
        </Fragment>
    )
}

export default Documents
