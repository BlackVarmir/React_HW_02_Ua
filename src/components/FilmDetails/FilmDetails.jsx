import React from 'react';
import {filmInfo, filmPoster} from './FilmDetails.module.css';

function FilmDetails({ film }) {
  return (
    <div className='row justify-content-center align-items-center'>
        <div className='col-md-8 order-md-2'>
            <h1>Мій улюблений фільм</h1>
            <div className='container'>
                <div className={filmInfo}>
                    <h2>{film.title}</h2>
                    <p>Режисер: {film.director}</p>
                    <p>Рік випуску: {film.releaseYear}</p>
                    <p>Кіностудія: {film.studio}</p>
                </div>
            </div>
        </div>
        <div className='col-md-4 order-md-1 d-flex justify-content-center align-items-start'>
            <div className={filmPoster}>
                <img src={film.poster} alt={film.title} className='img-fluid rounded' />
            </div>
        </div>
    </div>
  );
}

export default FilmDetails;