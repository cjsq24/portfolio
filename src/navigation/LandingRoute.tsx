import { Route, RouteProps } from 'react-router-dom';
import LandingPage from '../layouts/landingPage/LandingPage';

const LandingRoute = ({ component: Component, path, ...rest }: RouteProps) => {
   if (!Component) return null;
   return (
      <Route
         {...rest}
         render={props =>
            <LandingPage>
               <Component {...props} />
            </LandingPage>
         }
      />
   );
}

export default LandingRoute;
