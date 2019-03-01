import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {Hello} from '../components/Hello'

interface AppDataProps { }
interface AppEventProps { }

class App extends React.Component<AppDataProps, AppEventProps>{
    render() {
        // if (!this.props.isLogin) {
        //     return <Login />
        // }

        return (
            <Router>
                <Route exact path='/hello' component={Hello}></Route>
            </Router>
        )
    }
}