import React from "react";
import PropTypes from "prop-types";

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

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions;