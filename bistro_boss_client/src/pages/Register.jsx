import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/login/backgroundImg.png";
import left_side_bg from "../assets/login/left_sided_bg.png";
import SocialLogin from "../components/SocialLogin";
import useAuth from "./../hooks/useAuth";
import toast from "react-hot-toast";
import { axiosPublic } from "../hooks/useAxiosPublic";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const imgURL = form.imgURL.value;
    const userData = {
      email,
      name,
      password,
      imgURL,
    };
    console.log(userData);

    createUser(email, password).then((result) => {
      console.log(result.user);
      updateUserProfile(name, imgURL).then(() => {
        const userInfo = {
          name: name,
          email: email,
        };
        axiosPublic.post(`/users`, userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log(`user profile update`);
            form.reset();
            toast.success("Registration Successful");
            navigate("/");
          }
        });
      });
    });
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
        <div className="basis-1/2 flex flex-col p-4  justify-center items-center">
          <p className="font-cinzel uppercase text-2xl font-extrabold">
            Register
          </p>
          <form className="card-body w-3/4 space-y-2" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="imgURL"
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <small className="text-center text-[#D99904] font-bold ">
              Already Register?
              <Link to="/login" className="font-cinzel text-lg">
                Go to Login
              </Link>
            </small>
            <small className="text-center">or sign in with</small>
            <div className="text-center">
              <SocialLogin />
            </div>
          </form>
        </div>
        <div className="basis-1/2">
          <img className=" p-16" src={left_side_bg} alt={left_side_bg} />
        </div>
      </div>
    </main>
  );
};

export default Register;
