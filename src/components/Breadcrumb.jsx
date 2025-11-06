import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const currentPage =
    pathnames.length > 0
      ? pathnames[pathnames.length - 1]
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase())
      : "Home";

  return (
    <section className="breadcrum-section">
      <div className="breadcrum-container">
        {/* Page Title */}
        <h1 className="breadcrum-title">{currentPage}</h1>

        {/* Breadcrumb Navigation */}
        <nav className="breadcrum-nav">
          <ol className="breadcrum-list">
            <li>
              <Link to="/" className="breadcrum-link">
                Home
              </Link>
            </li>

            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              const formattedName = name
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase());

              return (
                <React.Fragment key={routeTo}>
                  <ChevronRight size={16} className="breadcrum-icon" />
                  {isLast ? (
                    <span className="breadcrum-current">{formattedName}</span>
                  ) : (
                    <Link to={routeTo} className="breadcrum-link">
                      {formattedName}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;
