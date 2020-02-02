'use strict';

 
let	appData = {},
	expensesi = {},
	expenses1,
	expenses2;

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

expenses1 = prompt("Введите обязательную статью расходов в этом месяце");
expenses2 = prompt("Во сколько обойдется?");
expensesi[expenses1] = expenses2;

appData = {
	moneySum: money,
	timeData: time,
	expenses: {[expenses1] : expenses2},
	optionalExpenses: "",
	income: [],
	savings: false
};

console.log(appData);

alert(money/30);

	
