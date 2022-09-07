import React, { useState } from 'react'
import "./style.css"

const ToDo_Main = () => {
    const [inputdata,setInputdata] = useState('');
  return (
    <>
<div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src='./images/todo.svg' alt='todologo'/>
                    <figcaption>Add your List Here</figcaption>
                </figure>
                <div className='addItems'>
                    <input 
                           type        = 'text' 
                           placeholder = '✍  Add Item' 
                           className   = 'form-control'
                           value={inputdata}
                           onChange={(event)=>setInputdata(event.target.value)}
                           >
                    </input>
                    <i className="fa fa-plus add-btn" 
                    >
                    </i> 
                </div>
                {/* show our items */}

                <div className='showItems'>
                    

                                <div className='eachItem'>
                                    
                                <h3>Apple</h3>
                                <div className='todo-btn'>
                                <i className="far fa-edit add-btn"></i>
                                <i className="far fa-trash-alt add-btn"></i>
                                 
                                </div>
        
                            </div>
                       

                    

  
                </div>
                {/* remove all button */}
                <div className='showItems'>
                    <button className='btn effect04'
                            data-sm-link-text ='Remove All' 
                            >
                        <span>Check List</span>
                                
                    </button>
                </div>
            </div>
        </div>
          
    </>
  );
};

export default ToDo_Main
