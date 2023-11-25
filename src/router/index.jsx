import { Route, Switch } from 'react-router';
import AuthRoute from 'router/auth';
import UserRoute from 'router/user';

import SignUp from 'screens/auth/signup';
import SignIn from 'screens/auth/signin';
import Home from 'screens/user/home';

const Router = () => {

    return (
        <Route
            render={() => (
                <Switch>
                    <AuthRoute exact path="/signup" component={SignUp} />
                    <AuthRoute exact path="/signin" component={SignIn} />

                    <UserRoute exact path="/" component={Home} />
                </Switch>
            )}
        />

    );
};

export default Router;
