import React , {Component} from 'react';
import './App.css';

class Result extends Component {
    render(){
        return(
            <div class="result">
                <span style={{color : 'white'}}>{this.props.result}</span>
            </div>
        );
    }
}

export default Result;