import React from 'react';
//created a stateless componenet for the AddBudget section
const AddBudget = props => {
    //created variables to store class names to style the inputs depending on the value of the current item
    const newClasses = props.data.currentItem.type === "exp" ? "red-focus" : "";
    const buttonRed = props.data.currentItem.type === "exp" ? "red" : "";
    return(
        <div className="add">
            <div className="add__container">
                {/* here i created a form that will receive the state props from it's parent and the handle change function and get input from the user */}
                <form>
                    <select 
                        value={props.data.currentItem.type} 
                        className={`add__type ${newClasses}` } 
                        name="type" 
                        onChange={props.handleChange}
                    >
                        <option value="inc">+</option>
                        <option value="exp">-</option>
                    </select>

                    <input 
                        type="text" 
                        className={`add__description ${newClasses}`}
                        name="description"
                        value={props.data.currentItem.description}
                        placeholder="Add description" 
                        onChange={props.data.completed === true ? (event) => {event.preventDefault(); console.log("Data already submitted")}: props.handleChange}
                    />
                    <input 
                        type="number" 
                        min="1" 
                        step="1"
                        className={`add__value ${newClasses}`}
                        name="value"
                        value={props.data.currentItem.value}
                        placeholder="Value"
                        onChange={props.data.completed === true ? (event) => {event.preventDefault(); console.log("Data already submitted")}: props.handleChange}
                    />
                    <button 
                        className={`add__btn ${buttonRed}`} 
                        onClick={props.data.completed === true ? (event) => {event.preventDefault(); console.log("Data already submitted")}: props.handleClick}
                    >+</button>
                </form>
            </div>
        </div>
    )
}

export default AddBudget;