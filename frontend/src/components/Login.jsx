import React, { useEffect, useState } from 'react'
import { loginStyles as styles } from '../assets/dummyStyle'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa'
import { Container } from 'lucide-react'
import logo from '../assets/Logo.png'
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [showpassword, setShowPassword] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setIsActive(true);
    }, []);

    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const base = 'https://rentfleet-backend.onrender.com/';
            const url = `${base}/api/auth/login`

            const res = await axios.post(url, credentials,{
                headers: { 'Content-Type': 'application/json' }
            });
            if (res.status >= 200 && res.status < 300) {
                const { token, user, message } = res.data;
                if (token) localStorage.setItem('token', token);
                if (user) localStorage.setItem('user', JSON.stringify(user));

                toast.success(message || 'Login Successful! Welcome back', {
                    position: 'top-right',
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'colored',
                    onClose: () => {
                        const redirectPath = '/';
                        navigate(redirectPath, { replace: true });
                    },
                    autoClose: 1000,
                });
            }
            else {
                toast.error('Unexpected respone from server', { theme: 'colored' })
            }
        }
        catch (err) {
            console.error("Login error (frontend):", err);
            if (err.response) {
                const serverMessage =
                    err.response.data?.message ||
                    err.response.data?.error ||
                    `Server error: ${err.response.status}`;
                toast.error(serverMessage, { theme: "colored" });
            } else if (err.request) {
                toast.error("No response from server — is backend running?", {
                    theme: "colored",
                });
            } else {
                toast.error(err.message || "Login failed", { theme: "colored" });
            }
        }
        finally {
            setLoading(false);
        }
    }

    const togglePasswordVisibility = () => setShowPassword(prev => !prev);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.animatedBackground.base}>
                <div className={`${styles.animatedBackground.orb1} ${isActive ? 'translate-x-20 translate-y-10' : ''}`} />
                <div className={`${styles.animatedBackground.orb2} ${isActive ? '-translate-x-20 -translate-y-10' : ''}`} />
                <div className={`${styles.animatedBackground.orb3} ${isActive ? '-translate-x-10 translate-y-20' : ''}`} />
            </div>
            <a href="/" className={styles.backButton}>
                <FaArrowLeft className="text-sm sm:text-base" />
                <span className='front-medium text-xs sm:text-sm'> Back to Home</span>
            </a>

            {/* LOGIN CARD */}
            <div className={`${styles.loginCard, Container} ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
                <div className={styles.loginCard.card}>
                    <div className={styles.loginCard.decor1} />
                    <div className={styles.loginCard.decor2} />
                    {/* 
                    HEADER */}
                    <div className={styles.loginCard.headerContainer}>
                        <div className={styles.loginCard.logoContainer}>
                            <div className={styles.loginCard.logoText}>
                                <img src={logo} alt="Logo" className="h-[1em] w-auto block" style={{ display: 'Blocks', objectFit: "contain" }} />
                                <span className="font-bold tracking-wider">RentFleet</span>
                            </div>
                        </div>
                        <h1 className={styles.loginCard.title}>Login</h1>
                        {/* <p className={styles.loginCard.subtitle}>Luxury Drive Experience</p> */}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className={styles.form.container} >
                        <div className={styles.form.inputContainer}>
                            <div className={styles.form.inputWrapper}>
                                <div className={styles.form.inputIcon}>
                                    <FaUser />
                                </div>
                                <input type="email" className={styles.form.input} name="email" id="" value={credentials.email} onChange={handleChange} placeholder='Enter your email' required />
                            </div>
                        </div>
                        <div className={styles.form.inputContainer}>
                            <div className={styles.form.inputWrapper}>
                                <div className={styles.form.inputIcon}>
                                    <FaLock />
                                </div>
                                <input type={showpassword ? "text" : "password"} name="password" id="" value={credentials.password} onChange={handleChange} placeholder='Enter your password' required className={styles.form.input} />
                                <div onClick={togglePasswordVisibility} className={styles.form.passwordToggle}>
                                    {showpassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                        </div>
                        <button className={styles.form.submitButton} type='submit' disabled={loading}>
                            <span className={styles.form.buttonText}>{
                                loading ? 'Signing in...' : 'Login'}</span>
                            <div className={styles.form.buttonHover} />
                        </button>
                    </form>

                    <div className={styles.signupSection}>
                        <p className={styles.signupText}>Don't have an account?</p>
                        <a href="/signup" className={styles.signupButton}>Create Account</a>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                toastStyle={{
                    backgroundColor: 'gray',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(48, 48, 48, 0.25)'
                }}
            />
        </div>
    )
}

export default Login
