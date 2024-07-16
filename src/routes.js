import React from 'react';
const TestCode = React.lazy(() => import('./views/menus/testCode/TestCode'));
const Welcome = React.lazy(() => import('./views/menus/testCode/Welcome'));
const NewMenu = React.lazy(() => import('./views/menus/newMenu/NewMenu'));
const Home = React.lazy(() => import('./views/home'));
const Register = React.lazy(() => import('./views/register'));
const Content = React.lazy(() => import('./views/pages/content/content'));
const Logout = React.lazy(() => import('./views/logoutReact'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/menus/TestCode', name: 'TestCode', component: TestCode },
  { path: '/menus/Welcome', name: 'Welcome', component: Welcome },
  { path: `/menus/NewMenu`, name: 'NewMenu', component: NewMenu},
  { path: `/home`, name: 'Home', component: Home},
  { path: `/register`, name: 'Register', component: Register},
  { path: `/content`, name: 'Content', component: Content},
  { path: `/logoutReact`, name: 'Logout', component: Logout},
];

export default routes;



