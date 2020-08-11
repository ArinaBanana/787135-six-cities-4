import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {sort} from "../../utils/sort";

const withCurrentSortType = (Component) => {
  class WithCurrentSortType extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        type: `popular`
      };

      this.setSortType = this.setSortType.bind(this);
      this.getSortedPlaces = this.getSortedPlaces.bind(this);
    }

    setSortType(sortType) {
      const {type} = this.state;

      if (type === sortType) {
        return;
      }

      this.setState({
        type: sortType
      });
    }

    getSortedPlaces() {
      const {type} = this.state;
      const {places} = this.props;
      return sort(places, type);
    }

    render() {
      const {type} = this.state;

      return (
        <Component
          {...this.props}
          sortType={type}
          changeSortType={this.setSortType}
          places={this.getSortedPlaces()}
        />
      );
    }
  }

  WithCurrentSortType.propTypes = {
    places: PropTypes.array.isRequired
  };

  return WithCurrentSortType;
};

export default withCurrentSortType;
