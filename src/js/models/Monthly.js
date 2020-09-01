//import the expense and income classe 
import { Expense, Income} from './Budget'

//create a data object
const data = {
    allItems: {
        //create two "range" objects..one for daily and one for monthly then have "exp" and "inc" arrays in both
        exp: [],
        inc: []
    },

    totals: {
        //create two "range" objects..one for daily and one for monthly then have "exp" and "inc" values in both
        exp: 0,
        inc: 0
    },
    budget: 0,
    percentage: -1
};

const calculateTotal = type => {
    let sum = 0;
    data.allItems[type].forEach(el => sum += el.value);
    data.totals[type] = sum;
}

export const addItem = (type, des, val) => {
    let newItem, ID;

    //create a new ID
    if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
    } else {
        ID = 0;
    }

    //Create a new Item based on whether type is 'inc' or 'exp'
    if (type === 'exp') {
        newItem = new Expense(ID, des, val);
    } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
    }

    //Push the item into our data structure
    data.allItems[type].push(newItem);

    //Return the new item
    return newItem;

};

export const deleteItem = (type, id) => {

    const ids = data.allItems[type].map(el => {
        return el.id;
    })

    const index = ids.indexOf(id);

    if (index !== -1) {
        data.allItems[type].splice(index, 1);
    }
};

export const calculateBudget = () => {

    //calc total income and expenses
    calculateTotal('exp');
    calculateTotal('inc');

    //calc budget which is income - expenses
    data.budget = data.totals.inc - data.totals.exp;

    //calc the percentage o income spent
    if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
    } else {
        data.percentage = -1;
    }
};

export const calculatePercentages = () => {
    data.allItems.exp.forEach(el => {
        el.calcPercentage(data.totals.inc);
    });
};

export const getBudget = () => {
    return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
    }
};

export const getPercentages = () => {
    const allPerc = data.allItems.exp.map(el => {
        return el.getPercentage();
    });
    return allPerc;
};
