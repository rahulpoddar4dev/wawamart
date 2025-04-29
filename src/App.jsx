import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100 bg-light">
        {/* Full-Width Header */}
        <div className="w-100 shadow-sm border-bottom py-2 bg-dark">
          <header className="container-lg d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img
                src="/Wawa_Mart_Clean_Transparent.png"
                alt="Wawa Mart Logo"
                style={{ width: "100px", height: "50px", objectFit: "cover" }}
                className="me-2"
              />
            </div>
          </header>
        </div>

        {/* Main Content */}
        <main className="flex-fill">
          {/* Top Image Section */}
          <div className="container-lg pt-4 text-center position-relative">
            <img
              src="/pexels-sanaan-3116970.jpg"
              alt="Wawa Mart Store"
              className="img-fluid rounded mb-4 w-100"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
            <h1 className="fw-bold position-absolute top-50 start-50 translate-middle text-white text-center responsive-heading">
              Welcome to Wawa Mart – Convenience Store
            </h1>
          </div>

          {/* Styled Text Content */}
          <div className="container-lg">
            <div className="p-4">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* Sale Image */}
          <div className="container-lg pb-5">
            {/* Additional Image After Description */}
            <div className="text-center mt-4">
              <img
                src="/saleoffer.jpeg"
                alt="Inside Wawa Mart"
                className="img-fluid rounded shadow"
                style={{
                  maxHeight: "100%",
                  objectFit: "fill",
                  width: "100%",
                }}
              />
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="container-lg pb-5">
            <h2 className="mb-4 text-center">Contact Us</h2>
            <form
              className="bg-white shadow rounded p-4 mx-auto"
              style={{ maxWidth: "500px" }}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </main>

        {/* Full-Width Footer */}
        <div className="w-100 bg-dark text-white mt-auto">
          <footer className="container-lg py-3 text-center">
            <small>© 2025 Wawa Mart. All rights reserved.</small>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
