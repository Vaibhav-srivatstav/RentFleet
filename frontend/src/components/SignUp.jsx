import React, { useEffect, useState } from 'react';
import { signupStyles as styles } from '../assets/dummyStyle';
import { FaArrowLeft, FaCheck, FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const SignUp = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            password: "",
        }
    );
    const [showPassword, setShowPassword] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setIsActive(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!acceptedTerms) {
            toast.error('Please accept terms & conditions', { theme: 'dark' })
        }
        setLoading(true);
        try {
            const base = 'https://rentfleet-backend.onrender.com/';
            const url = `${base}/api/auth/register`

            const res = await axios.post(url, formData,{
                headers: { 'Content-Type': 'application/json' }
            });
            if (res.status >= 200 && res.status < 300) {
                const { token, user } = res.data || {}
                if (token) localStorage.setItem('token', token);
                if (user) localStorage.setItem('user', JSON.stringify(user));
                toast.success('Account created successfully! Welcome to PremiumDrive', {
                    position: "top-right",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'dark',
                    autoClose: '1200',
                    onClose: () => navigate('/login')
                });

                setLoading(false);
                return;
            }
            toast.error('Unexpected server response during registration', { theme: 'dark' })
        } catch (err) {
            // Detailed axios error handling
            console.error("Signup error (frontend):", err);

            if (err.response) {
                // Server responded with a status outside 2xx
                console.log(
                    "Server response (debug):",
                    err.response.status,
                    err.response.data
                );
                const serverMessage =
                    err.response.data?.message ||
                    err.response.data?.error ||
                    `Server error: ${err.response.status}`;
                toast.error(serverMessage, { theme: "dark" });
            } else if (err.request) {
                // Request made but no response
                console.log("No response received (debug):", err.request);
                toast.error(
                    "No response from server — ensure backend is running and CORS is configured.",
                    {
                        theme: "dark",
                    }
                );
            } else {
                // Something else happened
                toast.error(err.message || "Registration failed", { theme: "dark" });
            }
        }
        finally{
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className={styles.pageContainer}>
            <div className={styles.animatedBackground.base}>
                <div
                    className={`${styles.animatedBackground.orb1} ${isActive
                        ? "translate-x-10 sm:translate-x-20 translate-y-5 sm:translate-y-10"
                        : ""
                        }`}
                ></div>
                <div
                    className={`${styles.animatedBackground.orb2} ${isActive
                        ? "-translate-x-10 sm:-translate-x-20 -translate-y-5 sm:-translate-y-10"
                        : ""
                        }`}
                ></div>
                <div
                    className={`${styles.animatedBackground.orb3} ${isActive
                        ? "-translate-x-5 sm:-translate-x-10 translate-y-10 sm:translate-y-20"
                        : ""
                        }`}
                ></div>
            </div>
            <a href="/" className={styles.backButton}>
                <FaArrowLeft className=' text-xs sm:text-sm group-hover:-translate-x-1 transition-transform' />
                <span className="font-medium text-xs sm:text-sm">Back to Home</span>
            </a>

            <div className={`${styles.signupCard.container} ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
                <div className={styles.signupCard.card}
                    style={{
                        boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                        borderRadius: "24px",
                    }}
                >
                    <div className={styles.signupCard.decor1} />
                    <div className={styles.signupCard.decor2} />

                    <div className={styles.signupCard.headerContainer}>
                        <div className={styles.signupCard.logoContainer}>
                            <div className={styles.signupCard.logoText}>
                                <img src={logo} alt="logo" className='h-[1.2em] w-auto block object-contain'
                                    style={{
                                        display: "block",
                                    }} />
                                <span className="font-bold tracking-wider text-black mt-1">RentFleet</span>
                            </div>
                        </div>
                        <h1 className={styles.signupCard.title}>Sign Up</h1>

                    </div>
                    {/* Form */}
                    <form onSubmit={handleSubmit} className={styles.form.container}>
                        <div className={styles.form.inputContainer}>
                            <div className={styles.form.inputWrapper}>
                                <div className={styles.form.inputIcon}>
                                    <FaUser className="text-sm sm:text-base" />
                                </div>
                                <input type="text" name='name' value={formData.name} onChange={handleChange} className={styles.form.input} placeholder='Full name' required style={{ borderRadius: "16px" }} />
                            </div>
                        </div>
                        <div className={styles.form.inputContainer}>
                            <div className={styles.form.inputWrapper}>
                                <div className={styles.form.inputIcon}>
                                    <FaEnvelope className="text-sm sm:text-base" />
                                </div>
                                <input type="email" name='email' value={formData.email} onChange={handleChange} className={styles.form.input} placeholder='Email Address' required style={{ borderRadius: "16px" }} />
                            </div>
                        </div>
                        <div className={styles.form.inputContainer}>
                            <div className={styles.form.inputWrapper}>
                                <div className={styles.form.inputIcon}>
                                    <FaLock className="text-sm sm:text-base" />
                                </div>
                                <input type={showPassword ? "text" : "password"} name='password' value={formData.password} onChange={handleChange} className={styles.form.input} placeholder='Create Password' required style={{ borderRadius: "16px" }} />
                                <div className={styles.form.passwordToggle} onClick={togglePasswordVisibility}>{showPassword ? <FaEyeSlash className="text-sm sm:text-base" /> : <FaEye className="text-sm sm:text-base" />}
                                </div>
                            </div>
                        </div>

                        {/* // Terms and Conditions */}
                        <div className="flex items-start mt-2 sm:mt-3 md:-4">
                            <div className="flex items-center h-5 mt-0.5 sm:mt-1">
                                <input type="checkbox" id='terms' name='terms' checked={acceptedTerms} onChange={() => setAcceptedTerms(!acceptedTerms)} className={styles.form.checkbox} style={{
                                    boxShadow: "none",
                                }} />
                            </div>
                            <div className="ml-2 sm:ml3 text-xs sm:text-sm">
                                <label htmlFor="terms" className={styles.form.checkboxLabel}>
                                    I agree to the {" "}
                                    <span className={styles.form.checkboxLink}>Terms & Conditions</span>
                                </label>
                            </div>
                        </div>
                        <button type='submit' 
                        disabled={loading} className={styles.form.submitButton} style={{
                            borderRadius: "16px",
                            boxShadow: "0 5px 15px rgba(54, 56, 55, 0.6),"
                        }}>
                            <span className={styles.form.buttonText}>
                                <FaCheck className="text-white text-sm sm:text-base md:text-lg" />{loading ? 'Creating...' : 'Create Account'}
                            </span>
                            <div className={styles.form.buttonHover} />
                        </button>
                    </form>
                    <div
                        style={{
                            borderColor: "rgba(0,0,0,0.2)",

                        }} className={styles.signinSection}>
                        <p className={styles.signinText}>
                            Already have an Account
                        </p>
                        <a href="/login" className={styles.signinButton} style={{
                            borderRadius: "16px",
                            boxShadow: "0 2px 10px rgba(245,124,0,0.08)",
                        }}>LOGIN TO YOUR ACCOUNT</a>
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
                theme="dark"
                toastStyle={{
                    backgroundColor: "gray",
                    color: "#ffffff",
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(54, 53, 52, 0.18)",
                    fontFamily: "'Montserrat', sans-serif",
                }}
            />

            {/* Font Import */}
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Montserrat', sans-serif; }
        `}
            </style>
        </div>
    )
}

export default SignUp
