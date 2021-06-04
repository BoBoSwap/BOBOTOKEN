
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Wallet } from '@pancakeswap-libs/uikit'
import { useWeb3React, getWeb3ReactContext } from '@web3-react/core'
import useAuth from 'hooks/useAuth'
import Logo from '../../assets/img/logo.png'
import './index.scss'

const activeClassName = 'active'
const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  width: fit-content;
  font-weight: 500;
  padding: 8px 12px;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 600;
  }
`


const MenuList: any = [
  {
    name: "Home",
    val: "/",
  },
  {
    name: "About",
    val: "/about",
  },
  {
    name: "Buy Now",
    val: "/swap",
  }]

export default function Header() {
  const res = useWeb3React()
  const { account, error } = res;
  const { login, logout } = useAuth()

  const [active, setActive] = useState('/home')
  return (
    <div className="bobo-header ">
      <div className="container bobo-header">
        <div className="logo-con">
          <img src={Logo} className="logo" alt="" />
          <div className="logo-name">BOBO</div>
        </div>
        <div className="menu-con">
          {
            MenuList.map((item: any) => {
              return (<NavLink
                isActive={(match, { pathname }) => {
                  const isCurrent = pathname === item.val
                  return isCurrent || (item.val === '/swap' ? pathname.indexOf('/add/BNB') === 0 : false)
                }
                } to={item.val} key={item.val} className={active === item.val ? ' menu-item' : 'menu-item'}>{item.name}</NavLink>)
            })
          }
          <Wallet account={account as string}
            login={login}
            logout={logout} />
        </div>

      </div>
    </div >
  )
}
