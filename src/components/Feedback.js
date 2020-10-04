import React from "react";

const FeedbackOptions = ({options, onLeaveFeedback}) =>{
    return(
        <div>
            {Object.keys(options).map(el =>(
                <button key={el} type="button" name={el} onClick={onLeaveFeedback}>
                    {el}
                </button>
            ))}
        </div> 
    )
};

export default FeedbackOptions;