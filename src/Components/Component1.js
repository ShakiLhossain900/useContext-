import React,{useState} from 'react';
import Component2 from './Component2'
import {UserContext} from './UserContext'
const Component1 = () => {
    const name = 'Hi this is noushin'
  
    const [user, setUser] =useState({id:101,  name:"Gazi md shakil hossain"})
    const [text, setText] = useState('Hi this is noushin')
    return (
        <UserContext.Provider value={{user, text}} >
            <Component2  />
        </UserContext.Provider>
    );
};

export default Component1;