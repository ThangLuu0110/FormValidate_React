import React from 'react';
import { useFormik } from 'formik';
import { AiOutlineIdcard, AiOutlineMail } from 'react-icons/ai';
import * as Yup from 'yup';

function SignUpPage( props ) {
    

    const validationSchema = Yup.object().shape({
        firstname: 
        Yup.string()
            .trim()
            .required('Please enter your first name!'),
        lastname:
        Yup.string()
            .trim()
            .required('Please enter your last name!'),
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
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: (values) => {
            console.log(values);
            props.saveData(values.firstname, values.lastname, values.email, values.password);
            formik.resetForm();
        },
        validationSchema: validationSchema,
        
    })
    return(
        <div>
            <div>
                <h5>
                    START FOR FREE
                </h5>
                <h1>
                    Create mew account
                </h1>
                <p>
                    Already A Member? 
                </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div>
                        <label htmlFor='firstname'> First name: </label>
                        <input 
                            type='text' 
                            id='firstname' 
                            name='firstname'
                            placeholder='Enter your firstname...'
                            {...formik.getFieldProps("firstname")}
                        />
                    </div>
                    <div>
                        <AiOutlineIdcard />
                    </div>
                </div>
                {
                    formik.errors.firstname && formik.touched.firstname &&(
                        <p> {formik.errors.firstname} </p>
                    )
                }
                <div>
                    <div>
                        <label htmlFor='lastname'> Last name: </label>
                        <input 
                            type='text' 
                            id='lastname'
                            name='lastname' 
                            placeholder='Enter your lastname...'
                            {...formik.getFieldProps("lastname")}
                        />
                    </div>
                    <div>
                        <AiOutlineIdcard />
                    </div>
                </div>
                {
                    formik.errors.lastname && formik.touched.lastname ? (
                        <p> {formik.errors.lastname} </p>
                    ) : null
                }
                <div>
                    <div>
                        <label htmlFor='email'> Email: </label>
                        <input 
                            type='email' 
                            id='email' 
                            name='email'
                            {...formik.getFieldProps("email")}
                            placeholder='Enter your email...'
                        />
                    </div>
                    <div>
                        <AiOutlineMail />
                    </div>
                </div>
                {
                    formik.errors.email && formik.touched.email ? (
                        <p> {formik.errors.email} </p>
                    ) : null
                }
                <div>
                    <div>
                        <label htmlFor='password'> Password: </label>
                        <input 
                            type='password'
                            id='password' 
                            {...formik.getFieldProps("password")}
                            placeholder='Enter your password...'
                        />
                    </div>
                </div>
                {
                    formik.errors.password && formik.touched.password ? (
                        <p> { formik.errors.password } </p>
                    ) : null
                }
                <div>
                    <div>
                        <label htmlFor='confirmPassword'> Confirm password: </label>
                        <input 
                            type='password' 
                            id='confirmPassword' 
                            {...formik.getFieldProps("confirmPassword")}
                            placeholder='Enter your password...'
                        />
                    </div>
                </div>
                {
                    formik.values.confirmPassword !== formik.values.password && formik.touched.confirmPassword ? (
                        <p> Please check your password again </p>
                    ) : null
                }
                <button type='submit'>
                    Create account
                </button>
            </form>
        </div>
    )
}

export default SignUpPage;