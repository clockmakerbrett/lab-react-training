import React, { Component } from 'react';

export class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      nationality: '',
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleChange = (event) => {
    const value = event.target.value;
    const property = event.target.name;
    this.setState({
      [property]: value,
    });
  };
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email-input">Email:</label>
            <input
              id="email-input"
              className="form-control"
              type="email"
              placeholder="Your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <small>{}</small>
          </div>
          <div className="form-group">
            <label htmlFor="password-input">Password:</label>
            <input
              id="password-input"
              className="form-control"
              type="password"
              placeholder="Your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nationality-select">Nationality:</label>
            <select
              id="nationality-select"
              className="form-control"
              name="nationality"
              value={this.state.nationality}
              onChange={this.handleChange}
            >
              <option value="USA">USA</option>
              <option value="Portugal">Portugal</option>
              <option value="England">England</option>
              <option value="Brazil">Brazil</option>
            </select>
          </div>
        </form>
        <p>
          {this.state.nationality === 'USA' ||
          this.state.nationality === 'England'
            ? 'Hello'
            : 'Ola'}{' '}
          your email address is {this.state.email} and your password is a
          secret.
        </p>
      </div>
    );
  }
}

export default SignUpForm;
