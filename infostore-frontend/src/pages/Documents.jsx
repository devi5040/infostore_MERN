import React, { Fragment, useState } from 'react'
import Button from '../components/Button/Button'
import DocumentAdd from '../components/documents/DocumentAdd';

function Documents() {
    const [isEditing, setIsEditing] = useState( false );
    const documents = [
        { _id: 1, title: 'Doc1', imageUrl: 'https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8=' },
        { _id: 2, title: 'Doc1', imageUrl: 'https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8=' },
        { _id: 3, title: 'Doc1', imageUrl: 'https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8=' },
        { _id: 4, title: 'Doc1', imageUrl: 'https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8=' },
        { _id: 5, title: 'Doc1', imageUrl: 'https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8=' },
        { _id: 6, title: 'Doc1', imageUrl: 'https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8=' },
        { _id: 7, title: 'Doc1', imageUrl: 'https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8=' },
    ];

    const editingHandler = () => {
        console.log( 'inside edit handler' );
        setIsEditing( true )
    }

    const closeModal = () => {
        console.log( 'inside close modal' );
        setIsEditing( false )
    }

    console.log( "isEditing", isEditing );


    return (
        <Fragment>
            { isEditing && <DocumentAdd editingHandler={ editingHandler } closeModal={ closeModal } /> }
            <Button btnCaption='Add Document' isEditing={ editingHandler } />
            <div className='grid grid-cols-3 gap-10 justify-between w-full my-5'>
                { documents.map( ( document ) => {
                    return ( <div key={ document._id } className='shadow-xl rounded-md border border-tertiary'>
                        <img src={ document.imageUrl } alt={ document.title } className='h-[200px] w-full object-contain m-2' />
                        <h3 className='text-xl text-center my-3 font-semibold text-secondary'>{ document.title }</h3>
                        <button className='w-[150px] py-2 text-center my-2 mx-18 bg-red-600 text-primary cursor-pointer border rounded-md hover:bg-primary hover:text-red-600 duration-300'><i className="bi bi-archive-fill mx-2"></i>Delete</button>
                    </div> )
                } ) }
            </div>
        </Fragment>
    )
}

export default Documents
