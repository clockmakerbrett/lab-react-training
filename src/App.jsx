import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePic from './components/ClickablePic';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        dateOfBirth={new Date('1992-07-14')}
        pictureUrl="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <br />
      <Greeting lang="es">Inigo Montoya</Greeting>
      <Greeting lang="de">Bridget VonHammerschmidt</Greeting>
      <br />
      <Random min={4} max={20} />
      <br />
      <Random min={11} max={110} />
      <br />
      <BoxColor r={23} g={212} b={99} />
      <br />
      <BoxColor r={68} g={13} b={111} />
      <br />
      <CreditCard
        color="yellow"
        type="Visa"
        number="1234 1234 9876 5678"
        expMonth="12"
        expYear="21"
      />
      <br />
      <Rating>3.9</Rating>
      <br />
      <Rating>1.6</Rating>
      <br />
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <br />
      <LikeButton />
      <LikeButton />
      <br />
      <ClickablePic
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <br />
      <Dice />
      <br />
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <br />
      <NumbersTable limit={12} />
      <br />
      <FaceBook />
      <br />
      <SignUpForm />
    </div>
  );
}

export default App;
