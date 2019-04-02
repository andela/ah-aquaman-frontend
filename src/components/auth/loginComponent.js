import React from "react";

const Login = () => (
  <div>
    <h3>Sign In</h3>
    <form>
      <input type="text" placeholder="Enter Email" name="email" />
      <br />
      <input type="password" placeholder="Enter Password" name="password" />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
);

export default Login;
