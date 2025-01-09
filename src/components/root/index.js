import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './style.module.css'

// {/* <NavLink 
//     style={({ isActive }) => {
//         return {
//             color: isActive ? "yellow" : '',
//         };
//     }}
//     className={({ isActive }) => {
//         return isActive ? styles.active : '';
//     }} 
// /> */}

export const Root = () => <>
    <NavLink 
        to='/' 
        className={({ isActive }) => {
            return isActive ? styles.home : '';
        }}
    >
        Главная
    </NavLink>
    <NavLink 
        to='posts' 
        className={({ isActive }) => {
            return isActive ? styles.post : '';
        }}
    >
        Посты
    </NavLink>
    <NavLink 
        to='blog' 
        className={({ isActive }) => {
            return isActive ? styles.blog : '';
        }}
    >
        Блог
    </NavLink>
    <br />
    <br />
    <br />
    <Outlet />
</>