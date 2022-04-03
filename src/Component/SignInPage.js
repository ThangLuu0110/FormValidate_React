import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SignInPage( props ) {
    const validationSchema = Yup.object().shape({
        email:
        Yup.string()
            .trim()
            .required('Please enter your email!')
            .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Your email is incorrect'),
        password:
        Yup.string()
            .trim()
            .required('Please enter your password!')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Your password must have at least 8 characters, 1 letter, 1 number and 1 special character'),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) =>{
            (values.email === props.user.email && values.password === props.user.password) 
            ? console.log(true) : console.log(false)
        },
        validationSchema: validationSchema,
    })

    return(
        <div>
            <div>
                <h1>
                    Sign In
                </h1>
                <p>
                    Haven't had an account ?
                </p>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="email"> Email: </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Enter your email..."
                            {...formik.getFieldProps('email')}
                        />
                    </div>
                    {
                        formik.errors.email && formik.touched.email ? (
                            <p> {formik.errors.email} </p>
                        ) : null
                    }
                    <div>
                        <label htmlFor="password"> Password: </label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter your password..."
                            {...formik.getFieldProps('password')}
                        />
                    </div>
                    {
                        formik.errors.password && formik.touched.password ? (
                            <p> { formik.errors.password } </p>
                        ) : null
                    }
                    <button type="submit">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignInPage;