import  React from 'react';
import {add, sub, multi, division} from './Calculation'


function App(){
    return(
        <>
    <ul>
        <li>The Sum of two number is: {add(40, 4)}</li>
        <li>The Difference of two number is:{sub(40, 10)}</li>
        <li>The Multiplication of two number is:{multi(2, 9)}</li>
        <li>The Division of two number is:{division(30, 221)}</li>
    </ul>
        </>
    )
}

export default App;