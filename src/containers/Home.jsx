import React from 'react';
import s from './Home.module.css';
import { mainPageImage } from '../img/source';

export default function Home () {

    return (
        <div className={s.mainContainer}>
            <img src={mainPageImage} className={s.mainPageImage} />
            <div className={s.innerContainer}>
                <div className={s.titleContainer}>
                    <h1 className={s.heading}>Smth dumb</h1>
                    <h2 className={s.heading}>Smth even dumber</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className={s.bolder}>By Invisible Horse</p>
            </div>
        </div>
    )
}