// Code Keypad Component Here
import React from 'react';
import { useState } from 'react';

export default function Keypad (){
    const [pass, setPass] = useState("");

    const handleChange = (event)=>{setPass(event.target.value); console.log("Entering password...")};
    
    return (
        <div>
            <input type="password" value={pass} onChange={handleChange} />
        </div>
    );
}