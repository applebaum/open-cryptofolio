import React, {Component} from "react";
import { ListGroupItem, ListGroup, FormGroup, FormControl, Form, Button, Jumbotron } from 'react-bootstrap';

/* This component renders input form for user to enter information on coins he/she'd like to track,
*  passes data through handling functions (add and remove), maps through it and creates list displayed to user */

// this class handles form for user data input
class CoinForm extends Component {

    constructor(props) {
        //it receives coin handling functions as props from CoinInputApp
        super(props);
    }

    render () {
        // create variable for storing data capturing one entry submitted by user
    let input;
    return (
        // form rendering JSX
            <form
                // this function takes user input data and runs it through handling function,
                // and then clears input window (and entered value itself) on submit
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.addCoin(input.value);
                    input.value = '';
                }}>

                <FormGroup>
                    <FormControl
                        bsSize="lg"
                        type="text"
                        placeholder="Enter text"
                        //create ref for user input data and assign it to 'input' variable
                        inputRef={ref => {
                            input = ref;
                        }}
                    />
                </FormGroup>
                <Button type="submit"> Submit </Button>
            </form>
        );
    }
}

//list item entry creating function
const Coin = ({coin, remove}) => {
    // each coin, with props received from CoinInputApp data handling function,
    // coin entry removed (for now) by clicking on list item
    return (<ListGroupItem header={coin.id} key={coin.id} onClick={() => {remove(coin.id)}}>{coin.text}</ListGroupItem>);
};

//list creating function
const TodoList = ({coins, remove}) => {
    // map through the coins
    const coinNode = coins.map((coins) => {
        return (<Coin coin={coins} remove={remove}/>)
    });
    // return list
    return (<ListGroup>{coinNode}</ListGroup>);
};

// container component that handles all other components
export default class CoinInputApp extends Component {

    constructor(props){
        // pass props to parent class
        super(props);
        // set initial empty state
        this.state = {
            data: []
        }
    }
    // add coin handler
    addCoin(val){
        // assemble data, id is coin abbreviation taken from first three letters of input
        const coin = {text: val, id: val.substring(0,3)};
        // update data - push JS object to state
        this.state.data.push(coin);
        // update state
        this.setState({data: this.state.data});
    }
    // handle remove
    handleRemove(id){
        // filter all coins except the one to be removed
        const remainder = this.state.data.filter((coin) => {
            if(coin.id !== id) return coin;
        });
        // update state with filter
        this.setState({data: remainder});
    }

    render(){
        // render JSX, pass props
        return (
            <Jumbotron>
                <CoinForm addCoin={this.addCoin.bind(this)}/>
                <TodoList
                    coins={this.state.data}
                    remove={this.handleRemove.bind(this)}
                />
            </Jumbotron>
        );
    }
}