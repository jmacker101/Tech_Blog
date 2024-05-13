// this is to help with the home page with nav bar and more
<nav>
    <ul>
        <li><a href="index.html">Homepage</a></li>
        <li><a href="dashboard.html">Dashboard</a></li>
        <li><a href="login.html">Login/Logout/Signup</a></li>
    </ul>
</nav>
const express = require('express');
const router = express.Router();
const DashboardModel = require('../models/dashboardModel'); // Import your dashboard model

// Middleware function to authenticate users
const authenticateUser = (req, res, next) => {
    // Check if user is authenticated
    // Implement your authentication logic here
    next();
}

// Route Definitions

// Route to display the dashboard
router.get('/', authenticateUser, async (req, res) => {
    try {
        // Fetch data from the database using the DashboardModel
        const dashboardData = await DashboardModel.getData();
        
        // Render the dashboard view with the data
        res.render('dashboard', { data: dashboardData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to update data on the dashboard
router.post('/update', authenticateUser, async (req, res) => {
    try {
        // Update data in the database using the DashboardModel
        await DashboardModel.updateData(req.body);
        
        res.redirect('/dashboard');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Exporting the Router
module.exports = router;