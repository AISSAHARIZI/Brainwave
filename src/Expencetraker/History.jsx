import React, { useContext } from 'react';
import { GlobalContext } from './ExpContext';

function History() {
  const { hidden, show, array ,delet} = useContext(GlobalContext);

  return (
    <div className='mt-[5rem]'>
      <h2 className='border-b-1 border-b-gray-500 border-b-solid'>History</h2>
      <div className='w-full mt-6'>
        {array.map((trans, index) => (
          <div onClick={()=> show(index)}>
          <div
            key={index}
            className={`relative ${trans.amount > 0 ? 'border-r-5 border-green-500' : 'border-r-5 border-red-500'} mt-3.5`}
            onMouseEnter={() => show(index)}
            onMouseLeave={() => hidden(index)}
          >
            <div onClick={()=>delet(index)}
             className={`  absolute -left-8 bottom-2 text-[1.7rem] ${trans.show ? 'flex' : 'hidden'}`}>
              <i 
               className={`fa-solid fa-rectangle-xmark`}></i>
            </div>
            
            <div className='flex items-center justify-between w-full h-11 border-1 border-gray-400 border-solid text-lg px-3'>
              <p>{trans.text}</p>
              <span>${trans.amount}</span>
            </div>
          </div>
          </div>  
        ))}
      </div>
    </div>
  );
}

export default History;
