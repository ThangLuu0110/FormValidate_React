import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineIdcard, AiOutlineMail, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

function SignUpPage( props ) {
    const [ showPassword, setShowPassword ] = useState(false);
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false)

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

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }
    return(
        <div className=" SignUpPage container-fluid">
            <div className="wrapper container row">
                <div className="wrapper__form col-xl-6 col-lg-12">
                    <div className="header">
                        <h5 className="header__pretitle">
                            START FOR FREE
                        </h5>
                        <h1 className="header__title">
                            Create mew account
                        </h1>
                        <p className="header__text">
                            Already A Member? 
                        </p>
                    </div>
                    <form onSubmit={formik.handleSubmit} className='content'>
                        <div className={`form__input name ${(formik.errors.firstname && formik.touched.firstname) ? 'error' : ''}`}>
                            <div className="form__input__box">
                                <label htmlFor='firstname'> First name: </label>
                                <input 
                                    type='text' 
                                    id='firstname' 
                                    name='firstname'
                                    placeholder='Enter your firstname...'
                                    {...formik.getFieldProps("firstname")}
                                />
                            </div>
                            <div className='form__input__icon'>
                                <AiOutlineIdcard />
                            </div>
                            {
                                formik.errors.firstname && formik.touched.firstname &&(
                                    <span className="form__input--error"> {formik.errors.firstname} </span>
                                )
                            }
                        </div>
                        <div className={`form__input name ${(formik.errors.lastname && formik.touched.lastname) ? 'error' : ''}`}>
                            <div className="form__input__box">
                                <label htmlFor='lastname'> Last name: </label>
                                <input 
                                    type='text' 
                                    id='lastname'
                                    name='lastname' 
                                    placeholder='Enter your lastname...'
                                    {...formik.getFieldProps("lastname")}
                                />
                            </div>
                            <div className='form__input__icon'>
                                <AiOutlineIdcard />
                            </div>
                            {
                                formik.errors.lastname && formik.touched.lastname ? (
                                    <span className="form__input--error"> {formik.errors.lastname} </span>
                                ) : null
                            }
                        </div>
                        <div className={`form__input ${(formik.errors.email && formik.touched.email) ? 'error' : ''}`}>
                            <div className="form__input__box">
                                <label htmlFor='email'> Email: </label>
                                <input 
                                    autoComplete='off'
                                    type='email' 
                                    id='email' 
                                    name='email'
                                    {...formik.getFieldProps("email")}
                                    placeholder='Enter your email...'
                                />
                            </div>
                            <div className='form__input__icon'>
                                <AiOutlineMail />
                            </div>
                            {
                                formik.errors.email && formik.touched.email ? (
                                    <span className="form__input--error"> {formik.errors.email} </span>
                                ) : null
                            }
                        </div>
                        <div className={`form__input ${(formik.errors.password && formik.touched.password) ? 'error' : ''}`}>
                            <div className="form__input__box">
                                <label htmlFor='password'> Password: </label>
                                <input 
                                    type={ showPassword ? 'text' : 'password' }
                                    id='password' 
                                    {...formik.getFieldProps("password")}
                                    placeholder='Enter your password...'
                                />
                            </div>
                            <div onClick={handleShowPassword} className='form__input__icon'>
                                    {
                                        !showPassword ? ( <AiOutlineEye /> ) : ( <AiOutlineEyeInvisible /> )
                                    }
                                </div>
                            {
                                formik.errors.password && formik.touched.password ? (
                                    <span className="form__input--error"> { formik.errors.password } </span>
                                ) : null
                            }
                        </div>
                        <div className={`form__input ${(formik.errors.confirmPassword && formik.touched.confirmPassword) ? 'error' : ''}`}>
                            <div className="form__input__box">
                                <label htmlFor='confirmPassword'> Confirm password: </label>
                                <input 
                                    type={ showConfirmPassword ? 'text' : 'password' }
                                    id='confirmPassword' 
                                    {...formik.getFieldProps("confirmPassword")}
                                    placeholder='Enter your password...'
                                />
                            </div>
                            <div onClick={handleShowConfirmPassword} className='form__input__icon'>
                                    {
                                        !showConfirmPassword ? ( <AiOutlineEye /> ) : ( <AiOutlineEyeInvisible /> )
                                    }
                                </div>
                            {
                                formik.values.confirmPassword !== formik.values.password && formik.touched.confirmPassword ? (
                                    <span className="form__input--error"> Please check your password again </span>
                                ) : null
                            }
                        </div>
                        <button type='submit' className='form__button'>
                            Create account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;