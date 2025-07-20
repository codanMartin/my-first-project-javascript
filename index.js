const input = require('sync-input');

/**
 * Default product list for the shop.
 * @type {Array<{ name: string, price: number, earnings: number}>}
 */
const defaultProducts = [
    {name: "Bubblegum", price: 2, earnings: 202},
    {name: "Toffee", price: 0.2, earnings: 118},
    {name: "Ice cream", price: 5, earnings: 2250},
    {name: "Milk chocolate", price: 4, earnings: 1680},
    {name: "Doughnut", price: 2.5, earnings: 1075},
    {name: "Pancake", price: 3.2, earnings: 80}
];

/**
 * Represents a corner shop with a list of products and simple methods.
 */
class CornerShop {
    /**
     * Creates a new instance of CornerShop.
     * @param {Array<{ name: string, price: number, earnings: number}>} products
     */
    constructor(products = []) {
        this.products = products;
        this.staffExpenses = 0
        this.otherExpenses = 0
        this.netIncome = 0
        this.earnings = products.reduce((acc, cur) => {
            return acc + cur.earnings
        }, 0);
    }

    /**
     * Prints the name and price of each product.
     * @returns {void}
     */
    printPrices() {
        console.log("Prices:");
        this.products.forEach(product => {
            console.log(`${product.name}: $${product.price}`);
        });
    }

    /**
     * Prints the name and earnings of each product and the total income.
     * @returns {void}
     */
    printEarnings() {
        console.log("Earned amount:");
        this.products.forEach(product => {
            console.log(`${product.name}: $${product.earnings}`);
        })

        console.log(`\nIncome: $${this.earnings}`)
    }

    /**
     * Prints the name and earnings of each product and the total income.
     * @returns {void}
     */
    printNetIncome() {
        console.log(`Net income: $${this.netIncome}`);
    }

    /**
     * Recalculates the net income of the shop
     * @returns {void}
     */
    updateNetIncome() {
        this.netIncome = this.earnings - this.staffExpenses - this.otherExpenses
    }

    /**
     * Prompts the user to input inside the terminal staff expenses.
     * @returns {void}
     */
    gatherStaffExpenses() {
        this.staffExpenses = Number(input("Staff expenses: "))
    }

    /**
     * Prompts the user to input inside the terminal other expenses.
     * @returns {void}
     */
    gatherOtherExpenses() {
        this.otherExpenses = Number(input("Other expenses: "))
    }


}

const myCornerShop = new CornerShop(defaultProducts);

// myCornerShop.printPrices();
myCornerShop.printEarnings();
myCornerShop.gatherStaffExpenses();
myCornerShop.gatherOtherExpenses();
myCornerShop.updateNetIncome();
myCornerShop.printNetIncome();