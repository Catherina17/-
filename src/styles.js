import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Layout = styled.div`
    max-width: 1000px;
    margin: 30px auto 0 auto;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Menu = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
export const Link = styled(NavLink)`
    color: black;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`
