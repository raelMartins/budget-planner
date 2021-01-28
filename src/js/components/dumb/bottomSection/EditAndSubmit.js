import React from 'react';

const EditAndSubmit = (props) => {
  return (
    <div className="edit_and_submit">
      <button className="edit" onClick={props.editBudget}>
        Edit
      </button>
      <button
        className="submit"
        onClick={
          props.data.completed
            ? (event) => {
                event.preventDefault;
                alert('Already saved');
              }
            : props.completeBudget
        }
      >
        Save
      </button>
    </div>
  );
};

export default EditAndSubmit;
