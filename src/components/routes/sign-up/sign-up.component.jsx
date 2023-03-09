import { useState } from "react";

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [fields, setFields] = useState(defaultFields);

  const { displayName, email, password, confirmPassword } = fields;

  console.log(fields);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with your Email and Password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          required
          type="text"
          onChange={inputChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          required
          type="email"
          onChange={inputChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          required
          type="password"
          onChange={inputChange}
          name="password"
          value={password}
        />
        <label>Confirm Password</label>

        <input
          required
          type="password"
          onChange={inputChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
