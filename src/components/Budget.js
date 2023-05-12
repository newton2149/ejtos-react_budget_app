
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);

    const [budg, setBudg] = useState(budget)

    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    useEffect(() => {
        if (budg > 20000) {
            return alert("Budget Can Not be More Than 20000")
        }
        else if(budg < totalExpenses){
            return alert("Budget Can Not be less than total expenses")
        }
    }, [budg])
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                required='required'
                type='number'
                id='cost'
                value={budg}
                step={10}
                style={{ marginLeft: '2rem', size: 10 }}
                onChange={(event) => {
                    setBudg(event.target.value)
                    budget = budg
                }}>
            </input>

        </div>
    );
};
export default Budget;