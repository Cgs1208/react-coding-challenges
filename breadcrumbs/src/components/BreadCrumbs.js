import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadCrumbPath = "";
  return (
    <div className="breadcrumbs">
      {pathnames.length > 0 && <Link to="/">Home</Link>}
      {pathnames.map((name, index) => {
        breadCrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span>/ {name}</span>
        ) : (
          <span>
            <Link key={breadCrumbPath} to={breadCrumbPath}>
              / {name}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
