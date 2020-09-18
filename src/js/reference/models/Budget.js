export class Expense {
    constructor(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }

    //create an expense method for calculating the expense percentage
    calcPercentage(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        }
        else {
            this.percentage = -1;
        }
    }

    //create a method for returning the percentage
    getPercentage() {
        return this.percentage;
    }
}

export class Income {
    constructor(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
}
