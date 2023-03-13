import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent/NewComponent";
import {TopCars} from "./TopCars/TopCars";
import {Button} from "./components/Button";


export type topCar = {
    manufacturer: string
    model: string
}


function App() {

    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a);
        console.log((a))
    }

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = (subscriber: string) => {
        console.log('Im Stupid BUTTON')
    }

    const topCars: topCar[] = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    let [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 1, name: "Maksim", age: 8},
        {id: 1, name: "Patrick", age: 8},
        {id: 1, name: "Jam", age: 8},
        {id: 1, name: "Roma", age: 8},
    ]);
    return (
        <div className="App">
            <Header title={'NEW BODY'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer title={'NEW BODY'}/>
            <NewComponent students={students}/>
            <TopCars topCars={topCars}/>
            {/*<button>MyYouTubeChanel-1</button>*/}
            {/*<button>MyYouTubeChanel-2</button>*/}
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('I am Vasya', 21, 'live in Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo
            ('I am Ivan')}/>
            {/*<Button name={'Stupid BUTTON'} callBack={Button3Foo}></Button>*/}
            <h1>{a}</h1>
            <button onClick={onClickHandler}></button>
        </div>
    );
}

export default App;
