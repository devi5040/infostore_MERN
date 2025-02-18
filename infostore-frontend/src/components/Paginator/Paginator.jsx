import React, { Fragment } from 'react'
import Button from '../Button/Button'

function Paginator( { children, onChangePage, currentPage, lastPage } ) {
    const nextButtonClickHandler = () => {
        onChangePage( currentPage => currentPage + 1 );
    }

    const prevButtonClickHandler = () => {
        onChangePage( currentPage => currentPage - 1 )
    }

    return (
        <Fragment>
            <div className='grid grid-cols-3 gap-10 justify-between w-full my-10'>
                { children }
            </div>
            <div className='flex justify-center gap-10 items-center my-10'>
                { currentPage > 1 && <Button onClickButton={ prevButtonClickHandler }>Prev</Button> }
                <Button>{ currentPage }</Button>
                { currentPage < lastPage && <Button onClickButton={ nextButtonClickHandler }>Next</Button> }
            </div>
        </Fragment>
    )
}

export default Paginator
