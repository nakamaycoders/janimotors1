import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import ReusableModel from '../../components/layouts/ReusableModel'


function EditProductModel() {
    const product = useSelector((state) => state.product)
    console.log(product)
  return (
    <>
        <ReusableModel>
            EditProductModel
        </ReusableModel>
    </>
  )
}

export default EditProductModel