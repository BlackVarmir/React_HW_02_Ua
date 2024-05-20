import React from 'react';
import styles from './PetInfo.module.css';

const PetInfo = ({ pet }) => {
  return (
    <div className='row justify-content-center align-items-center'>
        <div className='col-md-8 order-md-2'>
            <h1>Домашній улюбленець</h1>
            <div className='container'>
                    <div className={styles.petText}>
                        <h2>Ім'я: {pet.name}</h2>
                        <p>Вид: {pet.type}</p>
                        <p>Вік: {pet.age} років</p>
                    </div>
            </div>
        </div>
        <div className='col-md-4 order-md-1 d-flex justify-content-center align-items-start'>
            <div className={styles.petImage}>
                <img src={pet.image} alt={pet.name} className='img-fluid rounded' />
            </div>
        </div>
    </div>
  );
};

export default PetInfo;
