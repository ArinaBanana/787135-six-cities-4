const SortType = {
  POPULAR: `popular`,
  LOW_PRICE: `low-price`,
  HIGH_PRICE: `high-price`,
  TOP_RATED: `top-rated`
};

const sort = (items, type = `popular`) => {
  const result = items.slice();

  switch (type) {
    case SortType.LOW_PRICE:
      return result.sort((a, b) => a.price - b.price);
    case SortType.HIGH_PRICE:
      return result.sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return result.sort((a, b) => b.rating - a.rating);
    default:
    case SortType.POPULAR:
      return result;
  }
};

export {sort};
