import { GRADIENT_ADD, GRADIENT_UPDATE, GRADIENT_DELETE } from './actions';

const defaultState = [
  {
    firstField: '#a85caa',
    secondField: '#8cb8e9'
  },
  {
    firstField: '#d68d3a',
    secondField: '#bb44a2'
  }
];

export function reducer(state = defaultState, action) {
  let list = [...state];

  switch (action.type) {
    case GRADIENT_ADD:
      list.push(action.gradient);
      return list;

    case GRADIENT_UPDATE:
      list[action.id] = action.gradient;
      return list;

    case GRADIENT_DELETE:
      list.splice(action.id, 1);
      return list;

    default:
      return state;
  }
}