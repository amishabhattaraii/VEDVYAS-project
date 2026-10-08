import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import StudentProfile from './pages/Studentprofile'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import StudentDashboard from './pages/StudentDashboard'
import Layout from './components/Layout'
import Courses from './pages/Courses'
import Performance from './pages/Performance'
import AdminDashboard from './pages/AdminDashboard'

const App = () => {
    return (
        <BrowserRouter>

            <Layout>

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/register"
                        element={<Register />}
                    />

                    <Route
                        path="/student-profile"
                        element={
                            <ProtectedRoute>
                                <StudentProfile />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/student-dashboard"
                        element={
                            <ProtectedRoute>
                                <StudentDashboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/courses"
                        element={
                            <ProtectedRoute>
                                <Courses />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/performance"
                        element={
                            <ProtectedRoute>
                                <Performance />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/admin-dashboard"
                        element={
                            <ProtectedRoute role="admin">
                                <AdminDashboard />
                            </ProtectedRoute>
                        }
                    />

                </Routes>

            </Layout>

        </BrowserRouter>
    )
}

export default App