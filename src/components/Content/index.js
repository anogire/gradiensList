import { Switch, Route } from 'react-router-dom';

import { GradientForm } from '../GradientForm';
import { GradientsList } from '../GradientsList';

export function Content() {
  return (
    <Switch>
      <Route path="/edit/:id" component={GradientForm} />
      <Route path="/new" component={GradientForm} />
      <Route path="/" component={GradientsList} />
    </Switch>
  );
}