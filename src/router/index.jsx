import { Route, Switch } from 'react-router';
import AuthRoute from 'router/auth';
import UserRoute from 'router/user';

const HomeTemp = () => <h1>Home</h1>
const LoginTemp = () => <h1>Login</h1>
const UserTemp = () => <h1>User</h1>

const Router = () => {

    return (
        <Route
            render={() => (
                <Switch>
                    <UserRoute exact path="/" component={HomeTemp} />
                    <AuthRoute exact path="/login" component={LoginTemp} />
                    <UserRoute exact path="/user" component={UserTemp} />
                </Switch>
            )}
        />

    );
};

export default Router;
