// import React,{useState} from 'react';
// import Component2 from './Component2'
// import {UserContext} from './UserContext'
// const Component1 = () => {
   
  
//     const [user, setUser] =useState({id:101,  name:"Gazi md shakil hossain"})
//     const [text, setText] = useState('Hi this is noushin')
//     return (
//         <UserContext.Provider value={{user, text}} >
//             <Component2  />
//         </UserContext.Provider>
//     );
// };

// export default Component1;




import React,{useState} from 'react';
import {UserContext} from './UserContext'
import Component2 from './Component2'

const Component1 = () => {
    const [user,setUser] = useState({id:1212, name: 'shakil hossain'});
    const [text, setText] = useState('this is gazi md shakil hossain from USA')
    return (
        <UserContext.Provider value={{user,text}}>
            <Component2/>
        </UserContext.Provider>
    );
};

export default Component1;