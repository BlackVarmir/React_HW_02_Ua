import React from 'react';
import styles from './PersonalInfo.module.css';

function PersonalInfo({ data }) {
  return (
    <div className='row justify-content-center align-items-center'>
        <div className='col-md-8 order-md-2'>
            <h1>Персональна сторінка</h1>
            <div className='container'>
                <div className={styles.persInfo}>
                    <h2>{data.fullName}</h2>
                    <p>Телефон: {data.phone}</p>
                    <p>Email: {data.email}</p>
                    <p>Місто проживання: {data.city}</p>
                    <p>Досвід роботи: {data.workExperience}</p>
                    <p>Навички: {data.skills}</p>
                </div>
            </div>
        </div>
        <div className='col-md-4 order-md-1 d-flex justify-content-center align-items-start'>
            <div className={styles.img}>
                <img src={data.photo} alt="Фото" className='img-fluid rounded' />
            </div>
        </div>
    </div>
  );
}

export default PersonalInfo;
