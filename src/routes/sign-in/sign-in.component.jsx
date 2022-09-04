// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';


import SignUpForm from '../../components/sign-up-form/sign-up-form';
import {
    // auth, 
    // signInWithGoogleRedirect, 
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     // const userDocRef = await createUserDocumentFromAuth(user);
    //     console.log(user)
    // };

    // useEffect(async () => {
    //     const response = getRedirectResult(auth);

    //     if (response) {
    //         const userDocRef = createUserDocumentFromAuth(response.user)
    //     }
    // }, [])

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}

            <SignUpForm />
        </div>
    );
};

export default SignIn;