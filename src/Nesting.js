import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from "react-router-dom";

function Nesting(props) {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/topics"}>Topics</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path={"/"}>
                        <Home/>
                    </Route>
                    <Route path={"/topics"}>
                        <Topics />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

const Topics = () => {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let {path, url} = useRouteMatch();
    console.log(useRouteMatch());
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    )
}

const Topic = () => {
    const {topicId} = useParams();
    return (
        <div>
            <h3>
                {topicId}
            </h3>
        </div>
    )
}

export default Nesting;