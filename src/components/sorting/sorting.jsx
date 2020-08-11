import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Sorting extends PureComponent {
  constructor(props) {
    super(props);

    this.handleOpenPopup = this.handleOpenPopup.bind(this);
    this.handleChangeSortType = this.handleChangeSortType.bind(this);
  }

  handleOpenPopup() {
    const {onClick, isHidden} = this.props;

    if (isHidden) {
      onClick(false);
    } else {
      onClick(true);
    }
  }

  handleChangeSortType(evt) {
    const {onChangeSortType} = this.props;
    onChangeSortType(evt.target.id);
  }

  render() {
    let {isHidden} = this.props;
    return (
      <form className="places__sorting" action="" method="">
        <span className="places__sorting-caption">Sort by</span>
        <span onClick={this.handleOpenPopup} className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        {
          isHidden ? `` : <ul onClick={this.handleChangeSortType} className="places__options places__options--custom places__options--opened">
            <li id={`popular`} className="places__option places__option--active" tabIndex="0">Popular</li>
            <li id={`low-price`} className="places__option" tabIndex="0">Price: low to high</li>
            <li id={`high-price`} className="places__option" tabIndex="0">Price: high to low</li>
            <li id={`top-rated`} className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        }
      </form>
    );
  }
}

Sorting.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onChangeSortType: PropTypes.func.isRequired
};

export default Sorting;
