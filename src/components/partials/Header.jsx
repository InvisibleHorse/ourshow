import React from "react";
import { NavLink } from "react-router-dom";
import s from './Partials.module.css';

const navigation = [
    {id: 1, title: 'Episodes', path:'/episodes'},
    {id: 2, title: 'Our Blog', path:'/episodes'},
];

export default function () {
    return (
        <header className={s.header}>
            <a className={s.logo} href='/'>Our Show</a>
            <nav className={s.nav}>
                <div>
                    {navigation.map(({id, title, path}) => (
                        <NavLink key={id} to={path}>
                            {title}
                        </NavLink>
                    ))}
                </div>
            </nav>
            <div className={s.buttonDiv}>
                <a className={s.buttonLink}><span>
                    Subscribe
                </span></a>
            </div>
        </header>
    )
}

