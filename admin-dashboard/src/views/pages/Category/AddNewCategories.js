/* eslint-disable react/prop-types */
import React from 'react'
import Category from './Category'

export default function AddNewCategories(props) {
  return (
    <div>
      <Category />
      {props.children}
    </div>
  )
}
