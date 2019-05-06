import Dashboard from './components/Pages/Dashboard';
import Chart from './components/Pages/Explorer';



export const routes = [
    {
        path: '/',
        title: 'Dashboard',
        breadcrumb: 'Dashboard',
        breadcrumb_link: true,
        exact: true,
        component: Dashboard,
    },
    {
      path: '/explorer',
      title: 'Explorer',
      breadcrumb: 'Explorer',
      breadcrumb_link: false,
      exact: true,
      component: Chart
    }
];
