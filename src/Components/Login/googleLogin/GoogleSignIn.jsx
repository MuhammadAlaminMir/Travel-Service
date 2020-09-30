import React, { useContext } from 'react';
import 'firebase/auth';
import * as firebase from 'firebase/app';
import firebaseConfig from '../../../firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const GoogleSignIn = ({ user }) => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: '/' } };
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) {
                const user = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                };
                console.log(user);
                setLoggedUser(signedInUser);

                console.log(loggedUser);
                history.replace(from);
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div onClick={handleGoogleSignIn} style={{ cursor: 'pointer' }}>
            <h5>Continue with google</h5>
        </div>
    );
};

export default GoogleSignIn;
