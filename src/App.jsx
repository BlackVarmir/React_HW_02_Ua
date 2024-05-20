import React from 'react';
import './App.css';
import FilmDetails from './components/FilmDetails/FilmDetails';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Clock from './components/Clock/Clock';
import PetInfo from './components/PetInfo/PetInfo';

function App() {

  const favoriteFilm = {
    title: 'Закляття',
    director: 'Джеймс Ван',
    releaseYear: '2013',
    studio: 'New Line Cinema',
    poster: '/src/components/img/The_Conjuring.jpg',
  };

  const personalData = {
    fullName: 'Василіу Олександр Юрійович',
    phone: '+38067***1259',
    email: 'sash.vas2016cv@gmail.com',
    city: 'м. Чернівці',
    workExperience: '0. Ще навчаюся',
    skills: 'Хотілось щоб були кращі. Це прийде з досвідом.',
    photo: '/src/components/img/istockphoto-1337144146-612x612.jpg',
  };

  const pet = {
    name: 'Рокі',
    type: 'Собака',
    age: '1.6',
    image: '/src/components/img/Dog.jpg',
  };

  return (
    <div>
      <div className='main'>
        <div hidden className='container mt-5 container1'>
          <FilmDetails film={favoriteFilm} />
        </div>
        <div hidden className='container mt-5 container2'>
          <PersonalInfo data={personalData} />
        </div>
        <div className='container mt-5 container3'>
          <Clock />
        </div>
        <div hidden className='container mt-5 container4'>
          <PetInfo pet={pet} />
        </div>
      </div>
      <div>
        <div className='col-sm'>
          <button className='btn btn-primary' onClick={() => {
            document.querySelector('.container1').hidden = false;
            document.querySelector('.container2').hidden = true;
            document.querySelector('.container3').hidden = true;
            document.querySelector('.container4').hidden = true;
          }}>Завдання 1</button>
          <button className='btn btn-primary' onClick={() => {
            document.querySelector('.container1').hidden = true;
            document.querySelector('.container2').hidden = false;
            document.querySelector('.container3').hidden = true;
            document.querySelector('.container4').hidden = true;
          }}>Завдання 2</button>
          <button className='btn btn-primary' onClick={() => {
            document.querySelector('.container1').hidden = true;
            document.querySelector('.container2').hidden = true;
            document.querySelector('.container3').hidden = false;
            document.querySelector('.container4').hidden = true;
          }}>Завдання 3</button>
          <button className='btn btn-primary' onClick={() => {
            document.querySelector('.container1').hidden = true;
            document.querySelector('.container2').hidden = true;
            document.querySelector('.container3').hidden = true;
            document.querySelector('.container4').hidden = false;
          }}>Завдання 4</button>
        </div>
      </div>
    </div>
  );
}

export default App;
