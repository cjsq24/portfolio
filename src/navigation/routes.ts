import Dashboard from "../views/adminPanel/Dashboard/Dashboard";
import Testing from "../views/adminPanel/testing/Testing";

interface IRoute {
   path: string;
   name: string;
   component: () => JSX.Element;
   type: string;
}

const routes: Array<IRoute> = [
   { path: '/admin-panel/testing', name: 'Testing', component: Testing, type: 'private' },
   { path: '/admin-panel/dashboard', name: 'Dashboard', component: Dashboard, type: 'private' },
   { path: '/admin-panel/', name: 'Dashboard', component: Dashboard, type: 'private' },
]

export default routes;