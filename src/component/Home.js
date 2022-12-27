import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {

  const [username, setUsername] = useState(' ')

  const navigate = useNavigate(' ')

  useEffect(() => {
    setUsername(sessionStorage['username'])
  }, [])

  const onLogout = () => {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('password')
    sessionStorage.removeItem('access_token')

    navigate('/login')
  }

  return (

    <div>
      <div>

        <nav className="navbar navbar-expand-lg bg-dark mb-1">
          <div className="container-fluid">
            <a className="navbar-brand " href="#" style={{ color: 'white' }}>EMS-Bank</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/transfer" style={{ color: 'white' }}>Fund Transfer</a>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                    Balance Type
                  </a> */}
                  {/* <ul style={{ background: 'black'}} className="dropdown-menu">
                    <li><a className="dropdown-item" href="/deposit" style={{ color: 'red' }}>Deposit</a></li>
                    <li><a className="dropdown-item" href="/withdraw" style={{ color: 'red' }}>Withdraw</a></li>
                  </ul> */}
                  <a className="nav-link " href="/deposit" style={{ color: 'white' }}>Deposit</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="/withdraw" style={{ color: 'white' }}>Withdraw</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/transaction" style={{ color: 'white' }}>Transaction History</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                {/* <button style={{
                  position: 'fixed',
                  right: '10px',
                }} className="btn-btn-link" onClick={onLogout}>Logout</button> */}
                <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                &nbsp;&nbsp;
                <button className="btn btn-danger mp-10" onClick={onLogout}>Logout</button>

              </form>
            </div>
          </div>
        </nav>

        {/* <h2 className="page-title">Home</h2> */}
        {/* <p>Welcome Back <b>{username}</b></p> */}
        {/* <marquee behavior=" " direction="">Wel-Come Back <b>{username}</b> </marquee> */}
        <div style={{ padding: '10px' }} className="alert alert-success" role="alert">
          <p style={{ textAlign: 'center' }} behavior="" direction="">Wel-Come Back - <b>{username}</b></p>
        </div>
      </div>
      <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div  class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=100" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Wel-Come to ems-Bank</h5>
                <p>All your banking needs in one app</p>
              </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <footer >
        <p>Copyright &#169; - ems-Bank</p>
      </footer>
    </div>

  )
}

export default Home;