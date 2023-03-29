import "./styles/styles.scss";

function App() {
  return (
    <div className="container-fluid">
      <div className="custom-container">
        {/* nav  */}
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav align-items-lg-center align-items-md-start mt-md-3">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#" />
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" />
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" />
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" />
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" />
                </li>
                <li className="nav-item">
                  <a className="nav-link btn" href="#" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* hero section  */}
        <section id="section-1">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="box-1" />
              <div className="box-2" />
              <div className="box-3" />
              <div className="box-4" />
              <div className="box-5" />
              <div className="d-flex gap-3">
                <div className="box-6" />
                <div className="box-6" />
              </div>
              <div className="d-flex gap-lg-5 gap-md-4 gap-sm-4 gap-4 align-items-center mb-md-0 mb-sm-4 mb-4">
                <div className="d-flex align-items-center">
                  <div className="circle-1" />
                  <div className="circle-2" />
                  <div className="circle-3" />
                  <div className="circle-4" />
                  <div className="circle-5" />
                </div>
                <div>
                  <div className="box-7" />
                  <div className="box-8" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box-10" />
            </div>
          </div>
        </section>
      </div>
      {/* section 2 */}
      <section id="section-2" className="d-flex justify-content-center">
        <div className="row">
          <div className="col-lg-auto col-md-4 col-sm-4 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4 d-flex justify-content-center">
            <div className="box-1" />
          </div>
          <div className="col-lg-auto col-md-4 col-sm-4 col-12 mb-lg-0 mb-md-0 mb-sm-0 mb-4 d-flex justify-content-center">
            <div className="box-1" />
          </div>
          <div className="col-lg-auto col-md-4 col-sm-4 col-12 mb-lg-0 mb-md-0 mb-sm-0 mb-4 d-flex justify-content-center">
            <div className="box-1" />
          </div>
          <div className="col-lg-auto col-md-6 col-sm-6 col-12 mb-lg-0 mb-md-0 mb-sm-0 mb-4 d-flex justify-content-center">
            <div className="box-1" />
          </div>
          <div className="col-lg-auto col-md-6 col-sm-6 col-12 mb-0 d-flex justify-content-center">
            <div className="box-1" />
          </div>
        </div>
      </section>
      <div className="custom-container">
        {/* section 3  */}
        <section id="section-3">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="box-1" />
              <div className="box-2" />
              <div className="box-3" />
              <div className="box-4" />
              <div className="box-5" />
              <div className="d-flex mb-lg-4 mb-md-3 mb-sm-3 mb-3">
                <div className="box-6" />
                <div className="box-7" />
              </div>
              <div className="d-flex align-items-center">
                <div className="box-8" />
                <div className="box-9" />
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-lg-0 mt-md-3 mt-sm-4 mt-4 d-flex justify-content-lg-end justify-content-md-start justify-content-start">
              <div className="box-10" />
            </div>
          </div>
        </section>
        {/* section 4  */}
        <section id="section-4">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="box-1" />
              <div className="box-2" />
              <div className="box-3" />
              <div className="box-4 mb-lg-0 mb-sm-4 mb-4" />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row">
                <div className="col-xxl-7 col-6 d-flex justify-content-end">
                  <div className="box-5" />
                </div>
                <div className="col-xxl-5 col-6">
                  <div className="box-5" />
                </div>
                <div className="col-xxl-7 col-6 d-flex justify-content-end">
                  <div className="box-6" />
                </div>
                <div className="col-xxl-5 col-6">
                  <div className="box-6" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 5  */}
        <section
          id="section-5"
          className="d-flex flex-column align-items-center"
        >
          <div className="box-1" />
          <div className="box-2" />
          <div className="box-3" />
          <div className="box-4" />
          <div className="box-5" />
          <div className="row">
            <div className="col-md-3 col-sm-3 col-6 d-flex justify-content-center mb-md-0 mb-3">
              <div className="box-6" />
            </div>
            <div className="col-md-3 col-sm-3 col-6 d-flex justify-content-center">
              <div className="box-6" />
            </div>
            <div className="col-md-3 col-sm-3 col-6 d-flex justify-content-center mb-md-0 mb-3">
              <div className="box-6" />
            </div>
            <div className="col-md-3 col-sm-3 col-6 d-flex justify-content-center">
              <div className="box-6" />
            </div>
          </div>
        </section>
        {/* section 6  */}
        <section id="section-6">
          <div className="row">
            <div className="col-4">
              <div className="box" />
            </div>
            <div className="col-4">
              <div className="box" />
            </div>
            <div className="col-4">
              <div className="box" />
            </div>
            <div className="col-4">
              <div className="box" />
            </div>
            <div className="col-4">
              <div className="box" />
            </div>
            <div className="col-4">
              <div className="box" />
            </div>
          </div>
        </section>
        {/* section 7  */}
        <section id="section-7">
          <div className="d-flex flex-column align-items-center">
            <div className="box-1" />
            <div className="box-2" />
            <div className="box-3" />
            <div className="box-4" />
            <div className="box-5" />
            <div className="box-6" />
          </div>
        </section>
      </div>
      {/* section 8 */}
      <section id="section-8">
        <div className="carousel">
          <div className="item" />
          <div className="tem" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
        </div>
      </section>
      <div className="custom-container">
        {/* section-9  */}
        <section
          id="section-9"
          className="d-flex flex-column align-items-center"
        >
          <div className="box-1" />
          <div className="box-2" />
          <div className="box-3" />
          <div className="box-4" />
          <div className="box-5" />
          <div className="box-6" />
          <div className="box-7" />
        </section>
      </div>
    </div>
  );
}

export default App;
