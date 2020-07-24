import React, {Component} from "react";
import PropTypes from "prop-types";
import cn from "classnames";

class Location extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {city, isActive, onTitleClick} = this.props;

    return (
      <li
        className="locations__item"
        onClick={(evt) => {
          onTitleClick(evt.target.textContent);
        }}>
        <a href="#" className={cn(`locations__item-link tabs__item`, {"tabs__item--active": isActive})}>
          <span>{city}</span>
        </a>
      </li>
    );
  }
}

Location.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default Location;
