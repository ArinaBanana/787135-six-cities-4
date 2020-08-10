import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import User from "../user/user.jsx";
import {Operation} from "../../store/actions/places";
import FavoriteIsEmpty from "../favorite-is-empty/favorite-is-empty.jsx";
import FavoriteItem from "../favorite-item/favorite-item.jsx";

class FavoriteScreen extends React.Component {
  componentDidMount() {
    const {getFavoritePlaces} = this.props;
    getFavoritePlaces();
  }

  render() {
    const {favoritePlaces} = this.props;

    if (favoritePlaces.length === 0) {
      return <FavoriteIsEmpty />;
    }

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to={`/`} className="header__logo-link">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <User/>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoriteItem />
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link to={`/`} className="footer__logo-link">
            <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    );
  }
}

FavoriteScreen.propTypes = {
  getFavoritePlaces: PropTypes.func.isRequired,
  favoritePlaces: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  favoritePlaces: state.PLACES.favoritePlaces
});

const mapDispatchToProps = {
  getFavoritePlaces: Operation.loadFavoritePlaces
};

export {FavoriteScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen);
