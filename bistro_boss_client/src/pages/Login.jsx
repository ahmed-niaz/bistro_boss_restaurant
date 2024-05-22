import { useEffect, useState } from "react";
import bg from "../assets/login/backgroundImg.png";
import left_side_bg from "../assets/login/left_sided_bg.png";
import SocialLogin from "../components/SocialLogin";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "./../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

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
    login(email, password).then((result) => {
      console.log(result.user);
      toast.success('Login successful')
      navigate(from,{replace:true})
    });
  };

  const handleValidateCaptcha = (e) => {
    const uesr_captcha_value = e.target.value;
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
                onBlur={handleValidateCaptcha}
                placeholder="Type captcha"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} className="btn btn-primary">
                Login
              </button>
            </div>
            <small className="text-center text-[#D99904] font-bold ">
              New here?
              <Link to="/register" className="font-cinzel text-lg">
                Create a new account
              </Link>
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
