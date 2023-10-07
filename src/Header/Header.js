import React from 'react';
import {HiOutlineSearch} from "react-icons/hi";
import {AiOutlineShopping} from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import "./index.scss"
const Header = () => {
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                  <div className="header--title">
                  <h1>Bookshop</h1>
                    <NavLink to="/">Categories</NavLink>
                    <NavLink to="/Recent">Recent</NavLink>
                    <NavLink to="/Books">Boooks</NavLink>
                    <NavLink to="/About">About</NavLink>
                  </div>
                  <div className="header--info">
                    <button><HiOutlineSearch/></button>
                    <button><AiOutlineShopping/></button>
                    <h5>0</h5>
                  </div>
                </div>
            </div>
          
        </div>
    );
};

export default Header;