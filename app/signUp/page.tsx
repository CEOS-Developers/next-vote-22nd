
export default function SignUp() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center">
        <div>Register</div>
         <div>Name
        <input type="text" placeholder="Username" className="border border-gray-300 rounded-md px-4 py-2 w-80 mb-4"/></div>
        <div>ID
        <input type="text" placeholder="Username" className="border border-gray-300 rounded-md px-4 py-2 w-80 mb-4"/></div>
        <div>Password
        <input type="password" placeholder="Password" className="border border-gray-300 rounded-md px-4 py-2 w-80 mb-4"/></div>
        <div>Password Confirm
        <input type="password" placeholder="Password" className="border border-gray-300 rounded-md px-4 py-2 w-80 mb-4"/></div>
        <div>Email
        <input type="text" placeholder="Email" className="border border-gray-300 rounded-md px-4 py-2 w-80 mb-4"/></div>
        <div>Team/Part
        <input type="" className="border border-gray-300 rounded-md px-4 py-2 w-80 mb-4"/></div>
        <button className="bg-black text-white rounded-xl w-40 h-10 text-lg font-normal cursor-pointer shadow-lg hover:bg-yellow">Login</button>
    </div>
  );
}
