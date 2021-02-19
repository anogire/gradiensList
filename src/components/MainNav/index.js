import { NavLink } from 'react-router-dom';
import './style.scss';

export function MainNav() {
  return (
    <section className="MainNav-section">
      <nav className="MainNav-nav">
        <NavLink to="/" exact className="btn outline-primary nav-link" activeClassName="btn-primary" aria-label="показать список градиентов">
          Градиенты
        </NavLink>
        <NavLink to="/new" className="btn outline-primary nav-link" activeClassName="btn-primary" aria-label="добавить новый градиент">
          Добавить
        </NavLink>
      </nav>
    </section>
  )
}