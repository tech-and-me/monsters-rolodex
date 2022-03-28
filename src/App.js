import { useState, useEffect } from 'react';
import CardList from './CardList';
import {robots} from './robots'; 
// we use this when we dont use api so we can set all states to robots
import SearchBox from './SearchBox';


const App = () => {
    const [allRobots,setAllRobots] = useState([]);
    const [robotsToBeDisplayed,setRobotsToBeDisplayed] = useState([]);

    useEffect ( () => {
        (async () => {
            let userData;
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                userData = await response.json();
                setAllRobots(userData);
                setRobotsToBeDisplayed(userData);
            }catch (error){
                console.log(error);
            }
        })();
    },[]);




    const searchChangeFunc = (event) => {
        const searchName = event.target.value;
        const filteredRobots = allRobots.filter(robot => (
            robot.name.toLowerCase()
            .includes(searchName.toLowerCase())
        ))
        setRobotsToBeDisplayed(filteredRobots);
    }
    return (
        <div className = 'tc bg-mid-gray ma0 pt5'>
            <h1 className='ttu f1 lh-title washed-red ma0'>Monsters Rolodex</h1>
            <SearchBox searchChange={searchChangeFunc}/>
            <CardList robots={robotsToBeDisplayed}/>
        </div>
  )
}

export default App