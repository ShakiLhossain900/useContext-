import React,{useState} from 'react';
import Component2 from './Component2'
const Component1 = () => {
    const [user, setUser] =useState({id:101,  name:"Gazi md shakil hossain"})
    return (
        <div>
            <Component2 user={user} />
        </div>
    );
};

export default Component1;