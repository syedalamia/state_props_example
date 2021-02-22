import React from 'react';

const MyComponent=(props)=>{
   
   return(

    <div>
        <p>The name of the page is {props.pageName} and it's clicked</p>
        <p>The contact number is {props.calling}</p>
    
    </div>
   )
}

export default MyComponent;