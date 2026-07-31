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
    <div className="w-[430px] rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
      <h2 className="text-4xl font-bold text-white">Sign In</h2>

      <p className="mt-2 text-gray-400">
        Access your inventory management portal
      </p>

      <div className="mt-10">
        <form onSubmit={handleSubmit} className="space-y-5">
          {formErr && (
            <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 font-bold text-white">
                !
              </div>

              <div>
                <h4 className="text-sm font-semibold text-red-400">
                  Validation Error
                </h4>

                <p className="text-xs text-red-300">{formErr}</p>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <div
              className={`flex items-center gap-3 rounded-xl border bg-white px-2 py-2 transition-all ${
                errors.username
                  ? "border-red-500 ring-2 ring-red-500/20"
                  : "border-transparent focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20"
              }`}
            >
              <Mail
                size={18}
                className={
                  errors.username ? "text-red-500" : "text-gray-400"
                }
              />

              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  !
                </span>

                <p className="text-xs font-medium text-red-400">
                  {errors.username}
                </p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div
              className={`flex items-center gap-3 rounded-xl border bg-white px-2 py-2 transition-all ${
                errors.password
                  ? "border-red-500 ring-2 ring-red-500/20"
                  : "border-transparent focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20"
              }`}
            >
              <Lock
                size={18}
                className={
                  errors.password ? "text-red-500" : "text-gray-400"
                }
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  !
                </span>

                <p className="text-xs font-medium text-red-400">
                  {errors.password}
                </p>
              </div>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-300">
              <input
                type="checkbox"
                className="h-4 w-4 accent-violet-600"
              />
              Remember me
            </label>

            <a
              href="/forgot-password"
              className="text-sm font-medium text-violet-400 hover:text-violet-300"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 py-3 text-lg font-semibold text-white transition hover:scale-[1.02]"
          >
            Sign In →
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;