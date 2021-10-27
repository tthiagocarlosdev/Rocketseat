const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(type, value){
  let sizeTransactions = user.transactions.length
  if(type == 'credit'){
    user.transactions.push({type: type, value: value})
    user.balance += (user.transactions[sizeTransactions].value)
  } else if(type == 'debit'){
    user.transactions.push({type: type, value: value})
    user.balance -= (user.transactions[sizeTransactions].value)
  }
}

function getHigherTransactionByType(typeTransaction){
  let higherValue = 0
  
  if(typeTransaction == 'credit'){
    for(let i = 0; i < user.transactions.length; i++){
      if(user.transactions[i].type == 'credit' && higherValue < user.transactions[i].value){
        higherValue = user.transactions[i]
      }
    }

  } else if(typeTransaction == 'debit'){
    for(let i = 0; i < user.transactions.length; i++){
      if(user.transactions[i].type == 'debit' && higherValue < user.transactions[i].value){
        higherValue = user.transactions[i]
      }
    }
  }
  
  return higherValue
  
}

createTransaction('credit', 100)
createTransaction('debit', 10)
createTransaction('debit', 50)
createTransaction('credit', 150)
createTransaction('credit', 50)
createTransaction('debit', 30)


//console.log(user)
console.table(user.transactions)
console.log(`Balance: ${user.balance.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(`Transactions: ${user.transactions.length}`)
console.log("Higher Transactions:")
console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))