import Landing from './components/landing';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Navbar, Nav, FormControl, Form} from 'react-bootstrap'

function App() {

  return(
    <div>
      <Router>
        <div style={{background: "linear-gradient(to top right, #cfd9df 0%, #E8E8E8 100%)"}}>
          <div className="aboveheader" align="center" style={{"backgroundColor": "#bfbfbf"}}>
          <i class='fas fa-chess-queen'></i> &nbsp;Flat 40% off <small>on subscribing Premium Membership  <b>Buy now...</b></small>
          </div>
          <div className="aboveheader" align="center" style={{"backgroundColor": "#bfbfbf"}}>
          <i class='fas fa-donate'></i> &nbsp;<small>Be a part of the solution, not part of the pollution</small>
          </div>
          <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand><Link to="/" style={{color:"white", textDecoration:"none"}}>Air-Quality-Predictor</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link style={{color:"white"}}>Current :<a style={{color:"green", fontWeight: "bold"}}> Good</a></Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              </Form>
            </Navbar.Collapse>
          </Navbar>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <Landing/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    
  )
}

export default App;
