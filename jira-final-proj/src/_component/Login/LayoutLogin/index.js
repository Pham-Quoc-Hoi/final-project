import React, { useState } from "react";
import { actLogin } from "./duck/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginUser() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.loginReducer);
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    passWord: "",
    error: {
      Email: "",
      PassWord: "",
    },
    emailValid: false,
    passValid: false,
    fromValid: false,
  });

  const handleOnChange = (eve) => {
    const { name, value } = eve.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  console.log(state);

  const handleError = (e) => {
    const { name, value } = e.target;

    let mes = value.trim() === "" ? `(*) Vui lòng nhập` : "";
    console.log(mes);
    let { emailValid, passValid } = state;
    switch (name) {
      case "email":
        emailValid = mes === "" ? true : false;
        break;

      case "passWord":
        passValid = mes === "" ? true : false;
        break;

      default:
        break;
    }
    setState(
      {
        error: { ...state.error, [name]: mes },
        emailValid,
        passValid,
        fromValid: emailValid && passValid,
      },
      () => {
        console.log(state);
      }
    );
  };

  const handleSubmit = (eve) => {
    eve.preventDefault();
    dispatch(actLogin(state, navigate));
  };

  const renderNoti = () => {
    const { error } = props;
    return (
      error && (
        <div className="alert alert-danger">{error.response.data.content}</div>
      )
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-6 col-lg-5 d-none d-md-block"
                    style={{ width: "100" }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="Imag Log form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 fw-bold mb-0">WELCOME TO JIRA</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4 form-group">
                        <input
                          name="email"
                          onChange={handleOnChange}
                          onBlur={handleError}
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Email"
                        />
                        {state.error.email && (
                          <div className="text-danger">
                            {state.error.email + ` Email`}
                          </div>
                        )}
                      </div>
                      <div className="form-outline mb-4 form-group">
                        <input
                          name="passWord"
                          onChange={handleOnChange}
                          onBlur={handleError}
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Password"
                        />
                        {state.error.passWord && (
                          <div className="text-danger">
                            {state.error.passWord + ` Password`}
                          </div>
                        )}
                      </div>
                      {renderNoti()}
                      <div className="d-flex justify-content-end w-100 form-group">
                        <button
                          type="submit button"
                          className="btn btn-primary btn-lg ms-2"
                          disabled={!state.fromValid}
                        >
                          Login
                        </button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="/register" className="text-success">
                          Create Your Jira Account Here
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
