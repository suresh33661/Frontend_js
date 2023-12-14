"use strict"

const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300,900,-200],
    interestRate: 1.2,
    pin: 1111,
    movementsDates: ['2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
    '2020-08-01T10:51:36.790Z'],
    currency: 'EUR',
    locale: 'pt-PT',

};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, 3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: ['2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
    '2020-08-01T10:51:36.790Z'],
    currency: 'USD',
    locale: 'en-US',

};

const account3 = {
    owner: "Steve Thomas Williams",
    movements: [200, -200, 350, -200, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    movementsDates: ['2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
    '2020-08-01T10:51:36.790Z'],
    currency: 'EUR',
    locale: 'pt-PT',

};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 200, 98],
    interestRate: 1,
    pin: 4444,
    movementsDates: ['2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
    '2020-08-01T10:51:36.790Z'],
    currency: 'USD',
    locale: 'en-US',

};


const accounts = [account1, account2, account3, account4]


const labelWelcome = document.querySelector('.welcome');
const labeDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance_value');
const labelSumIn = document.querySelector('.summary_value--in');
const labeSumOUt = document.querySelector('.summary_value--out');
const labelSumInterest = document.querySelector('.summary_value--interest');
const valid = document.querySelector('.valid_credentials');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login_btn');

const btnTransfer = document.querySelector('.money-transfer_btn');
const btnLoan = document.querySelector('.loan_btn');
const btnClose = document.querySelector('.close-account_btn');
const btnSort = document.querySelector('.sort_btn');

const inputLoginUsername = document.querySelector('.login_input--user');
const inputLoginPin = document.querySelector('.login_input--pin');

const inputTransferTo = document.querySelector('.money-transfer_input--to');
const inputTransferAmount = document.querySelector('.money-transfer_input--amount');

const inputLoanAmount = document.querySelector('.loan_input--amount');
const inputCloseUsername = document.querySelector('.close-account_input--user');
const inputClosePin = document.querySelector('.close-account_input--pin');

const balanceValue = document.querySelector('.balance_value_span');
const movementsValue1 = document.querySelector('.movements_value1_span');
const movementsValue2 = document.querySelector('.movements_value2_span');


const displayMovements = function (acc) {
    containerMovements.innerHTML = '';
    acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2,0);
    const month = `${date.getMonth() + 1}`.padStart(2,0);
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();
    const displayDate = `${day}/${month}/${year} , ${hour}:${min}`

    const html = `
    <div class="movements_row">
        <div class="movements_type movements_type--${type}">${i+1} ${type}</div>
        <div class="movements_date">${displayDate}</div>
        <div class="movements_value ">${mov}€</div>`

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });

}





const createUsernames = function (account){
account.forEach(function(acc){
    acc.user = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
})
}
createUsernames(accounts);
console.log(accounts)


const {movements} = account1
const deposits = movements.filter(mov => mov > 0)
console.log(deposits)


// * Balance  //

const calPrintBalance = function(acc){
    acc.balance = acc.movements.reduce((acc1, mov) => acc1 + mov, 0);
    labelBalance.textContent = `${acc.balance}€`
   

}





// * IN , Out and Interest values




const calDisplaySummary = function(movements){
    const incomes = movements.filter(mov => mov > 0).reduce((acc , mov) => acc + mov, 0)
    labelSumIn.textContent = `${incomes}€`
}



const calDisplaySummaryOut = function(movements){
    const Out = movements.filter(mov => mov < 0).reduce((acc,cur) => acc + cur,0);
    labeSumOUt.textContent = `${Math.abs(Out)}€`
    
}
calDisplaySummaryOut(movements)






// * End of IN , Out and Interest //

// * Implemeting Login //

let currentAccount;

// Fake Always Logged in


// Date
const now = new Date();
const day = `${now.getDate()}`.padStart(2,0);
const month = `${now.getMonth() + 1}`.padStart(2,0);
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();
labeDate.textContent = `${day}/${month}/${year} , ${hour}:${min}`

btnLogin.addEventListener('click',function(event){
   event.preventDefault();
 currentAccount =  accounts.find(acc => acc.user === inputLoginUsername.value);
//console.log(currentAccount)

if(currentAccount?.pin === Number(inputLoginPin.value)){
    // Display UI and Message
    labelWelcome.textContent = `Welcome back ! ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;
    valid.style.opacity = 0;

    // Clear Input fields
    inputLoginUsername.value = inputLoginPin.value = '';


    // Display Movements
    displayMovements(currentAccount)

    // Display Balance
    calPrintBalance(currentAccount)

    // Display Summary

    calDisplaySummary(currentAccount.movements)
    calDisplaySummaryOut(currentAccount.movements)


    const interest = function(movements){
        const int = movements.filter(mov => mov > 0).map(deposit => deposit * currentAccount.interestRate/100).filter(mov => mov > 1).reduce((acc,curr ) => acc + curr,0);
        labelSumInterest.textContent = `${int.toFixed(1)}€`
    }
    interest(currentAccount.movements)
}
else {
    containerApp.style.opacity = 0;
    valid.style.opacity = 1;
    inputLoginUsername.value = inputLoginPin.value = '';
    
}

});


// Money Transfer

btnTransfer.addEventListener('click',function(event){
    event .preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.user === inputTransferTo.value);
   console.log(amount,receiverAcc)
   if (amount > 0 && receiverAcc &&  currentAccount.balance >= amount && receiverAcc.user !== currentAccount.user && receiverAcc){
       currentAccount.movements.push(-amount);
       receiverAcc.movements.push(amount);
       displayMovements(currentAccount)
       calPrintBalance(currentAccount)
       calDisplaySummary(currentAccount.movements)
       calDisplaySummaryOut(currentAccount.movements)
       inputTransferAmount.value = inputTransferTo.value = '';
   }
});

// * Loan //
btnLoan.addEventListener('click',function(event){
    event.preventDefault();
    const loan_amount = Number(inputLoanAmount.value);
    if (loan_amount > 0 && currentAccount.movements.some(mov => mov >= loan_amount * 0.1)){
        currentAccount.movements.push(loan_amount);
        displayMovements(currentAccount)
        calPrintBalance(currentAccount)
        calDisplaySummary(currentAccount.movements)
        calDisplaySummaryOut(currentAccount.movements)
        inputLoanAmount.value = '';
    }
})


btnClose.addEventListener('click',function(event){
    event.preventDefault();

    if(inputCloseUsername.value === currentAccount.user && Number(inputClosePin.value) === currentAccount.pin){
        const index = accounts.findIndex(acc => acc.user === currentAccount.user);
        console.log(index)
        console.log(accounts.splice(index,1));
        containerApp.style.opacity = 0;
        inputCloseUsername.value = inputClosePin.value = '';

        
    }
});


btnSort.addEventListener('click',function(event){
    event.preventDefault();
    displayMovements(currentAccount.movements.sort((a,b) => a - b))
})




