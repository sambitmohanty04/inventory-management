import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { toast } from "react-toastify";

interface FormErrors {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formErr, setFormErr] = useState<string>("");

  const [errors, setErrors] = useState<FormErrors>({
    username: "",
    password: "",
  });

  const validate = (): boolean => {
    const newErrors: FormErrors = {
      username: "",
      password: "",
    };

    let isValid = true;

    if (!username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) {
      setFormErr("Please fill in all required fields.");
      return;
    }

    setFormErr("");

    // API Call
    toast.success("Login successful!");

    setUsername("");
    setPassword("");
    setShowPassword(false);

    setErrors({
        username: "",
        password: "",
    });
  };

  return (
    <div className="relative w-[430px] overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

        {/* Glass Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent"></div>

        {/* Top Glow */}
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

        {/* Bottom Glow */}
        <div className="absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10">

            <h2 className="text-3xl font-bold text-white">
            Sign In
            </h2>

            <p className="mt-2 text-gray-300">
            Access your inventory management portal
            </p>

            <div className="mt-10">
            <form onSubmit={handleSubmit} className="space-y-5">

                {formErr && (
                <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/15 px-4 py-3 backdrop-blur-md">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                    !
                    </div>

                    <div>
                    <h4 className="text-sm font-semibold text-red-300">
                        Validation Error
                    </h4>

                    <p className="text-xs text-red-200">
                        {formErr}
                    </p>
                    </div>
                </div>
                )}

                {/* Username */}

                <div className="space-y-2">

                <div
                    className={`flex items-center gap-3 rounded-xl border bg-white/90 px-4 py-3 transition-all duration-300 ${
                    errors.username
                        ? "border-red-500 ring-2 ring-red-500/20"
                        : "border-white/20 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-500/30"
                    }`}
                >
                    <Mail
                    size={18}
                    className={errors.username ? "text-red-500" : "text-gray-400"}
                    />

                    <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);

                        setErrors((prev) => ({
                        ...prev,
                        username: "",
                        }));

                        setFormErr("");
                    }}
                    className="w-full bg-transparent outline-none placeholder:text-gray-400"
                    />
                </div>

                {errors.username && (
                    <p className="flex items-center gap-2 text-sm text-red-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                        !
                    </span>
                    {errors.username}
                    </p>
                )}
                </div>

                {/* Password */}

                <div className="space-y-2">

                <div
                    className={`flex items-center gap-3 rounded-xl border bg-white/90 px-4 py-3 transition-all duration-300 ${
                    errors.password
                        ? "border-red-500 ring-2 ring-red-500/20"
                        : "border-white/20 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-500/30"
                    }`}
                >
                    <Lock
                    size={18}
                    className={errors.password ? "text-red-500" : "text-gray-400"}
                    />

                    <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);

                        setErrors((prev) => ({
                        ...prev,
                        password: "",
                        }));

                        setFormErr("");
                    }}
                    className="w-full bg-transparent outline-none placeholder:text-gray-400"
                    />

                    <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    >
                    {showPassword ? (
                        <EyeOff size={18} className="text-gray-400" />
                    ) : (
                        <Eye size={18} className="text-gray-400" />
                    )}
                    </button>
                </div>

                {errors.password && (
                    <p className="flex items-center gap-2 text-sm text-red-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                        !
                    </span>
                    {errors.password}
                    </p>
                )}
                </div>

                {/* Remember Me */}

                <div className="flex items-center justify-between">

                <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-300">
                    <input
                    type="checkbox"
                    className="h-4 w-4 accent-violet-500"
                    />
                    Remember me
                </label>

                <a
                    href="/forgot-password"
                    className="text-sm font-medium text-violet-300 transition hover:text-violet-200"
                >
                    Forgot Password?
                </a>

                </div>

                {/* Button */}

                <button
                    type="submit"
                    className="
                        w-full 
                        rounded-xl 
                        bg-gradient-to-r 
                        from-blue-600 
                        via-indigo-600 
                        to-purple-600 
                        py-3 
                        text-lg 
                        font-semibold 
                        text-white 
                        shadow-lg 
                        shadow-indigo-500/30
                        transition-all 
                        duration-300 
                        hover:scale-[1.02]
                        hover:shadow-indigo-500/50
                    "
                >
                Sign In →
                </button>

            </form>
            </div>

        </div>
        </div>
  );
};

export default LoginForm;