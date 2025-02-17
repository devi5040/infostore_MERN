import React, { Fragment, useState } from 'react'
import EducationAdd from '../components/education/EducationAdd';
import AddItemButton from '../components/Button/AddItemButton';

let TOTAL_EDUCATION_DETAILS = 0;
const TOTAL_ITEMS_PER_PAGE = 3;

function Education() {
    const [isEditing, setIsEditing] = useState( false );
    const [isAdding, setIsAdding] = useState( false );

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
        </Fragment>
    )
}

export default Education
