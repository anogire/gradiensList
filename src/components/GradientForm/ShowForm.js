import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


export function ShowForm(props) {
  const [firstField, setFirstField] = useState(props.gradient ? props.gradient.firstField : '');
  const [secondField, setSecondField] = useState(props.gradient ? props.gradient.secondField : '');

  const history = useHistory();

  useEffect(
    () => {
      setFirstField(props.gradient ? props.gradient.firstField : '');
      setSecondField(props.gradient ? props.gradient.secondField : '');
    }, [props.gradient]);


  return (
    <section className="GradientForm-section">
      <h2>
        {props.gradient ? 'Редактирование градиента' : 'Добавление нового градиента'}
      </h2>
      <form
        className="GradientForm-form"
        onSubmit={e => {
          clearForm(setFirstField, setSecondField);
          sendData(e, firstField, secondField, props.gradient, props.addValue, props.updateValue, history);
        }}>

        {getHexInput(firstField, setFirstField)}
        {getHexInput(secondField, setSecondField)}

        <div className="buttons-group">
          <button type="submit"
            disabled={!(validateHex(firstField) && validateHex(secondField))}
            className="btn btn-primary mt-3 mr-3 main-button"
            aria-label="передать данные">
            {props.gradient ? 'Сохранить' : 'Добавить'}
          </button>
          <Link to={'/'} className="btn btn-danger mt-3 main-button" aria-label="отменить">
            Отменить
          </Link>
        </div>
      </form>
    </section>
  );
}

function getHexInput(value, setValue) {
  return (
    <label className="form-group main-input">
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        className={"form-control mb-2 " +
          ((value !== '') && !validateHex(value) ? 'not-valid' : null)}
        size="7"
        maxLength="7"
        placeholder="Введите hex-код градиента"
        autoFocus
        required
      />
      <div role="alert"
        className={"alert alert-danger " +
          ((value !== '') && !validateHex(value) ? null : 'not-valid-alert')}>
        Неверный формат
      </div>
    </label>
  )
}

function validateHex(value) {
  const regexp = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return regexp.test(value);
}

function sendData(event, firstField, secondField, isGradient, add, update, history) {
  event.preventDefault();
  const gradient = { firstField: firstField, secondField: secondField };
  if (isGradient) {
    history.push('/');
    return update(gradient)
  }
  else {
    add(gradient);
  }
}

function clearForm(setFirstField, setSecondField) {
  setFirstField('');
  setSecondField('');
}