import React from 'react'
import "./Header.css";

import images from '../../constants/images';
import SubHeading from '../../components/Subheading/SubHeading';

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper-info">
        <SubHeading title="Chase the New Flavour" />
        <h1 className="app__header-h1">The key to Fine Dinning</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button type='button' className="custom__button">Explore Menu</button>
      </div>
      <div className="app__header-img">
        <img src={images.welcome} alt="header" />
      </div>
    </div>
  );
}

export default Header;