import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';

const Counter = () => {
    const stockDisponible = 4;
    const stockMinimoDisponible = 1;

    const [counter, setCounter] = useState(0); 

    const handlerIncreaseCount = () => {

        if (stockDisponible > counter) setCounter(counter + 1);
    };
    const handlerDecreaseCount = () => {
        if (counter > stockMinimoDisponible) setCounter(counter - 1);
    };
    
   return(
    <>
        <Badge bg="dark">
            <button onClick={handlerIncreaseCount}>➕</button>
            {counter}
            <button onClick={handlerDecreaseCount}>➖</button>
        </Badge>
    </>
    )
}

export default Counter;