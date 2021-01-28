import React from 'react';

const ListItem = (props) => {
  return (
    <div className="item" id={props.data.id}>
      <div className="item__description">{props.data.description}</div>
      <div className="right_items">
        <div className="item__value">
          {parseFloat(props.data.value).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })}
        </div>
        {props.data.type === 'exp' ? (
          <div className="item__percentage">
            {props.totalIncome > 0
              ? Math.round(
                  (parseInt(props.data.value) / props.totalIncome) * 100
                )
              : '---'}
          </div>
        ) : (
          ''
        )}
        <div className="item__delete">
          <button
            className="item__delete--btn"
            onClick={
              props.completed
                ? (event) => {
                    event.preventDefault;
                    alert('List already submitted');
                  }
                : () => props.handleDelete(props.data.id)
            }
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
