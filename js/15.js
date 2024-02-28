const account = {
    balance: 1000,
    transactions: [],
    addTransaction(amount, type) {
      this.transactions.push({ amount, type });
    },
    getBalance() {
    //   return this.balance;
    },
    getTransactionHistory() {
    //   return this.transactions; 
  
    //я не розумію чому воно не повертає мені  this.transactions, 
    //але якщо закоментувати
    //то все працює просто замість відповіді undefined
    }
  };
  account.addTransaction(500, 'deposit');
  account.addTransaction(200, 'withdraw');
  account.addTransaction(300, 'deposit');
  const { getBalance, getTransactionHistory } = account;
  
  console.log('Поточний баланс:', getBalance()); // 1100
  console.log('Історія транзакцій:', getTransactionHistory());
  
  