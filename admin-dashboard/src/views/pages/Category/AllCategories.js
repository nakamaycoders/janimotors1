import React from 'react'
import { useSelector } from 'react-redux'
export default function AllCategories() {
  const category = useSelector((state) => state.category)

  return (
    <>
      {/* {category.map((item, index) => {
        ;<div key={index}>
          <h1>{item.name}</h1>
        </div>
      })} */}
    </>
  )
}
