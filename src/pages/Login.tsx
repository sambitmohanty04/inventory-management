import LoginForm from "../pages/LoginForm";
//import logo from "../assets/logo.png";

export default function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#18152e]">

      {/* Left */}

      <div className="relative overflow-hidden bg-gradient-to-br from-[#302c7d] via-[#41379d] to-[#6556ff]">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-10">

          {/* <img
            src={logo}
            className="w-24 rounded-xl bg-white p-2 shadow-xl"
          /> */}
          

          <span className="mt-8 rounded-full bg-white/10 px-5 py-2 text-sm text-white">
            Inventory Management Application
          </span>

          <h1 className="mt-5 text-4xl font-bold text-white">
            Inventory
            <span className="text-pink-300">Management</span>
          </h1>

          <p className="mt-4 text-white/70">
            Empowering Minds, Shaping Futures
          </p>

          {/* <img
            src={student}
            className="absolute bottom-0 right-5 w-[420px]"
          /> */}
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center justify-center bg-[#171428]">
        <LoginForm />
      </div>

    </div>
  );
}
