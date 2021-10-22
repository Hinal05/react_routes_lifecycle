import React from 'react'; // Dependencies
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';

// Components
import Home from './components/home' // Import home component
import Profile from './components/profiles'; // Import profile component
import Posts from './components/posts'; // Import profile component
import PostItem from './components/post_item'; // Import profile component

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
          <NavLink to={{
            pathname:'/profile',
            hash:'#francis',
            search:'?profile=true'
          }}>Profile</NavLink>
          <hr/>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/posts/:id/:username" component={PostItem} /> {/* Dynamic value */}
            <Route path="/posts" exact component={Posts} />
            <Route path="/" exact component={Home} />  {/*  Render posts, profile and home name without exact*} */}
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'));
