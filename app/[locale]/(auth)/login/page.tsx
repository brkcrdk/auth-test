import { loginAction } from "../actions";

export default function LoginPage() {
  return (
    <div>
      <form className="space-y-4" action={loginAction}>
        <div className="space-x-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            name="username"
            className="text-black"
            value="emilys"
          />
        </div>
        <div className="space-x-2">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            className="text-black"
            placeholder="Password"
            value="emilyspass"
          />
        </div>
        <button
          type="submit"
          className="bg-white text-black rounded-md h-10 px-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}
