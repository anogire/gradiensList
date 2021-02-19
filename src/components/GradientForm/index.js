import { connect } from 'react-redux';
import './style.scss';

import { ShowForm } from './ShowForm';
import { addGradient, updateGradient } from '../../store';

const mapStateToProps = (state, ownProps) => ({
  id: (ownProps.match.params.id) ? ownProps.match.params.id : null,
  gradient: (ownProps.match.params.id) ?
    state[ownProps.match.params.id] :
    null
});

const mapDispatchToProps = {
  add: addGradient,
  update: updateGradient,
};


function _GradientForm({ gradient, id, add, update }) {
  return (
    <ShowForm gradient={gradient}
      addValue={(value) => add(value)}
      updateValue={(value) => update(id, value)} />
  )
}

export const GradientForm = connect(mapStateToProps, mapDispatchToProps)(_GradientForm);