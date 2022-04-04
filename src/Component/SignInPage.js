import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineMail, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

function SignInPage( props ) {
    const [ showPassword, setShowPassword ] = useState( false );

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
           const check = props.users.filter(user => {
               return user.email === values.email
           })

           if(check.length > 0){
               console.log(true);
           }
        },
        validationSchema: validationSchema,
    })

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return(
        <div className="SignInPage container-fluid">
            <div className="wrapper container">
                <div className="wrapper__form">
                    <div className="header">
                        <h1 className="header__title">
                            Sign In
                        </h1>
                        <p className="header__text">
                            Haven't had an account ? 
                        </p>
                    </div>
                    <div className="content">
                        <form onSubmit={formik.handleSubmit}>
                            <div className={`form__input ${(formik.errors.email && formik.touched.email) ? 'error' : ''}`}>
                                <div className="form__input__box">
                                    <label htmlFor="email"> Email: </label>
                                    <input
                                        autoComplete='off'
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Enter your email..."
                                        {...formik.getFieldProps('email')}
                                    />
                                </div>
                                <div className='form__input__icon'>
                                    <AiOutlineMail />
                                </div>
                            </div>
                            {
                                formik.errors.email && formik.touched.email ? (
                                    <p className="form__error"> {formik.errors.email} </p>
                                ) : null
                            }
                            <div className={`form__input ${(formik.errors.password && formik.touched.password) ? 'error' : ''}`}>
                                <div className="form__input__box">
                                    <label htmlFor="password"> Password: </label>
                                    <input 
                                        autoComplete='off'
                                        type={ showPassword ? 'text' : 'password' } 
                                        name="password" 
                                        id="password" 
                                        placeholder="Enter your password..."
                                        {...formik.getFieldProps('password')}
                                    />
                                </div>
                                <div onClick={handleShowPassword} className='form__input__icon'>
                                    {
                                        !showPassword ? ( <AiOutlineEye /> ) : ( <AiOutlineEyeInvisible /> )
                                    }
                                </div>
                            </div>
                            {
                                formik.errors.password && formik.touched.password ? (
                                    <p className="form__error"> { formik.errors.password } </p>
                                ) : null
                            }
                            <button type="submit" className='form__button'>
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;