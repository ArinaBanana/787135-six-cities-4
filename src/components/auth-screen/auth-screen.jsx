import React, {PureComponent, createRef} from "react";
import {compose} from 'redux';
import PropTypes from "prop-types";
import {Link, withRouter} from "react-router-dom";
import {replace} from 'connected-react-router';
import {connect} from "react-redux";
import {getUrlByMainRoute} from "../../utils/url";
import {isAuthorized} from "../../store/selectors/user";
import withCheckAuth from "../../hocs/with-check-auth/with-check-auth";

class AuthScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.isAuth) {
      this.props.replace(`/`);
    }
  }

  _handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to={getUrlByMainRoute()} className="header__logo-link">
                  <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action=""
                onSubmit={this._handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    ref={this.loginRef}
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    ref={this.passwordRef}
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required=""/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

AuthScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  replace: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAuth: isAuthorized(state),
});

const mapDispatchToProps = {
  replace
};

export {AuthScreen};
export default compose(
    withCheckAuth(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(AuthScreen);
