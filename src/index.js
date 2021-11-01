import React from 'react'; // Dependencies
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';

// Components
import Home from './components/home' // Import home component
import Profile from './components/profiles'; // Import profile component
import Posts from './components/posts'; // Import profile component
import Articles from './components/articles'; // Import profile component
import PostItem from './components/post_item'; // Import profile component
import notFound from './components/notFound'; // Import profile component
import Lifecycle from './components/lifecycle'; // Import Lifecycle component
import PureComponent from './components/pureComponent'; // Import Lifecycle component
import Conditional from './components/conditional'; // Import Consitional component
import User from './components/user'; // Import Consitional component

// Using Props
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to="/">Home</NavLink><br/>
          <NavLink
            to="/posts"
            activeStyle={{color:'red'}}
            activeClassName="selected"
          >Posts</NavLink><br />
          <NavLink
            to="/articles"
            activeStyle={{ color: 'red' }}
            activeClassName="selected"
          >Articles</NavLink><br />
          <NavLink to={{
            pathname:'/profile',
            hash:'#francis',
            search:'?profile=true'
          }}>Profile</NavLink><br />
          <NavLink to="/life">Life</NavLink>  <br />{/* Lifecycle */}
          <NavLink to="/pureComponent">PureComponent</NavLink>  <br />{/* PureComponent */}
          <NavLink to="/conditional">Conditional</NavLink>  <br />{/* Conditional */}
          <NavLink to="/user">User</NavLink>  {/* User */}
          <hr/>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/posts/:id/:username" component={PostItem} /> {/* Dynamic value */}
            <Route path="/life" component={Lifecycle} /> {/* // Lifecycle */}
            <Route path="/pureComponent" component={PureComponent} /> {/* // Lifecycle */}
            <Route path="/conditional" component={Conditional} /> {/* // Conditional */}
            <Route path="/posts" exact component={Posts} />
            <Route path="/articles" exact component={Articles} />
            <Route path="/user" exact component={User} />
            <Route path="/" exact component={Home} />  {/*  Render posts, profile and home name without exact*} */}
            {/* <Route render={()=> <h3>Oops 404</h3>} /> */}
            <Route component={notFound} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'));
