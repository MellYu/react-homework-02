import React from "react";

const Statistic = ({good, neutral, bad, total, positivePercentage}) =>{
    return(
        <>
       <h3>Statistics</h3>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>
              Posititve feedbacks: {positivePercentage}%
            </li>
          </ul>
          </>
    )
};


export default Statistic;