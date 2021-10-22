import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavItem} from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Tổng quan',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info'
    },
  },
  {
    component: CNavItem,
    name: 'Đơn hàng',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Hàng hoá',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Đối tác',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Nhập hàng',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Tồn kho',
    to: '/charts',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Doanh số',
    to: '/chart',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Lợi nhuận',
    to: '/chats',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Thiết lập',
    to: '/carts',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },

]

export default _nav
