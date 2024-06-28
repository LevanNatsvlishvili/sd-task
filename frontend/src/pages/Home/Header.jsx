const Header = ({ handleModal }) => {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>Wango parking</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  {' '}
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="job.html">
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="freelancer.html">
                  Freelancers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleModal('login')}>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>Login</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleModal('register')}>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>Sign Up</span>
                </a>
              </li>
              <form className="form-inline">
                <button className="btn   nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
