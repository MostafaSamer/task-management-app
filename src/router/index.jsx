import { Route, Switch } from 'react-router';
import AuthRoute from 'router/auth';
import UserRoute from 'router/user';

import SignUp from 'screens/auth/signup';

const HomeTemp = () => <h1>Home</h1>
const LoginTemp = () => <h1>Login</h1>
const UserTemp = () => <h1>User</h1>

const Router = () => {

    return (
        <Route
            render={() => (
                <Switch>
                    <AuthRoute exact path="/signup" component={SignUp} />

                    <UserRoute exact path="/" component={HomeTemp} />
                    <AuthRoute exact path="/login" component={LoginTemp} />
                    <UserRoute exact path="/user" component={UserTemp} />
                </Switch>
            )}
        />

    );
};

export default Router;
