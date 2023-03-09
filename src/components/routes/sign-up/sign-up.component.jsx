import { useState } from "react";
import {
  createUser,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

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

  const resetFields = () => {
    setFields(defaultFields);
  };

  const submitChange = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const { user } = await createUser(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already been used");
      }
      console.log("Creation Error", error);
    }
  };

  const inputChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with your Email and Password</h1>
      <form onSubmit={submitChange}>
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
