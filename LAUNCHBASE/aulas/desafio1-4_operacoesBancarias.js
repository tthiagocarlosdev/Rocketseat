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
  let objectHigherValue = 0
  
  if(typeTransaction == 'credit'){
    for(let i = 0; i < user.transactions.length; i++){
      if(user.transactions[i].type == 'credit' && higherValue < user.transactions[i].value){
        higherValue = user.transactions[i].value
        objectHigherValue = user.transactions[i]
      }
    }

  } else if(typeTransaction == 'debit'){
    for(let i = 0; i < user.transactions.length; i++){
      if(user.transactions[i].type == 'debit' && higherValue < user.transactions[i].value){
        higherValue = user.transactions[i].value
        objectHigherValue = user.transactions[i]
      }
    }
  }
  
  return objectHigherValue
  
}

function getAverageTransactionValue(){
  let sumTransactions = 0
  let averageTransactions = 0

  for(let i = 0; i < user.transactions.length; i++){
    sumTransactions +=user.transactions[i].value
  }

  averageTransactions = sumTransactions / user.transactions.length

  return averageTransactions

}

function getTransactionsCount(){
  let objectCreditDebit = {
    credit: 0,
    debit: 0,
  }

  for(let i = 0; i < user.transactions.length; i++){
    user.transactions[i].type == 'credit' ? objectCreditDebit.credit++ : objectCreditDebit.debit++
  }

  return objectCreditDebit

}


createTransaction('credit', 50)
createTransaction('credit', 120)
createTransaction('debit', 80)
createTransaction('debit', 30)

console.log(user)
console.table(user.transactions)
console.log(`Balance: ${user.balance.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log("Higher Transactions:")
console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))
console.log(`Average Transactions: ${getAverageTransactionValue()}`)
console.log(`Total Transactions: ${user.transactions.length}`)
console.log(getTransactionsCount())