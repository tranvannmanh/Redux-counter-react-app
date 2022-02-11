import React, {useState} from 'react';
import { increment, decrement, incrementByAmount,selectCounter } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from './counter.module.css';

export function Counter() {
    const counter = useSelector(selectCounter);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={()=>dispatch(increment())}
                >
                +
                </button>
                <span className={styles.value}>{counter}</span>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={()=>dispatch(decrement())}
                >
                -
                </button>
                <div>
                    <input
                        className={styles.textbox}
                        value={incrementAmount}
                        onChange={(event)=>setIncrementAmount(Number(event.target.value))}
                    />
                    <button
                        className={styles.button}
                        onClick={()=>dispatch(incrementByAmount(Number(incrementAmount)))}
                    >
                     + Amount   
                    </button>
                </div>
            </div>
            {/* <p>Hello</p> */}
        </div>
    )
}