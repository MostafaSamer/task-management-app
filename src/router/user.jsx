import { Route } from 'react-router-dom';
import DefaultLayout from 'layouts/DefaultLayout';

const SponsorRoute = ({ path, component: Component }) => {
    // check if user is logged in
    return <DefaultLayout>
        <Route exact path={path} component={Component} />
    </DefaultLayout>;
};

export default SponsorRoute;
