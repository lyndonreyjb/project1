import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as SiteLogo } from "../../../assets/Logo.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-link" to="/">
          <SiteLogo className="logo" />
        </Link>
        <div className="link-tags">
          <Link className="nav-link-tags" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link-tags" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
