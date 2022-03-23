//manipulação de arrays, adicionar e remover elementos atraves de class ou prototype methods

function ShoppingList() {
    this.groceries = [];
}

ShoppingList.prototype.addItem = function (item) {
    this.groceries = this.groceries.concat([item])
};

ShoppingList.prototype.removeItem = function (item) {
    this.groceries = this.groceries.filter(function (grocery) {
        return item !== grocery;
    });
};

var mylist = new ShoppingList();

mylist.addItem('Banana')

console.log(mylist.groceries)

class ShoppingList2 {
    groceries: string[];
    constructor() {
        this.groceries = [];
    }
    addItem(item){
        this.groceries = [...this.groceries, item]
    }
    //function sem arrow function
    /*removeItem(item) {
        this.groceries = this.groceries.filter(function (grocery){
            return item !==grocery
        });
    }*/

    //arrow function
    removeItem(item) {
        this.groceries = this.groceries.filter((grocery => item !== grocery));
    }
}

const myNewList = new ShoppingList2();

myNewList.addItem('Pear');
myNewList.addItem('Pizza');

console.log(myNewList.groceries);
