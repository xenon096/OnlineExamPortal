import React, { useState } from 'react';

function Register({ onRegisterSuccess, onLoginClick }) {
    const [studentName, setStudentName] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = (e) => {
        e.preventDefault();

        console.log('Registering with:', { studentName, collegeName, email, username, password });

        setStudentName('');
        setCollegeName('');
        setEmail('');
        setUsername('');
        setPassword('');

        if (onRegisterSuccess) {
            onRegisterSuccess(username);
        }
    };

    return (
        <><header className="p-4 bg-gray-800 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Online Exam Portal</h1>
            </div>
        </header>
        <div className="min-h-screen flex items-center justify-center bg-gray-400 p-4 font-sans">
                <div className="bg-sky-100 p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
                    <h4 className="text-3xl font-bold text-center text-gray-800 mb-8">Register as New User</h4>

                    <form onSubmit={handleRegister} className="space-y-6">
                        {/* Student Name Input */}
                        <div>
                            <label htmlFor="studentName" className="block text-sm font-medium text-sky-800 mb-2">
                                Student Name
                            </label>
                            <input
                                type="text"
                                id="studentName"
                                name="studentName"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                // Changed hover:bg-gray-50 to hover:bg-gray-100 for a darker effect
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm transition duration-150 ease-in-out hover:bg-gray-100"
                                placeholder="Enter your full name"
                                required />
                        </div>

                        {/* College Name Input */}
                        <div>
                            <label htmlFor="collegeName" className="block text-sm font-medium text-sky-800 mb-2">
                                College Name
                            </label>
                            <input
                                type="text"
                                id="collegeName"
                                name="collegeName"
                                value={collegeName}
                                onChange={(e) => setCollegeName(e.target.value)}
                                // Changed hover:bg-gray-50 to hover:bg-gray-100 for a darker effect
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm transition duration-150 ease-in-out hover:bg-gray-100"
                                placeholder="Enter your college name"
                                required />
                        </div>

                        {/* Mail ID Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-sky-800 mb-2">
                                Mail ID
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                // Changed hover:bg-gray-50 to hover:bg-gray-100 for a darker effect
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm transition duration-150 ease-in-out hover:bg-gray-100"
                                placeholder="Enter your email address"
                                required />
                        </div>

                        {/* Username Input */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-sky-800 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                // Changed hover:bg-gray-50 to hover:bg-gray-100 for a darker effect
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm transition duration-150 ease-in-out hover:bg-gray-100"
                                placeholder="Choose a username"
                                required />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-sky-800 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                // Changed hover:bg-gray-50 to hover:bg-gray-100 for a darker effect
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm transition duration-150 ease-in-out hover:bg-gray-100"
                                placeholder="Create a password"
                                required />
                        </div>

                        {/* Register Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition duration-150 ease-in-out"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <button
                            onClick={onLoginClick}
                            className="font-medium text-sky-800 hover:text-indigo-700 text-sm bg-transparent border-none cursor-pointer p-0"
                        >
                            Already have an account? Login
                        </button>
                    </div>
                </div>
            </div></>
    );
}

export default Register