import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './style.css'

<NavLink 
    style={({ isActive }) => {
        return {
            color: isActive ? "yellow" : '',
        };
    }}
    className={({ isActive }) => {
        return isActive ? styles.active : '';
    }} 
/>

export const Root = () => <>
    <NavLink to='/'>Главная</NavLink>
    <NavLink to='posts'>Посты</NavLink>
    <NavLink to='blog'>Блог</NavLink>
    <br />
    <br />
    <br />
    <Outlet />
</>