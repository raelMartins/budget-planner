//UI CONTROLLER
import { DOMstrings } from "./base";

const nodeListForEach = (list, callback) => {
    for (let i = 0; i < list.length; i++) {
        callback(list[i], i);
    }

};

export const getInput = () => {
    return {
        type: document.querySelector(DOMstrings.inputType).value, //either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
    };
};

export const addListItem = (obj, type) => {
    let html, newHtml, element;

    //Create Html string with placeholder text
    // const markup =`
    //     <div class="item clearfix" id="${type}-0">
    //         <div class="item__description">${obj.description}</div>
    //         <div class="right clearfix">
    //             <div class="item__value">${formatNumber(obj.value, type)}</div>
    //             <div class="item__delete">
    //                 <button class="item__delete--btn"><i class="ion-ios-close-outline">
    //                 </i></button>
    //             </div>
    //         </div>
    //     </div>
    // `;

    if (type === 'inc') {

        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn">x</button></div></div></div>';
    }
    else if (type === 'exp') {

        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">25%</div><div class="item__delete"><button class="item__delete--btn">x</button></div></div></div>';
    }

    //Replace Placeholder text with actual data

    newHtml = html.replace('%id%', obj.id);
    newHtml = newHtml.replace('%description%', obj.description);
    newHtml = newHtml.replace('%value%', `${obj.value >= 0? '+' : ''} ${obj.value.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);

    //Insert the HTML into the DOM
    document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
};

export const deleteListItem = selectorID => {

    const el = document.getElementById(selectorID);
    el.parentNode.removeChild(el);

};

export const clearFields = () => {

    const fields = document.querySelectorAll(`${DOMstrings.inputDescription}, ${DOMstrings.inputValue}`);

    const fieldsArr = Array.from(fields);

    fieldsArr.forEach(el => el.value = "");

    fieldsArr[0].focus();

};

export const displayBudget = obj => {
    let type;

    obj.budget > 0 ? type = 'inc' : type = 'exp';

    document.querySelector(DOMstrings.budgetLabel).textContent = `${obj.budget >= 0? '+' : ''} ${obj.budget.toLocaleString("en-US", { style: "currency", currency: "USD" })}`;
    document.querySelector(DOMstrings.incomeLabel).textContent = `+ ${obj.totalInc.toLocaleString("en-US", { style: "currency", currency: "USD" })}`;
    document.querySelector(DOMstrings.expenseLabel).textContent = `- ${obj.totalExp.toLocaleString("en-US", { style: "currency", currency: "USD" })}`;

    if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = `${obj.percentage}%`;
    } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '--';
    }
};

export const displayPercentages = percentages => {

    const fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

    nodeListForEach(fields, (cur, i) => {

        if (percentages[i] > 0) {
            cur.textContent = `${percentages[i]}%`;
        } else {
            cur.textContent = '--';
        }

    });

};

export const displayMonth = function () {

    const now = new Date();

    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const month = now.getMonth();

    const year = now.getFullYear();
    document.querySelector(DOMstrings.dateLabel).textContent = `${monthArr[month]} ${year}`;
};

export const changedType = () => {

    const fields = document.querySelectorAll(`${DOMstrings.inputType},${DOMstrings.inputDescription},${DOMstrings.inputValue}`
    );

    nodeListForEach(fields, cur => {
        cur.classList.toggle('red-focus');
    });

    document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
};


