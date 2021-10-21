import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Tổng quan',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Tổng quan',
    to: '/theme/colors',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Đơn hàng',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hàng hoá',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Đối tác',
    to: '/theme/typography',
    icon: 'cil-cursor',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Nhập hàng',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Tồn kho',
    to: '/charts',
    icon: 'cil-star'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Doanh số',
    route: '/notifications',
    icon: 'cil-bell',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lợi nhuận',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'info'
    },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Thiết lập',
    route: '/pages',
    icon: 'cil-star',
  },
]

export default _nav
