import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Categories',
    to: '/categories',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Categories',
        to: '/categories',
      },
      {
        component: CNavItem,
        name: 'Add New Categories',
        to: '/categories/add-new-categories',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Products',
    to: '/products',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Products',
        to: '/products',
      },
      {
        component: CNavItem,
        name: 'Add New Products',
        to: '/products/add-new-products',
      },
    ],
  },
]

export default _nav
