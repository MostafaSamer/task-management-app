import { Route } from 'react-router-dom';
import DefaultLayout from 'layouts/DefaultLayout';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Users from 'redux/users';

const AuthRoute = ({ path, component: Component }) => {
    const history = useHistory();
    const user = useSelector(Users.selectors.getCurrentUser);
    if (user) history.push('/');

    return <DefaultLayout>
        <Route exact path={path} component={Component} />
    </DefaultLayout>;
};

export default AuthRoute;
