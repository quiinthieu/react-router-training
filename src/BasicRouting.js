import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function BasicRouting(props) {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/users"}>Users</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path={"/"} exact>
                        <Home/>
                    </Route>
                    <Route path={"/about"}>
                        <About/>
                    </Route>
                    <Route path={"/users"}>
                        <Users/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => {
    return <h2>Home</h2>;
}

const About = () => {
    return <h2>About</h2>
}

const Users = () => {
    return <h2>Users</h2>
}

export default BasicRouting;