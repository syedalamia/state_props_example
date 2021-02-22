import React from 'react';

const Home=(props)=>{
    console.log(props);
   return(

    <div>
        we are inside home
        <p>I am  {props.information}</p>
       

    </div>
   )
}

export default Home;