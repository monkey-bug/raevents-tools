import { render } from "preact";
import { LocationProvider, ErrorBoundary, Router, Route, useLocation } from "preact-iso";
import "./app.css";

import { Verify } from "./tools/verify.jsx";
import { Menu } from "./menu.jsx";

function Test() {
    return <div>TEST</div>;
}

function NotFound() {
    const location = useLocation();
    console.log(location);
    return <div>{location.path}</div>;
}

function App() {
	return <LocationProvider>
        <ErrorBoundary>
            <main>
                <Menu />
                <Router>
                    <Route path="./verify" component={Verify} />
                    <Route path="./test" component={Test} />
                    <Route default component={NotFound} />
                </Router>
            </main>
        </ErrorBoundary>
    </LocationProvider>;
}

render(<App />, document.body);
