import { useState } from "react";

const Currency = (props)=> {

    const [currency, setCurrency] = useState('');
    return (
        <div  className='alert alert-secondary '>
        <select className="custom-select bg-success" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
        <option  disabled selected>Currency:</option>
            <option value="$ Dollar" name="Dollar"> $ Dollar</option>
            <option value="£ Pound" name="Pound">£ Pound</option>
            <option value="€ Euro" name="Euro">€ Euro</option>
            <option value="₹ Ruppee" name="Ruppee">₹ Ruppee</option>

        </select>
        </div>
    );
};

export default Currency;