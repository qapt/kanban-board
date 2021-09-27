import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Navbar from '../components/Navbar/Navbar';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Dashboard from './Dashboard/Dashboard';
import EmptyDashboard from './Dashboard/EmptyDashboard';
import Landing from './Landing';
//import Footer from '../components/Footer';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/dashboard' component={EmptyDashboard} />
                    <Route
                        path='/dashboard/projects/:projectId'
                        component={Dashboard}
                    />
                    <Route path='/accounts/register' component={Register} />
                    <Route path='/accounts/login' component={Login} />
                </Switch>
                {/* <Footer /> */}
            </Router>
        </QueryClientProvider>
    );
};

export default App;
