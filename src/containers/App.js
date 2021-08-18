import React, { Component, useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {robots} from '../robots.js';
import './App.css';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       robots: robots,
//       searchfield: ''
//     }
//   }

//   componentDidMount() {
//     // fetch('https://jsonplaceholder.typicode.com/users')
//     //   .then(response => response.json())
//     //   .then(users => {this.setState({ robots: users})});
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchfield: event.target.value })
//   }

//   render() {
//     const { robots, searchfield } = this.state;
//     const filteredRobots = robots.filter(robot =>{
//       return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//     })
//     return !robots.length ?
//       <h1>Loading</h1> :
//       (
//         <div className='tc'>
//           <h1 className='title'>
//             RoboFriends
//             <SearchBox searchChange={this.onSearchChange}/>
//           </h1>
//           <Scroll>
//             <CardList robots={filteredRobots} />
//           </Scroll>
//         </div>
//       );
//   }
// }

// export default App;

function App(){
  const [bots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [count, setCount] = useState(0); 

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setRobots(users)});
      console.log(count);
  }, [count]); //only run when count changes

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredRobots = bots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  //console.log(bots, searchField);

  return !robots.length ?
    <h1 className='title'>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='title'>
          RoboFriends
          {/* <button onClick={() => setCount(count+1)}>Click me!{count}</button> */}
          <SearchBox searchChange={onSearchChange}/>
        </h1>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
          
}

export default App;