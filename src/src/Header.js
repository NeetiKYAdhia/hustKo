import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
import SignIn from "./Signin";
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBag } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function Header() {

    return (
        <div className="header">
            <img className="header__logo" src="https://brand.northeastern.edu/wp-content/uploads/2022/05/dog-Head.svg" alt="Amazon" />



            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon color="white" style={{ "position": "absolute" }} />
                {/* <SearchIcon className="header__searchIcon" /> */}
            </div>

            <div className="header__option">
                <Link to="/signin" className="header__optionLink">
                    <span className="header__optionLineOne"> Husky</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </Link>

            </div>



            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>



            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Account</span>
            </div>


            <div className="header__optionBasket">
                <ShoppingCartIcon />
                {/* <ShoppingBasketIcon /> */}
                <span className="header__optionLineTwo header__basketCount">
                    0
                </span>
            </div>

        </div>
       
    );
}

export default Header;