import React, { createContext, useState } from 'react';
import { dummyTransactions } from './indexEXP';


export const GlobalContext = createContext();

function Context({ children }) {
  // إضافة خاصية 'show' لكل عنصر
  
  let [array, setArray] = useState(dummyTransactions.map(trans => ({
    ...trans,
    show: false,  // إضافة show بقيمة false مبدئيًا
  })));
  let [newTran,setTrans]=useState('') 
  let [newAmount,setAmount]=useState(Number)

  let total=array.reduce((acc,trans)=> acc+(isNaN(trans.amount)? 0 : trans.amount) ,0)

  let Expence=array.reduce((acc,trans)=> trans.amount <0 ? acc+ (isNaN(trans.amount)? 0 : trans.amount ):acc,0 )
  
  let Balance=array.reduce((acc,trans)=> trans.amount>0 ? acc+(isNaN(trans.amount)?0:trans.amount):acc,0)

  function delet(index){
    setArray(prev=> prev.filter((_,i)=> i!==index )
    )
  }

  function show(index) {
    setArray(prev => prev.map((pr, i) => i === index ? { ...pr, show: true } : pr));
  }

  function hidden(index) {
    setArray(prev => prev.map((pr, i) => i === index ? { ...pr, show: false } : pr));
  }

  function add (index){
    setArray(prev=> [...prev,{ id: index, text: newTran, amount:(isNaN(newAmount)?newAmount + '   IS NOT A NUMBER':Number(newAmount)) ,show:false }])
  }
  return (
    <GlobalContext.Provider value={{ array, setArray,setAmount,newAmount,add, show,newTran,setTrans, hidden,delet ,total,Expence,Balance}}>
      {children}
    </GlobalContext.Provider>
  );
}

export default Context;
