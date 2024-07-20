import React from "react";
import { Link } from "react-router-dom";
import RamenDiningIcon from '@mui/icons-material/RamenDining';

const Footer = () => {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <RamenDiningIcon />
          </Link>
          <span className="text-muted">© 2024 GoFood, Co</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
             <RamenDiningIcon />
          </li>
          <li className="ms-3">
             <RamenDiningIcon />
          </li>
          <li className="ms-3">
             <RamenDiningIcon />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
