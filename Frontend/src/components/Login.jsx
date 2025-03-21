// import React from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";
// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       email: data.email,
//       password: data.password,
//     };
//     await axios
//       .post("http://localhost:4001/user/login", userInfo)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data) {
//           toast.success("Loggedin Successfully");
//           document.getElementById("my_modal_3").close();
//           setTimeout(() => {
//             window.location.reload();
//             localStorage.setItem("Users", JSON.stringify(res.data.user));
//           }, 1000);
//         }
//       })
//       .catch((err) => {
//         if (err.response) {
//           console.log(err);
//           toast.error("Error: " + err.response.data.message);
//           setTimeout(() => {}, 2000);
//         }
//       });
//   };
//   return (
//     <div>
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <Link
//               to="/"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               onClick={() => document.getElementById("my_modal_3").close()}
//             >
//               ✕
//             </Link>

//             <h3 className="font-bold text-lg">Login</h3>
//             {/* Email */}
//             <div className="mt-4 space-y-2">
//               <span>Email</span>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("email", { required: true })}
//               />
//               <br />
//               {errors.email && (
//                 <span className="text-sm text-red-500">
//                   This field is required
//                 </span>
//               )}
//             </div>
//             {/* password */}
//             <div className="mt-4 space-y-2">
//               <span>Password</span>
//               <br />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("password", { required: true })}
//               />
//               <br />
//               {errors.password && (
//                 <span className="text-sm text-red-500">
//                   This field is required
//                 </span>
//               )}
//             </div>

//             {/* Button */}
//             <div className="flex justify-around mt-6">
//               <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                 Login
//               </button>
//               <p>
//                 Not registered?{" "}
//                 <Link
//                   to="/signup"
//                   className="underline text-blue-500 cursor-pointer"
//                 >
//                   Signup
//                 </Link>{" "}
//               </p>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true); // Set loading to true when the form is being submitted
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Logged in successfully!");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      })
      .finally(() => setLoading(false)); // Reset loading when the request is done
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-6 max-w-sm mx-auto rounded-lg shadow-lg bg-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-xl text-center mb-4">Login</h3>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <label htmlFor="email" className="block text-sm text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <label htmlFor="password" className="block text-sm text-gray-600">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">{errors.password.message}</span>
              )}
            </div>

            {/* Submit button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 duration-200"
                disabled={loading} // Disable the button when submitting
              >
                {loading ? "Logging In..." : "Login"}
              </button>
            </div>

            {/* Signup link */}
            <div className="text-center mt-4">
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;

