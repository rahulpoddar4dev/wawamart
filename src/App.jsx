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
          <div className="container-lg pt-4 text-center position-relative fade-in-up">
            <img
              src="/pexels-sanaan-3116970.jpg"
              alt="Wawa Mart Store"
              className="img-fluid rounded mb-4 w-100 zoom-in"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
            <h1 className="fw-bold w-100 position-absolute top-50 start-50 translate-middle text-white text-center responsive-heading">
              Welcome to Wawa Mart – Convenience Store
            </h1>
          </div>

          {/* Styled Text Content */}
          <div className="container-lg fade-in-up">
            <div className="p-4">
              <p className="mb-0">
                Welcome to Wawa Mart, your friendly neighborhood convenience
                store where quality meets convenience. Since opening our doors,
                we’ve been committed to providing a wide range of everyday
                essentials—from snacks and beverages to household items and
                on-the-go meals—all in one easy, accessible place. At Wawa Mart,
                we pride ourselves on creating a clean, welcoming environment
                where customer service comes first. Whether you’re grabbing a
                quick Drink, stocking up on groceries, or just stopping by for a
                friendly chat, our team is here to make your experience smooth
                and satisfying. We’re more than just a store—we’re part of your
                community. Thank you for choosing Wawa Mart!
              </p>
            </div>
          </div>

          {/* Sale Image */}
          <div className="container-lg pb-5 fade-in-up">
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
          <div className="container-lg pb-5 animate-fade-in">
            <h2 className="mb-4 text-center">Contact Us</h2>
            <form
              className="bg-white shadow rounded p-4 mx-auto animate-form"
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
              <div className="mb-3">
                <label htmlFor="product" className="form-label">
                  Product Suggestion
                </label>
                <textarea
                  className="form-control"
                  id="product"
                  rows="3"
                  placeholder="Write your product request or comment here"
                ></textarea>
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
