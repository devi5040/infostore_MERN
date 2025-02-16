import React, { Fragment, useState } from 'react'
import DocumentAdd from '../components/documents/DocumentAdd';
import ItemCard from '../components/ItemCard/ItemCard';
import Paginator from '../components/Paginator/Paginator';
import AddItemButton from '../components/Button/AddItemButton';

let TOTAL_DOCUMENTS = 0;
const ITEMS_PER_PAGE = 3;

function Documents() {
    const [isEditing, setIsEditing] = useState( false );
    const [currentPage, setCurrentPage] = useState( 1 )
    const documents = [
        { _id: 1, title: 'Doc1', imageUrl: 'https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8=' },
        { _id: 2, title: 'Doc1', imageUrl: 'https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8=' },
        { _id: 3, title: 'Doc1', imageUrl: 'https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8=' },
    ];

    TOTAL_DOCUMENTS = 7;

    const editingHandler = () => {
        setIsEditing( true )
    }

    const closeModal = () => {
        setIsEditing( false )
    }

    return (
        <Fragment>
            { isEditing && <DocumentAdd editingHandler={ editingHandler } closeModal={ closeModal } /> }
            <AddItemButton btnCaption='Add Document' isEditing={ editingHandler } />
            <Paginator currentPage={ currentPage } lastPage={ Math.ceil( TOTAL_DOCUMENTS / ITEMS_PER_PAGE ) } onChangePage={ setCurrentPage }>
                { documents.map( ( document ) => {
                    return (
                        <ItemCard key={ document._id } item={ document } />
                    )
                } ) }
            </Paginator>
        </Fragment>
    )
}

export default Documents
