import { useState } from "react";
import {
  createUser,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import "./sign-up.styles.scss";
import UserForm from "../../form/form.component";
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
    <div className="sign-up-container">
      <h2>Don't have and account?</h2>
      <span>Sign up with your Email and Password</span>
      <br></br>
      <form onSubmit={submitChange}>
        <UserForm
          label="Display Name:"
          required
          type="text"
          onChange={inputChange}
          name="displayName"
          value={displayName}
        />

        <UserForm
          label="Email:"
          required
          type="email"
          onChange={inputChange}
          name="email"
          value={email}
        />

        <UserForm
          label="Password:"
          required
          type="password"
          onChange={inputChange}
          name="password"
          value={password}
        />

        <UserForm
          label="Confirm Password:"
          required
          type="password"
          onChange={inputChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <br></br>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
