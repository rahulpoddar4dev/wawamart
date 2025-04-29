import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null); // For resetting form
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    product: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    product: "",
  });

  // Form validation
  const validateForm = () => {
    let valid = true;
    let tempErrors = { ...errors };

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      valid = false;
    } else {
      tempErrors.name = "";
    }

    // Mobile validation (basic number check)
    if (!formData.mobile.trim()) {
      tempErrors.mobile = "Mobile number is required.";
      valid = false;
    } else if (!/^\d+$/.test(formData.mobile)) {
      tempErrors.mobile = "Mobile number must be numeric.";
      valid = false;
    } else {
      tempErrors.mobile = "";
    }

    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is not valid.";
      valid = false;
    } else {
      tempErrors.email = "";
    }

    // Product suggestion validation
    if (!formData.product.trim()) {
      tempErrors.product = "Product suggestion is required.";
      valid = false;
    } else {
      tempErrors.product = "";
    }

    setErrors(tempErrors);
    return valid;
  };

  // Dynamic Submit handler
  const handleClickSubmit = () => {
    if (validateForm()) {
      setShowModal(true);
      formRef.current.reset(); // Reset form fields
      setFormData({ name: "", mobile: "", email: "", product: "" }); // Reset state values
    }
  };

  // Handle closing the modal
  const handleClose = () => setShowModal(false);

  // Handle form field change and clear error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "" ? prevErrors[name] : "",
    }));
  };

  return (
    <>
      <div className="d-flex flex-column min-vh-100 bg-light">
        {/* Header */}
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
          {/* Top Image */}
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

          {/* Text Content */}
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
            <div className="text-center mt-4">
              <img
                src="/saleoffer.jpeg"
                alt="Inside Wawa Mart"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "100%", objectFit: "fill", width: "100%" }}
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="container-lg pb-5 animate-fade-in">
            <h2 className="mb-4 text-center">Contact Us</h2>
            <form
              ref={formRef}
              className="bg-white shadow rounded p-4 mx-auto animate-form"
              style={{ maxWidth: "500px" }}
            >
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              {/* Mobile */}
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="tel"
                  className={`form-control ${
                    errors.mobile ? "is-invalid" : ""
                  }`}
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                />
                {errors.mobile && (
                  <div className="invalid-feedback">{errors.mobile}</div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Product Suggestion */}
              <div className="mb-3">
                <label htmlFor="product" className="form-label">
                  Product Suggestion
                </label>
                <textarea
                  className={`form-control ${
                    errors.product ? "is-invalid" : ""
                  }`}
                  id="product"
                  name="product"
                  rows="3"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="Write your product request or comment here"
                ></textarea>
                {errors.product && (
                  <div className="invalid-feedback">{errors.product}</div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={handleClickSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </main>

        {/* Footer */}
        <div className="w-100 bg-dark text-white mt-auto">
          <footer className="container-lg py-3 text-center">
            <small>© 2025 Wawa Mart. All rights reserved.</small>
          </footer>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Thank You!</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Your message has been submitted successfully. We appreciate
                  your feedback!
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
