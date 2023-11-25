import { Route } from 'react-router-dom';
import DefaultLayout from 'layouts/DefaultLayout';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Users from 'redux/users';

const UserRoute = ({ path, component: Component }) => {
    const history = useHistory();
    const user = useSelector(Users.selectors.getCurrentUser);
    if (!user) history.push('/signin');

    return <DefaultLayout>
        <Route exact path={path} component={Component} />
    </DefaultLayout>;
};

export default UserRoute;
