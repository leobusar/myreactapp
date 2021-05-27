import {Route, Switch}  from "react-router-dom"; 

import Home from '../pages/Home'; 
import UserList from '../pages/UserList';
import NotFound from '../pages/NotFound';
import User from  '../pages/User';

export default  (
    <Switch >
        <Route exact path="/" >
            <Home />
        </Route> 
        <Route  path="/users/:id" >
            <User />
        </Route>
        <Route  path="/users" >
            <UserList />
        </Route>
        <Route  path="*" >
            <NotFound />
        </Route>            
    </Switch>
)