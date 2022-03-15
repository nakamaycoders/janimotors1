import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import ReusableModel from '../../components/layouts/ReusableModel'


const EditProductModel = (props)=> {
  const {
    size,
    handleClose,
    onSubmit,
    show,
    modalTitle,
  } = props;

    const product = useSelector((state) => state.product)
    console.log(product)
  return (
    <>
        <ReusableModel
        show={show}
        handleClose={handleClose}
        // onSubmit={onSubmit}
        >
            EditProductModel
        </ReusableModel>
    </>
  )
}

export default EditProductModel