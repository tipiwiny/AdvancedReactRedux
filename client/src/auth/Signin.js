import React, {Component} from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import { reduxForm, Field} from 'redux-form';
import * as actions from './../actions';


class Signin extends Component {
  onSubmit = (formProps) => {
    this.props.signin(formProps,() => {
      this.props.history.push('/feature')
    })
  }

  render() {
    const { handleSubmit} = this.props
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="type"
            component="input"
            />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign In!</button>
      </form>
    )
  }
}

function mapStateToProps({auth: {errorMessage}}) {
  return { errorMessage }
}

export default compose(connect(mapStateToProps, actions),reduxForm({form: 'signin'}))(Signin);
