// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`,
//          {
//            {
//              username: username.trim(),
//              password: password.trim()
//            }
//          });


//       if (res.data.success) {
//         alert('Login successful');
//         navigate('/home');
//       } else {
//         alert(res.data.message || 'Invalid credentials');
//       }
//     } catch (err) {
//       console.error('Login error:', err.response?.data || err.message);
//       alert(err.response?.data?.message || 'Server error');
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-200 px-6 py-12">
//       <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
//         <div className="flex justify-center mb-6">
//           <img
//             alt="Truck Tracking"
//             src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//             className="h-12 w-12"
//           />
//         </div>
//         <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
//           Sign in to Truck_tracking
//         </h2>

//         <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//               Username
//             </label>
//             <input
//               id="username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//             />
//           </div>

//           <div className="flex items-center justify-between text-sm">
//             <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
//               Forgot password?
//             </a>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500 transition duration-200"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>

//         <p className="mt-6 text-center text-sm text-gray-600">
//           Not a member?{' '}
//           <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//             Start your free trial
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://backend-0dxg.onrender.com/api/login", { 

        username: username.trim(),
        password: password.trim()
      });

      if (res.data.success) {
        alert('Login successful');
        navigate('/home');
      } else {
        alert(res.data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Server error');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-200 px-6 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <div className="flex justify-center mb-6">
          <img
            alt="Truck Tracking"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="h-12 w-12"
          />
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to Truck_tracking
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Forgot password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500 transition duration-200"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Not a member?{' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Start your free trial
          </a>
        </p>
      </div>
    </div>
  );
}

