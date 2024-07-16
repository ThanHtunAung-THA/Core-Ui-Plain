import { icons } from "../assets/icons";

export default [

  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  {
    // _tag: 'CSidebarNavDropdown',
    // name: 'Pages',
    // route: '/pages',
    // icon: 'cil-star',
    // _children: [
    //   {
        // _tag: 'CSidebarNavItem',
        // name: 'Login',
        // to: '/login',
      // }
      // ,
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Register',
      //   to: '/register',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Error 404',
      //   to: '/404',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Error 500',
      //   to: '/500',
      // },
    // ]
    _tag: 'CSidebarNavDropdown',
    name: 'Account',
    route: '/account',
    icon: 'cilUser',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'LoginReact',
        to: '/loginReact',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'LogoutReact',
        to: '/logoutReact',
      },
      
    ]

  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu',
    route: '/menus',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Test Code',
        to: '/menus/TestCode',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Menu',
        to: '/menus/NewMenu',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Welcome',
        to: '/menus/Welcome',
      },
    ]
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu 2',
    route: '/menus',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'HomePage',
        to: '/home',
        icon: 'cilHome'

      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register2',
        to: '/register2',
        icon: 'cilUser'

      },
      {
        _tag: 'CSidebarNavItem',
        name: 'ContentPage',
        to: '/content',
        icon: 'cilInbox'

      },


    ]
  },


]


