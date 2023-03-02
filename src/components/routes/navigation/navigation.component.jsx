import { Outlet, link, Link } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-link" to="/">
          <div>Logo</div>
        </Link>
        <div className="link-tags">
          <Link className="nav-link-tags" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
