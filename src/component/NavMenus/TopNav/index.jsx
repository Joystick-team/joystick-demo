import React from "react";
import { Nav, Container,Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import ConnectButton from "../../ConnectButton";
import { Link, useLocation } from "react-router-dom";
import SearchBox from "../../SearchBox";
import { MdNotifications } from "react-icons/md";
import JOYSTICK from "../../../assets/images/JOYSTICK-logo.png";
import JOYSTICK2 from "../../../assets/images/JOYSTICK-light.png";
import ThemeToggle from '../../ThemeToggle';

import "./topnav.scss";
import { useTheme } from "../../../ThemeContext";
import AuthButton from "../../../pages/Auth/AuthButton";

export default function TopNav() {
  const { userToken } = useSelector((state) => state.signin);

  const isLandingPage = window.location.href.endsWith("/")
  console.log("landinpage",isLandingPage)
  // eslint-disable-next-line
  const [themeDetector, setThemeDetector] = useTheme();
  const { pathname } = useLocation();
  return (
    <div className="top-nav">
      <Container className="navbar">
        <div className="logo-title">
          <Link to={"/"}>
            {/* <picture>
                                <source srcSet={JOYSTICK2}  width={'80px'} height={`auto`} media={`(prefers-color-scheme: ${themeDetector})`}/>
                                <img src={JOYSTICK} width={'80px'} height={`auto`} alt="JOYSTICK-logo" />
                            </picture> */}
            {/* {themeDetector === "light" || themeDetector === null ? (
              <img
                src="/assets/images/newLogo.png"
                width={"30px"}
                height={`auto`}
                alt="JOYSTICK-logo"
              />
            ) : (
              <img
                 
                src="/assets/images/newLogo.png"
                width={"80px"}
                height={`auto`}
                alt="JOYSTICK-logo"
              />
            )} */}
             <img
                src="/assets/images/newLogo.png"
                alt="JOYSTICK-logo"
              />
          </Link>
        </div>
        <Nav variant="pills">
          <div className="top-nav-list">
             {
                !userToken?.access_token&& <ThemeToggle/>
            }
            {userToken?.access_token && (
              <ul>
               
                <li>
                  <Link
                    to="/leaderboard"
                    className={`${pathname === "/leaderboard" && "active"}`}
                  >
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rewards"
                    className={`${pathname === "/rewards" && "active"}`}
                  >
                    Rewards
                  </Link>
                </li>
                <li>
                  <Link
                    to="/staking"
                    className={`${pathname === "/staking" && "active"}`}
                  >
                    Staking
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </Nav>
        <div className="notice-search">
          <Link to="/notifications">
            <abbr title="notifications">
              <div className="top-notifications-icon">
                <MdNotifications />{" "}
              </div>
            </abbr>
          </Link>
          <SearchBox />
        </div>
        <AuthButton />
        <ConnectButton className="btn-connect" color="danger" title="Connect" />
      </Container>
    </div>
  );
}
