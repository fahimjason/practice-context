import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
//import { auth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';

const Authentication = () => {
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
        <div className='authentication-container'>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}

            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;