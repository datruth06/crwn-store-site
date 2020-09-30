import React from 'react';

import './sign-inandsign-up.style.scss';
import SignIn from '../../componets/sign-in/sign-in.componet';
import SignUp from '../../componets/sign-up/sign-up.compoent';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;