import React, { Component } from "react";
import Section from "./Title.js";
import FeedbackOptions from './Feedback.js';
import Statistic from "./Statistic.js";
import Notification from './Notification.js';

export default class App extends Component {
    static defaultProps = {
      step: 1,
    };
  
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  
    handleIcrement = (e) => {
        e.preventDefault();
      Object.keys(this.state).map((el) => {
        if (el === e.target.name) {
          return this.setState({
            [e.target.name]: this.state[el] + 1,
          });
        }
      });
    };
  
    countTotalFeedbacks = ()=> {
      let total = 0;
      for (let i = 0; i < Object.values(this.state).length; i++) {
        total += Object.values(this.state)[i];
      }

      return total;
    }
  
    countPositiveFeedbackPercentage() {
      let total = 0;
      for (let i = 0; i < Object.values(this.state).length; i++) {
        total += Object.values(this.state)[i];
      }
  
      const percentage = (this.state.good / total) * 100;
      return Math.round(percentage);
    }
    render() {
      const { good, neutral, bad } = this.state;
      return (
          <>
          <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleIcrement}/>
        </Section>
        {this.countTotalFeedbacks() ? <Statistic good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedbacks()}
        positivePercentage={this.countPositiveFeedbackPercentage()} />:
          <Notification message="No feedback given" />}
        </>
      );
    }
  };  
