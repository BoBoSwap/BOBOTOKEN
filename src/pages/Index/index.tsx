import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import girl from '../../assets/img/girl.png'
import hecoInfo from '../../assets/img/hecoInfo.png'
import coinMarketcap from '../../assets/img/coinMarketcap.png'
import Binance from '../../assets/img/Binance.png'
import holders from '../../assets/img/holders.png'
import burbed from '../../assets/img/burbed.png'
import group from '../../assets/img/group.png'
import github from '../../assets/img/github.png'
import twitter from '../../assets/img/twitter.png'
import telegran from '../../assets/img/telegran.png'
import icon from '../../assets/img/icon.png'

export default function Home() {
  const title = "Bobo's advantages";
  return (
    <div className="index">
      {/* description */}
      <div className="description">
        <div className="container description-con">
          <img src={girl} className="girl" alt="" />
          <div className="info">
            <div className="welcome">Welcome to</div>
            <div className="token">BOBO</div>
            <div className="des">
              The Toads Protocol is a community driven, fair launched DeFi Token.
              Three simple functions occur during each trade: Reflection, LP
              Acquisition, and Burn.
          </div>
            <div className="token-tool">
              <div className="live btn">Live Chart</div>
              <NavLink to='/swap'><div className="buy btn">Buy Now</div></NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* tokenInfo */}
      <div className="token-info">
        <div className="container">
          <div className="info-data">
            <div className="info-item">
              <div className="name">Current Price</div>
              <div className="value">$ 0.000000002847765005</div>
            </div>
            <div className="info-item">
              <div className="name">Supply</div>
              <div className="value">999,999,891,793,561</div>
            </div>
            <div className="info-item">
              <div className="name">Market Cap</div>
              <div className="value">$ 8,992,793.584,727,421</div>
            </div>
            <div className="info-item">
              <div className="name">Liquidity</div>
              <div className="value">$3002443.321736154</div>
            </div>
          </div>
          <div className="bottom">
            <div className="token-advantages">
              <div className="title">{title}</div>
              <div className="token-des">
                <p>
                  The development team burned their 20% of the total tokens and
                  the initial lp they provided, and they have been transferred to
                  the black hole address, which can never be retrieved, and
                  participate with others
              </p>
                <p>
                  The development team burned their 20% of the total tokens and
                  the initial lp they provided, and they have been transferred to
                  the black hole address, which can never be retrieved, and
                  participate with others
              </p>
                <p>
                  The development team burned their 20% of the total tokens and
                  the initial lp they provided, and they have been transferred to
                  the black hole address, which can never be retrieved, and
                  participate with others
              </p>
              </div>
            </div>
            <img src={icon} className="icon" alt="" />
          </div>
        </div>
      </div>

      {/* platform */}
      <div className="platform">
        <div className="container platform-con">
          <img className="item" src={hecoInfo} alt="" />
          <img className="item" src={coinMarketcap} alt="" />
          <img className="item" src={Binance} alt="" />
        </div>
      </div>
      {/* application */}
      <div className="application">
        <div className="container">
          <div className="title">Application Scenarios</div>
          <div className="app-con">
            <div className="app-item">
              <img src={holders} className="icon" alt="" />
              <div className="num">1,500,000</div>
              <div className="name">Holders</div>
            </div>
            <div className="app-item">
              <img src={burbed} className="icon" alt="" />
              <div className="num">108,208,627</div>
              <div className="name">Tokens Burned</div>
            </div>
            <div className="app-item">
              <img src={group} className="icon" alt="" />
              <div className="num">108,208,627</div>
              <div className="name">Liquidity</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container footer-con">
          <div className="item">
            <img src={github} className="icon" alt="" />
            <span className="name">Github</span>
          </div>
          <div className="item">
            <img src={twitter} className="icon" alt="" />
            <span className="name">Teitter</span>
          </div>
          <div className="item">
            <img src={telegran} className="icon" alt="" />
            <span className="name">Join our telegram</span>
          </div>
        </div>
      </div>
    </div >
  )
}