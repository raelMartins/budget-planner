import React from 'react';

const AddBudget = props => {
    return(
        <div className="add">
            <div className="add__container">
                {/* here i created a form that will receive the state props from it's parent and the handle change function and get input from the user */}
                <form>
                    <select 
                        value={props.data.currentItem.type} 
                        className="add__type" 
                        name="type" 
                        onChange={props.handleChange}
                    >
                        <option value="inc">+</option>
                        <option value="exp">-</option>
                    </select>

                    <input 
                        type="text" 
                        className="add__description"
                        name="description"
                        value={props.data.currentItem.description}
                        placeholder="Add description" 
                        onChange={props.handleChange}
                    />
                    <input 
                        type="number" 
                        className="add__value"
                        name="value"
                        value={props.data.currentItem.value}
                        placeholder="Value"
                        onChange={props.handleChange}
                    />
                    <button className="add__btn" onClick={props.handleClick}>+</button>
                </form>
            </div>
        </div>
    )
}

export default AddBudget;