import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localList: [
        { id: 'i_00', price: 2300, name: 'Example_1', checked: false },
        { id: 'i_1', price: 2301, name: 'Example_2', checked: false },
        { id: 'i_23', price: 2302, name: 'Example_3', checked: false },
        { id: 'i_24', price: 2303, name: 'Example_4', checked: false },
        { id: 'i_25', price: 2304, name: 'Example_5', checked: false },
        { id: 'i_26', price: 2305, name: 'Example_6', checked: false },
        { id: 'i_27', price: 2306, name: 'Example_7', checked: false },
        { id: 'i_28', price: 23000, name: 'Example_8', checked: false },
        { id: 'i_29', price: 100, name: 'Example_9', checked: false },
        { id: 'i_100', price: 0, name: 'Example_10', checked: false },
      ],
    };

    const list = [...this.state.localList];

    this.componentDidMount = () => {
      this.array = list.filter(item => item.checked === false);
      if (!this.array.checked) {
        this.timerForColor = setInterval(() => {
          this.arrForCheckedRandom = list.filter(item => item.checked === false);
          if (isNaN(this.arrForCheckedRandom) === true) {
            randomElem(this.arrForCheckedRandom).checked = true;
          }
          this.setState({
            localList: list,
          });
        }, 2000);
      }
    };

    this.componentDidUpdate = () => {
      if (isNaN(this.arrForCheckedRandom) === false) {
        clearTimeout(this.timerForColor);
      }
    };
  }

  tableBorder = () => {
    const arrayFiltrerOnFalse = this.state.localList.filter(list => list.checked === false);
    const arrayFilterOnTrue = this.state.localList.filter(list => list.checked === true);
    if (arrayFiltrerOnFalse >= arrayFilterOnTrue) {
      return 'table';
    } else if (arrayFiltrerOnFalse.length === 0) {
      return 'table-border__second';
    } else {
      return 'table-border__first';
    }
  };

  render() {
    return (
      <>
        {<table className={this.tableBorder()}>
          <tbody>
            {this.state.localList.map(list => (
              <tr key={list.id} className={list.checked === true ? 'green' : 'none'}>
                <td>{list.id}</td>
                <td>{list.price}</td>
                <td>{list.name}</td>
              </tr>
            ))}
          </tbody>
        </table>}
      </>
    );
  };
};

function randomElem(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}
