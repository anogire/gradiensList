import { Link } from 'react-router-dom';

export function ShowItem({ gradient, id, remove }) {
  return (
    <>
      <Link
        to={`/edit/${id}`}
        className="GradientsList-link"
        style={{ background: `linear-gradient(to right, ${gradient.firstField}, ${gradient.secondField})` }}
        aria-label="редактировать градиент">
        <span>{gradient.firstField}</span>
        <span>{gradient.secondField}</span>
      </Link>
      <button
        type="button"
        onClick={() => remove(id)}
        className="GradientsList-remove-btn" aria-label="удалить градиент">
        X
      </button>
    </>
  )
}