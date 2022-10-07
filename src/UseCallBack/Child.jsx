import React,{memo} from 'react';

const Child =(counterTwo,func)=>{
  console.log("child component rendered..");
        return(
            <div>
<h1>child</h1>
            </div>
        )
    }


export default memo(Child)