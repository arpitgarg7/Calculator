import React, {Component} from 'react';
import './App.css';

class Keypad extends Component {
    render(){
        return(
            <div>
               <div>
                   <button name = "sqrt" class = "button" style={{backgroundColor : 'red'}} onClick={e => this.props.onClick(e.target.name)}>
                        sqrt
                    </button>

                    <button name = "%" class = "button" style={{backgroundColor : 'red'}} onClick={e => this.props.onClick(e.target.name)}>
                        %
                    </button>

                    <button name="X" class = "button" style={{backgroundColor : 'red'}} onClick={e => this.props.onClick(e.target.name)}>
                        X
                    </button>

                    <button name="/" class = "button" style={{backgroundColor : 'red'}} onClick={e => this.props.onClick(e.target.name)}>
                        /
                    </button> 
                </div>

                <div>
                <button name="7" class = "button" onClick={e => this.props.onClick(e.target.name)}>
                        7
                    </button>

                    <button name="8" class = "button" onClick={e => this.props.onClick(e.target.name)}>
                        8
                    </button>

                    <button name="9" class = "button" onClick={e => this.props.onClick(e.target.name)}>
                        9
                    </button>

                    <button name="*" class = "button" style={{backgroundColor : 'red'}} onClick={e => this.props.onClick(e.target.name)}>
                        *
                    </button> 
                </div>

                <div>
                    <button name="4" class = "button" onClick={e => this.props.onClick(e.target.name)}>
                        4
                    </button>

                    <button name="5" class = "button" onClick={e => this.props.onClick(e.target.name)}>
                        5
                    </button>

                    <button name="6" class = "button" onClick={e => this.props.onClick(e.target.name)}>
                        6
                    </button>

                    <button name="-" class = "button"style={{backgroundColor : 'red'}} onClick={e => this.props.onClick(e.target.name)}>
                        -
                    </button> 
                </div>

                <div>
                <button name="1" class = "button" onClick={e => this.props.onClick(e.target.name)}>
                        1
                    </button>

                    <button name="2" class = "button" onClick={e => this.props.onClick(e.target.name)}>
                        2
                    </button>

                    <button name="3" class = "button" onClick={e => this.props.onClick(e.target.name)}>
                        3
                    </button>

                    <button name="+" class = "button" style={{backgroundColor : 'red'}} onClick={e => this.props.onClick(e.target.name)}>
                        +
                    </button> 
                </div>

                <div>
                <button name="0" style={{width : '100px'}} onClick={e => this.props.onClick(e.target.name)}>
                        0
                    </button>

                    <button name="." class = "button" onClick={e => this.props.onClick(e.target.name)}>
                        .
                    </button>

                    <button name="=" class = "button" style={{backgroundColor : 'red'}} onClick={e => this.props.onClick(e.target.name)}>
                        =
                    </button> 
                </div> 

                    <button name="clear" class = "button" onClick={e => this.props.onClick(e.target.name)}>
                        C
                    </button>
                <button name="(" class="button" onClick={e => this.props.onClick(e.target.name)}>
                        (
                    </button>

                    <button name=")" class = "button" onClick={e => this.props.onClick(e.target.name)}>
                        )
                    </button>
                    
                    <button name="^" class = "button" onClick={e => this.props.onClick(e.target.name)}>
                        ^
                    </button>

                <div>

                </div>
            </div>
        );
    }
}   

export default Keypad;