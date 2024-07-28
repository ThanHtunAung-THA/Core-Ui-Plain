import React from 'react';
const TestCode = React.lazy(() => import('./views/menus/testCode/TestCode'));
const Welcome = React.lazy(() => import('./views/menus/testCode/Welcome'));
const NewMenu = React.lazy(() => import('./views/menus/newMenu/NewMenu'));
const Home = React.lazy(() => import('./views/home'));
const Content = React.lazy(() => import('./views/pages/content/content'));
const Logout = React.lazy(() => import('./views/logoutReact'));
const OTP = React.lazy(() => import('./views/pages/otp/otp'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/menus/TestCode', name: 'TestCode', component: TestCode },
  { path: '/menus/Welcome', name: 'Welcome', component: Welcome },
  { path: `/menus/NewMenu`, name: 'NewMenu', component: NewMenu},
  { path: `/home`, name: 'Home', component: Home},
  { path: `/content`, name: 'Content', component: Content},
  { path: `/logoutReact`, name: 'Logout', component: Logout},
  { path: `/menus/OTP`, name: 'OTP', component: OTP},
];

export default routes;



