import * as actions from '../actions/roadmap';

export function features(state = [], action) {
  switch (action.type) {
  case actions.LIKE_FEATURE:
    return state.map((feature, index) => {
      if (index === action.index) {
        return { ...feature, likes: feature.likes + 1 };
      }
      return feature;
    });
  case actions.ADD_FEATURE:
    return [...state, { title: action.title, category: action.category, likes: 0 }];
  default:
    return state;
  }
}

export function categoryFilter(state = actions.CategoryFilters.SHOW_ALL, action) {
  switch (action.type) {
  case actions.SET_CATEGORY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

export function searchText(state = '', action) {
  switch (action.type) {
  case actions.SEARCH_TEXT:
    return action.text;
  default:
    return state;
  }
}
