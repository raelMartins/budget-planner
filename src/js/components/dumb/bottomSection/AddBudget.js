import React, { useContext } from 'react';
import { BudgetContext } from '../../../contexts/BudgetContext';
const AddBudget = (props) => {
  const newClasses = props.data.currentItem.type === 'exp' ? 'red-focus' : '';
  const buttonRed =
    props.data.currentItem.type === 'exp'
      ? {
          color: '#ff5049'
        }
      : {};
  //   'red' : '';

  return (
    <div className="add">
      <div className="add__container">
        {/* here i created a form that will receive the state props from it's parent and the handle change function and get input from the user */}
        <form>
          <select
            value={props.data.currentItem.type}
            className={`add__type ${newClasses}`}
            name="type"
            onChange={
              props.data.completed === true
                ? (event) => {
                    event.preventDefault();
                    alert('Data already submitted');
                  }
                : props.handleChange
            }
          >
            <option value="inc">+</option>
            <option value="exp">-</option>
          </select>

          <input
            type="text"
            className={`add__description ${newClasses}`}
            name="description"
            value={props.data.currentItem.description}
            placeholder="Description"
            onChange={
              props.data.completed === true
                ? (event) => {
                    event.preventDefault();
                    alert('Data already submitted');
                  }
                : props.handleChange
            }
          />
          <input
            type="number"
            min="1"
            step="1"
            className={`add__value ${newClasses}`}
            name="value"
            value={props.data.currentItem.value}
            placeholder="Value"
            onChange={
              props.data.completed === true
                ? (event) => {
                    event.preventDefault();
                    alert('Data already submitted');
                  }
                : props.handleChange
            }
          />
          <button
            className="add__btn"
            style={buttonRed}
            onClick={
              props.data.completed === true
                ? (event) => {
                    event.preventDefault();
                    alert('Data already submitted');
                  }
                : props.handleClick
            }
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBudget;
