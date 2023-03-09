import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

import SignUp from "../sign-up/sign-up.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in With Google</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
