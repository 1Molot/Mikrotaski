import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent/NewComponent";
import {TopCars} from "./TopCars/TopCars";
import {Button} from "./components/Button";
import {Banknots} from "./NewComponent/Banknots";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {ButtonButton} from "./components/ButtonButton";


export type topCar = {
    manufacturer: string
    model: string
}
export type FilterType = 'all' | 'Dollars' | 'Ruble'

export type MoneyType = {
    banknots: 'Dollars' | 'Ruble'
    value: number
    number: string
}


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let [title, setTitle] = useState('')


    const addMessage=(title:string)=>{
       let newMassage={message:title};
        setMessage([newMassage,...message])
    }

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

    const [money, setMoney] = useState<MoneyType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Ruble', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Ruble', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Ruble', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars');
    }
    if (filter === 'Ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Ruble');
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    const callBackButtonHandler=()=>{
        addMessage(title)
        setTitle('')
    }
    return (

        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <ButtonButton name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
            {/*<Header title={'NEW BODY'}/>*/}
            {/*<Body titleForBody={'NEW BODY'}/>*/}
            {/*<Footer title={'NEW BODY'}/>*/}
            {/*<NewComponent students={students}/>*/}
            {/*<TopCars topCars={topCars}/>*/}
            {/*/!*<button>MyYouTubeChanel-1</button>*!/*/}
            {/*/!*<button>MyYouTubeChanel-2</button>*!/*/}
            {/*<Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('I am Vasya', 21, 'live in Minsk')}/>*/}
            {/*<Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo*/}
            {/*('I am Ivan')}/>*/}
            {/*/!*<Button name={'Stupid BUTTON'} callBack={Button3Foo}></Button>*!/*/}
            {/*<h1>{a}</h1>*/}
            {/*<button onClick={onClickHandler}></button>*/}
            <Banknots
                banknots={currentMoney}
                onClickFilterHandler={onClickFilterHandler}
            />
        </div>
    );
}

export default App;








