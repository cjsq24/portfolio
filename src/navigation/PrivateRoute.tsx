import { Route, Redirect, RouteProps } from 'react-router-dom';
import AdminPanel from '../layouts/adminPanel/AdminPanel';
//import useAuth from '../auth/useAuth';

const PrivateRoute = ({ component: Component, path, ...rest }: RouteProps) => {
   if (!Component) return null;
   return (
      <Route
         {...rest}
         render={props =>
            1 == 1 ? (
               <AdminPanel>
                  <Component {...props} />
               </AdminPanel>
            ) : (
               <Redirect
                  to={{
                     pathname: "/login",
                     state: { from: props.location }
                  }}
               />
            )
         }
      />
   );
}

export default PrivateRoute;
