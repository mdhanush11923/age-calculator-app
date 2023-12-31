import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            display: '0',
            expression: '',
        };
    }

    handleButtonClick = (value) => {
        if (value === '=') {
            try {
                const result = eval(this.state.expression);
                this.setState({ display: result, expression: result });
            } catch (error) {
                this.setState({ display: 'Error', expression: 'Error' });
            }
        } else if (value === 'C') {
            this.setState({ display: '0', expression: '' });
        } else {
            this.setState((prevState) => ({
                display: prevState.expression === '0' ? value : prevState.expression + value,
                expression: prevState.expression + value,
            }));
        }
    };

    render() {
        return (
            <div className="calculator">
                <input type="text" value={this.state.display} readOnly />
                <div className="buttons">
                    <button onClick={() => this.handleButtonClick('7')}>7</button>
                    <button onClick={() => this.handleButtonClick('8')}>8</button>
                    <button onClick={() => this.handleButtonClick('9')}>9</button>
                    <button onClick={() => this.handleButtonClick('/')}>/</button>
                    <button onClick={() => this.handleButtonClick('4')}>4</button>
                    <button onClick={() => this.handleButtonClick('5')}>5</button>
                    <button onClick={() => this.handleButtonClick('6')}>6</button>
                    <button onClick={() => this.handleButtonClick('*')}>*</button>
                    <button onClick={() => this.handleButtonClick('1')}>1</button>
                    <button onClick={() => this.handleButtonClick('2')}>2</button>
                    <button onClick={() => this.handleButtonClick('3')}>3</button>
                    <button onClick={() => this.handleButtonClick('-')}>-</button>
                    <button onClick={() => this.handleButtonClick('0')}>0</button>
                    <button onClick={() => this.handleButtonClick('C')}>C</button>
                    <button onClick={() => this.handleButtonClick('=')}>=</button>
                    <button onClick={() => this.handleButtonClick('+')}>+</button>
                </div>
            </div>
        );
    }
}

export default Calculator;
