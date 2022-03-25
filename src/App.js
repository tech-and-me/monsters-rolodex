import { useState } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';


const App = () => {
    const [allRobots,setAllRobots] = useState(robots);
    const [robotsToBeDisplayed,setRobotsToBeDisplayed] = useState(robots);

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
            <h1 className='ttu f1 lh-title washed-red ma0'>My Robo Friends</h1>
            <SearchBox searchChange={searchChangeFunc}/>
            <CardList robots={robotsToBeDisplayed}/>
        </div>
  )
}

export default App