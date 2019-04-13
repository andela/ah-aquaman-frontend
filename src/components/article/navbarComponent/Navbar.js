import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    state = {
      hidden: false,
    }

    componentWillMount() {
      if (localStorage.getItem("token")) {
        this.setState({ hidden: true });
      }
    }

    render() {
      const title = "Author's Haven";
      let image = "";
     
      if (!this.state.hidden) {
        return (
          <header>
            <h1 className="header-title">{title}</h1>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <div className="collapse navbar-collapse offset">
                  <ul className="nav navbar-nav">
                    <li className="nav-item active"><Link to="/">Articles</Link></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right ml-auto">
                    <li className="nav-item">
                      <Link to="/login" className="create">Login </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        );
      }
      
      return (
        <header>
          <h1 className="header-title">{title}</h1>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <div className="collapse navbar-collapse offset">
                <ul className="nav navbar-nav">
                  <li className="nav-item active"><Link to="/">Articles</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right ml-auto">
                  {this.state.hidden && (
                    <Link to="/profile">
                      <li className="nav-item dropdown">
                        <img src={image} alt="" className="img-responsive profile-img" />
                      </li>
                    </Link>
                  )}
                  <li className="nav-item">
                    {this.state.hidden && (
                      <Link to="/create_article" className="create">
                        Create
                      </Link>
                    )}
                  </li>
                  <li className="nav-item">
                    {!this.state.hidden && <Link to="/signup" className="create">Register </Link>}
                  </li>
                  <li className="nav-item">
                    {!this.state.hidden && <Link to="/login" className="create">Login </Link>}
                  </li>
                  <li className="nav-item">
                    {this.state.hidden && <Link to="/logout" className="create">Logout </Link>}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      );
    }
}



export default Navbar;
