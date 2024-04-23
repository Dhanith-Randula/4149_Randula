import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from "./UserContext";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./menu-bar1.css";

function MenuBar1() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/home");
  };

  const [search, setSearch] = useState('');

  const handleSearch = () => {
    navigate('/search/' + search);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/link">
                All Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                AboutUs
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Environment & Nature
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Technology
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Lifestyle & Fashion
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Photography
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Food
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Vehicle
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Healthcare
                  </a>
                </li>
              </ul>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/addproduct">
                    Add Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Log in
                </Link>
              </li>
            )}
          </ul>

          <form className="d-flex">
            <input
              className="form-control"
              type="text"
              placeholder="Search..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar1;
