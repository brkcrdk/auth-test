export default function LoginPage() {
  return (
    <div>
      <form className="space-y-4">
        <div className="space-x-2">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Email" />
        </div>
        <div className="space-x-2">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
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
