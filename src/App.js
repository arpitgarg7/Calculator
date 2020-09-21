import React, {Component} from 'react';
import './App.css';
import Keypad from './Keypad';
import Result from './Result';
class App extends Component {

    constructor(){
        super();
        this.state = {
            result : "",
            expression : "",
            isSqrt : "0",
            isPower : "0"
        }
    }

    onClick = (button) => {

        if( button === "=" ){

              if(this.state.isSqrt === "1" || this.state.isPower === "1")
              {
                  this.setState({
                    esult : this.state.result+ ")",
                    expression : this.state.expression + ")",
                    isSqrt : "0",
                    isPower : "0"
                  } , this.findAnswer)
              }

              else
              {
                this.findAnswer();
              }
        }

        else if( button === "X" ){
            
            if( this.state.result.length <= 1 ){
                this.setState({
                    result : "",
                    expression : ""
                })
            }

            else
            {
                this.setState({
                result : this.state.result.slice(0, -1),
                expression : this.state.expression.slice(0,-1)
                })
            }
        }

        else if( button === ")" )
        {
            if( this.state.isSqrt === "1" )
            {
                this.setState({
                    isSqrt : "0",
                    result : this.state.result + button,
                    expression : this.state.expression + ")"
                })
            }

            else if(this.state.isPower === "1")
            {
                this.setState({
                    isPower : "0",
                    result : this.state.result + button,
                    expression : this.state.expression + ")"
                })
            }

            else
            {
                this.setState({
                    result : this.state.result + button,
                    expression : this.state.expression + button
                })
            }    
        }

        else if ( button === "^" ) {
             this.setState({
                 result : this.state.result + "^(",
                 expression : this.state.expression + "**(",
                 isPower : "1"
             })   
        }

        else if ( button === "sqrt" )
        {
            this.setState({
                isSqrt : "1",
                expression : this.state.expression + "Math.sqrt(",
                result : this.state.result + "√("
            })   
        }

        else if( button === "clear" )
        {
            this.setState({
                result : "",
                expression : ""
            })
        }

        else {
            this.setState({
                result: this.state.result + button,
                expression : this.state.expression + button
            })
        }
    };

    findAnswer = () => {
        try
        {
            console.log(this.state.expression)
            this.setState({
            result : (eval(this.state.expression)) + "",} , this.updateExpression)
        }

        catch(e)
        {
            this.setState({
                result : "error",
                expression : ""
            })
        }
    }

    updateExpression = () => {
        this.setState({expression : this.state.result})
    }

    render(){

        return(
            <div className = "App">
                <br/>
                <br/>
                < Result result = {this.state.result} />
                < Keypad onClick= {this.onClick} />
            </div>
        );

    }
}

export default App;
