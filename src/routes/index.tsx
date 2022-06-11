import { Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';

import { Signup } from '../pages/Signup';
import { Route } from './routes';

export const Routes = () => {
  
  return (
    <Switch>
     
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard}/>
      
    </Switch>
  );
};
