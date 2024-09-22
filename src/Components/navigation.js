import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="col-6 text-start">
  <Link class="navbar-brand" to="/">Logo here</Link>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="col-6">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="#">Link</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="#">Action</Link>
          <Link class="dropdown-item" to="#">Another action</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" to="#">Something else here</Link>
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link disabled" to="#">Disabled</Link>
      </li>
    </ul>
    </div>

   

  </div>
</nav>
        </div>

      );
}
 
export default Navigation;