import React, { useState } from 'react';

const HookForm = () => {

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const data = (e) => {
        e.preventDefault();
        const newUser = {
            firstName, lastName, email, password, confirmPassword
        }
        console.log(newUser)
    }

    const handleFirstName = e => {

        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First name must be more than 2 characters.")
        }
        else { setFirstNameError("") }
    }

    const handleLastName = e => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last name must be more than 2 characters.")
        }
        else { setLastNameError("") }
    }

    const handleEmail = e => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be more than 5 characters.")
        }
        else { setEmailError("") }
    }
    const handlePassword = e => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be more than 8 characters.")
        }
        else { setPasswordError("") }
    }


    // Change to confirm password.value == password.value
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 8) {
            setConfirmPasswordError("Password must be more than 8 characters.")
        }
        else { setConfirmPasswordError("") }
    }


    return (
        <>
            <form onSubmit={data}>
                <div>
                    <label>First Name: </label>
                    {/* <input type="text" onChange={(e) => setFirstName(e.target.value)} /> */}
                    <input type="text" onChange={handleFirstName} />
                    {firstNameError ? <p>{firstNameError}</p> : ''}
                </div>
                <div>
                    <label>Last Name: </label>
                    {/* <input type="text" onChange={(e) => setLastName(e.target.value)} /> */}
                    <input type="text" onChange={handleLastName} />
                    {lastNameError ? <p>{lastNameError}</p> : ''}
                </div>
                <div>
                    <label>Email: </label>
                    {/* <input type="text" onChange={(e) => setEmail(e.target.value)} /> */}
                    <input type="text" onChange={handleEmail} />
                    {emailError ? <p>{emailError}</p> : ''}
                </div>
                <div>
                    <label>Password: </label>
                    {/* <input type="text" onChange={(e) => setPassword(e.target.value)} /> */}
                    <input type="text" onChange={handlePassword} />
                    {passwordError ? <p>{passwordError}</p> : ''}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    {/* <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} /> */}
                    <input type="text" onChange={handleConfirmPassword} />
                    {confirmPasswordError ? <p>{confirmPasswordError}</p> : ''}
                </div>
            </form >

            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    )
}


export default HookForm;