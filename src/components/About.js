import React from 'react'

export default function About(props) {
    return (
       <>
        <div className="container text-center my-20"  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}>
            
            <h1>Thank You For Visiting My Page</h1>
            <p>VAIDEHI PATEL</p>
            <p>5147189378</p>
            <p>vaidehipatel1710@gmail.com</p>
            
        </div>       
       </> 
            
    
    )
}
