import { connect } from 'react-redux';
import './style.scss';

import { ShowItem } from './ShowItem';
import { deleteGradient } from '../../store';


const mapStateToProps = (state) => ({
  list: state,
});

const mapDispatchToProps = {
  remove: deleteGradient,
};

function _GradientsList({ list, remove }) {
  return (
    <section className="GradientsList-section">
      <h2>
        {(list.length === 0) ? 'Список пуст' : 'Список градиентов'}
      </h2>
      {(list.length !== 0) ?
        <ul className="GradientsList-list">
          {list.map((gradient, index) =>
            <li key={index} className="GradientsList-item">
              <ShowItem gradient={gradient} id={index} remove={remove} />
            </li>
          )}
        </ul>
        : null
      }
    </section>
  )
}

export const GradientsList = connect(mapStateToProps, mapDispatchToProps)(_GradientsList);