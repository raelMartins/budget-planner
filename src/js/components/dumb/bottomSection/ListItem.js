import React from 'react';

const ListItem = props => {
    //created a list item for the UI using the information passed through props
    return(
        <div>
            <div className="item clearfix" id={props.data.id}>
                <div className="item__description">{props.data.description}</div>
                <div className="right clearfix">
                    <div className="item__value">{props.data.value}</div>
                    {props.data.type === "exp" ? <div className="item__percentage">25%</div>: ""}
                    <div className="item__delete">
                        <button className="item__delete--btn" onClick={() => props.handleDelete(props.data.id)}>x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem;