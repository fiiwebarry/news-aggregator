import React from 'react'
import NewsDashboard from '../components/NewsDashboard'
import Header from '/src/components/generic-Layouts/Header'
import Sidebar from '/src/components/generic-Layouts/Sidebar'

const Dashboard = () => {
    return (
        <>
            <Header />
            <main className="flex items-start">
                <Sidebar />
                <NewsDashboard />
            </main>

        </>
    )
}

export default Dashboard
