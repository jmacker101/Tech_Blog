// Middleware function to check if the user is authenticated
const authGuard = (req, res, next) => {
    // Check if the user is authenticated
    if (req.session.loggedIn) {
      // User is authenticated, allow access to the route
      next();
    } else {
      // User is not authenticated, redirect to login page or send an error response
      res.status(401).json({ message: 'Unauthorized access. Please log in.' });
    }
  };
  
  module.exports = authGuard;