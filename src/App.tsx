import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent/NewComponent";
import {TopCars} from "./TopCars/TopCars";

export type topCar = {
    manufacturer: string
    model: string
}


function App() {
 const myFirstSubscriber = () => {
     console.log('Hello Im Maksim!')
 }


    const topCars:topCar[] = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    let [students, setStudents] = useState([
    {id:1, name: "James", age: 8},
    {id:1, name: "Maksim", age: 8},
    {id:1, name: "Patrick", age: 8},
    {id:1, name: "Jam", age: 8},
    {id:1, name: "Roma", age: 8},
]);
    return (
        <div className="App">
            <Header title={'NEW BODY'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer title={'NEW BODY'}/>
            <NewComponent students={students}/>
            <TopCars topCars={topCars}/>
            <button onClick={myFirstSubscriber}>MyYouTubeChanel-1</button>
            <button onClick={(event)=>{console.log('Hello')}}>MyYouTubeChanel-2</button>
        </div>
    );
}

export default App;
