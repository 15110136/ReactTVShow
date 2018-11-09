import React  from 'react'
import { Switch,Route } from "react-router-dom";
import series from '../../containers/Series/series';
import singleseries from '../../containers/SingleSeries/singleseries';

const Main = props =>(
  <Switch>
    <Route exact path='/' component={series}/>
    <Route path='/series/:id' component={singleseries} />
  </Switch>
);

export default Main;
