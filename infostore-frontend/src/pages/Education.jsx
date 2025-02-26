import React, { Fragment, useEffect, useState } from 'react'
import EducationAdd from '../components/education/EducationAdd';
import AddItemButton from '../components/Button/AddItemButton';
import EducationCard from '../components/ItemCard/EducationCard';
import Paginator from '../components/Paginator/Paginator';
import { useDispatch, useSelector } from 'react-redux';
import { getEducation } from '../store/actions/educatioActions';

let TOTAL_EDUCATION_DETAILS = 0;
const TOTAL_ITEMS_PER_PAGE = 3;

function Education() {
    const isLoggedIn = useSelector( state => state.auth.isLoggedIn );
    const dispatch = useDispatch();
    const education_details = useSelector( state => state.education.educationDetails );
    const count = useSelector( state => state.education.count )
    const [isAdding, setIsAdding] = useState( false );
    const [currentPage, setCurrentPage] = useState( 1 );

    useEffect( () => {
        if ( isLoggedIn )
        {
            dispatch( getEducation( currentPage ) )
        }
    }, [dispatch, isLoggedIn] )

    TOTAL_EDUCATION_DETAILS = count;

    const educationAddHandler = () => {
        setIsAdding( true );
    }

    const educationAddCloseModal = () => {
        setIsAdding( false );
        dispatch( getEducation( currentPage ) )
    }

    return (
        <Fragment>
            { isAdding && <EducationAdd closeModalHandler={ educationAddCloseModal } /> }
            <AddItemButton btnCaption='Add education details' isEditing={ educationAddHandler } />
            <Paginator dispatchAction={ getEducation } currentPage={ currentPage } onChangePage={ setCurrentPage } lastPage={ Math.ceil( TOTAL_EDUCATION_DETAILS / TOTAL_ITEMS_PER_PAGE ) }>
                { education_details.map( ( education ) => {
                    return <EducationCard education={ education } key={ education._id } />
                } ) }
            </Paginator>
        </Fragment>
    )
}

export default Education
