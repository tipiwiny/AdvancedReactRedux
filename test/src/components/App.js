import React , {Component }from 'react';
import { connect} from 'react-redux'
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import {  Route, Link} from 'react-router-dom';
import * as actions from 'actions'

class App extends Component {
  renderButton() {
    if(this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}> Sign out</button>
      )
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}> Sign in</button>
      )
    }
  }
  renderHeader() {
    return (
      <ul>
        <li>
        <Link to="/">HOme</Link>
      </li>
        <li>
          <Link to="/post">Post a Comment</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }
  render() {
    return (    <div>
          {this.renderHeader()}
          <Route path="/post" component={CommentBox}/>
          <Route path="/" exact component={CommentList}/>
        </div>)
  }
}

function mapStateToProps({auth}) {
  return {auth}
}

export default connect(mapStateToProps,actions)(App)
