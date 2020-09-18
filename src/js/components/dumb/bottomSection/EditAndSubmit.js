import React from 'react';

const EditAndSubmit = props => {
    return(
        <div className="edit_and_submit">
            <button className="edit btn">Edit</button>
            <button className="submit btn" onClick={() => props.submitData(props.data)}>Submit</button>
        </div>
    )
}

export default EditAndSubmit;