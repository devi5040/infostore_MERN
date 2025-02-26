import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteDocument, getDocuments } from '../../store/actions/documentsAction';

function ItemCard( { item } ) {
    const dispatch = useDispatch();
    const deleteHandler = async () => {
        await dispatch( deleteDocument( item._id ) );
        dispatch( getDocuments() )
    }
    return (
        <div className='shadow-xl rounded-md border border-tertiary'>
            <img src={ item.imageUrl } alt={ item.title } className='h-[200px] w-[290px] object-contain m-2' />
            <h3 className='text-xl text-center my-3 font-semibold text-secondary'>{ item.title }</h3>
            <button className='w-[150px] py-2 text-center my-2 mx-18 bg-red-600 text-primary cursor-pointer border rounded-md hover:bg-primary hover:text-red-600 duration-300' onClick={ deleteHandler }><i className="bi bi-archive-fill mx-2"></i>Delete</button>
        </div>
    )
}

export default ItemCard
