import { useEffect, useRef, useState } from "react";
import bg from "../assets/login/backgroundImg.png";
import left_side_bg from "../assets/login/leftsided_bg.png";
import SocialLogin from "../components/SocialLogin";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    const userData = {
      email,
      password,
      captcha,
    };
    console.log(userData);
  };

  const handleValidateCaptcha = () => {
    const uesr_captcha_value = captchaRef.current.value;
    if (validateCaptcha(uesr_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="w-10/12 mx-auto shadow-2xl flex"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="basis-1/2">
          <img className=" p-16" src={left_side_bg} alt={left_side_bg} />
        </div>
        <div className="basis-1/2 flex flex-col p-4  justify-center items-center">
          <p className="font-cinzel uppercase text-2xl font-extrabold">Login</p>
          <form className="card-body w-3/4 space-y-2" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                ref={captchaRef}
                placeholder="Type captcha"
                className="input input-bordered"
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-sm mt-2 bg-gray-400 "
              >
                validate
              </button>
            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} className="btn btn-primary">
                Login
              </button>
            </div>
            <small className="text-center text-[#D99904] font-bold ">
              New here?
              <span className="font-cinzel text-lg">Create a new account</span>
            </small>
            <small className="text-center">or sign in with</small>
            <div className="text-center">
              <SocialLogin />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
