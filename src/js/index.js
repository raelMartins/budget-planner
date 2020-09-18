
import '../css/bootstrap.min.css';
import '../css/style.css';
import * as budgetctrl from './models/BudgetCtrl';
import * as UIctrl from './views/view';
import { DOMstrings } from "./views/base";

//set up the projects event listeners
const setupEventListeners = () => {

    //Event listener for adding an item
    document.querySelector(DOMstrings.inputBtn).addEventListener('click', ctrlAddItem)

    //Event listener for adding an item by selecting enter
    document.addEventListener('keypress', e => {
        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }
    })
    //Event listener for deleting an item(using event delegation)
    document.querySelector(DOMstrings.container).addEventListener('click', ctrlDeleteItem);

    //Event listener for changing type from income to expense and vice versa
    document.querySelector(DOMstrings.inputType).addEventListener('change', UIctrl.changedType);

    //Add event listener for changing the current page
    document.querySelector('.goto-page').addEventListener('click', el => {
        console.log('A page button was clicked');
    })
};

//Function to update the budget
const updateBudget = () => {
    //calculate Budget
    budgetctrl.calculateBudget();
    //return the budget
    const budget = budgetctrl.getBudget();
    //display budget on UI
    UIctrl.displayBudget(budget);
};

//function to calculate the percentages
const updatePercentages = () => {
    //calculate percentages
    budgetctrl.calculatePercentages();
    //read them from budget ctrl
    const percentages = budgetctrl.getPercentages();
    //update the UI with the new percentages
    UIctrl.displayPercentages(percentages);
};

//function to add an item to the Ui
const ctrlAddItem = () => {
    //Get input data
    const input = UIctrl.getInput();

    //Check if the description box isn't empty and that the value is not a number and is greater than 0
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
        //Add item to budget controller
        const newItem = budgetctrl.addItem(input.type, input.description, input.value);
        //add item to UI
        UIctrl.addListItem(newItem, input.type);
        //Clear fields
        UIctrl.clearFields();
        //calculate and update the Budget
        updateBudget();
        //calculate and update the percentages
        updatePercentages();
    }
};

const ctrlDeleteItem = event => {
    //get the id of the item being selected
    const itemID = event.target.parentNode.parentNode.parentNode.id;

    //if the item has an id
    if (itemID) {
        //separate the item string (ie 'inc' or 'exp') from the value ie 1, 2, 3 ... etc
        const splitID = itemID.split('-');
        //set the item type to the string value
        const type = splitID[0];
        //set the id to the integer part
        const ID = parseInt(splitID[1]);

        //delete item from data structure
        budgetctrl.deleteItem(type, ID);
        //delete item from ui
        UIctrl.deleteListItem(itemID);
        //update and show the new budget
        updateBudget();
        //calculate and update the percentages
        updatePercentages();
    }
}

//This is the initial value of the entire thing... when i'm done adding local storage there will be a "Reset" button in the stats page that calls it
const init = () => {
    console.log('Application has started afresh');
    UIctrl.displayMonth();
    UIctrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
    });
    setupEventListeners();
}

init();
//DAILY CONTROLLER

//MONTHLY CONTROLLER

//STATS CONTROLLER