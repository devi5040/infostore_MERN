import React, { Fragment, useState } from 'react'
import EducationAdd from '../components/education/EducationAdd';
import AddItemButton from '../components/Button/AddItemButton';
import ItemCard from '../components/ItemCard/ItemCard';
import EducationCard from '../components/ItemCard/EducationCard';
import Paginator from '../components/Paginator/Paginator';

let TOTAL_EDUCATION_DETAILS = 0;
const TOTAL_ITEMS_PER_PAGE = 3;

function Education() {
    const [isEditing, setIsEditing] = useState( false );
    const [isAdding, setIsAdding] = useState( false );
    const [currentPage, setCurrentPage] = useState( 1 );

    const education_details = [
        {
            _id: '67b336d16b70f93ef35d8b5e',
            education: 'SSLC',
            institute: 'VHS',
            marks: '92.64',
            achievements: '-',
            otherDetails: '-',
            userId: '679a64dcb2440f3edcfc21fe',
            __v: 0,
        },
        {
            _id: '67b336e16b70f93ef35d8b61',
            education: 'PUC',
            institute: 'VC',
            marks: '81.33',
            achievements: '-',
            otherDetails: '-',
            userId: '679a64dcb2440f3edcfc21fe',
            __v: 0,
        },
    ];

    TOTAL_EDUCATION_DETAILS = 7;

    const educationAddHandler = () => {
        setIsAdding( true );
    }

    const educationAddCloseModal = () => {
        setIsAdding( false );
    }

    return (
        <Fragment>
            { isAdding && <EducationAdd closeModalHandler={ educationAddCloseModal } /> }
            <AddItemButton btnCaption='Add education details' isEditing={ educationAddHandler } />
            <Paginator currentPage={ currentPage } onChangePage={ setCurrentPage } lastPage={ Math.ceil( TOTAL_EDUCATION_DETAILS / TOTAL_ITEMS_PER_PAGE ) }>
                { education_details.map( ( education ) => {
                    return <EducationCard education={ education } key={ education._id } />
                } ) }
            </Paginator>
        </Fragment>
    )
}

export default Education
