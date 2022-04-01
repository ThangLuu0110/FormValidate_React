import React, { useState }from 'react';
import { useFormik } from 'formik';
import { AiOutlineIdcard, AiOutlineMail, AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import * as Yup from 'yup';

function SignUpPage() {
    const [ showPassword, getShowPassword ] = useState(false)
    const [ showConfirmPassword, getShowConfirmPassword ] = useState(false)
    
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
                .email('Must be valid an email!')
                .required('Please enter your email!'), 
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
        },
        validationSchema: validationSchema,
        
    })
    
    const handleShowPassword = () => {
        getShowPassword(!showPassword);
    }
    const handleShowConfirmPassword = () => {
        getShowConfirmPassword(!showConfirmPassword);
    }
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
                            // value={formik.values.firstname}
                            // onChange={formik.handleChange}
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
                            // value={formik.values.lastname}
                            // onChange={formik.handleChange}
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
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder='Enter your email...'
                        />
                    </div>
                    <div>
                        <AiOutlineMail />
                    </div>
                </div>
                {
                    formik.errors.email && formik.touched.firstname && (
                        <p> {formik.errors.email} </p>
                    )
                }
                <div>
                    <div>
                        <label htmlFor='password'> Password: </label>
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            id='password' 
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder='Enter your password...'
                        />
                    </div>
                    <div onClick={handleShowPassword}>
                        { showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor='confirmPassword'> Confirm password: </label>
                        <input 
                            type={showConfirmPassword ? 'text' : 'password'} 
                            id='confirmPassword' 
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            placeholder='Enter your password...'
                        />
                    </div>
                    <div onClick={handleShowConfirmPassword}>
                        { showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                </div>
                <button type='submit'>
                    Create account
                </button>
            </form>
        </div>
    )
}

export default SignUpPage;