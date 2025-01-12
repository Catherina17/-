// import React from 'react'
// import { NavLink, Outlet } from 'react-router-dom'
// import styles from './style.module.css'

// export const Root = () => <>
//     <NavLink 
//         to='/' 
//         className={({ isActive }) => {
//             return isActive ? styles.home : '';
//         }}
//     >
//         Главная
//     </NavLink>
//     <NavLink 
//         to='posts' 
//         className={({ isActive }) => {
//             return isActive ? styles.post : '';
//         }}
//     >
//         Посты
//     </NavLink>
//     <NavLink 
//         to='blog' 
//         className={({ isActive }) => {
//             return isActive ? styles.blog : '';
//         }}
//     >
//         Блог
//     </NavLink>
//     <NavLink 
//         to='feedback' 
//         className={({ isActive }) => {
//             return isActive ? styles.feedback : '';
//         }}
//     >
//         Обратная связь
//     </NavLink>
//     <br />
//     <br />
//     <br />
//     <Outlet />
// </>

import React from 'react'
import { Outlet } from 'react-router-dom'
import { User } from '../user'
import { useAuth } from '../../hooks/useAuth'
import * as SC from '../../styles'

export const Root = () => {
    const auth = useAuth()

    return <SC.Layout>
        <SC.Header>
            <SC.Menu>
                <SC.Link to='/'>Главная</SC.Link>
                <SC.Link to='posts'>Посты</SC.Link>
                <SC.Link to='blog'>Блог</SC.Link>
                <SC.Link to='feedback'>Обратная связь</SC.Link>
                {auth.user ? <SC.Link to='protected'>Защищённая страничка</SC.Link> : null}
            </SC.Menu>
            <User />
        </SC.Header>
        <br />
        <br />
        <br />
        <Outlet />
    </SC.Layout>
}