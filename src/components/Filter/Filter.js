import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as phonebookActions from 'redux/phonebook-actions';
import { getFilter } from 'redux/phonebook-selectors';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onChange = event =>
    dispatch(phonebookActions.changeFilter(event.target.value));

  return (
    <div>
      <p className={s.filter}>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
