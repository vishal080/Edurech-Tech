import jwt from "jsonwebtoken";

/*
Middleware to protect admin routes
Checks JWT token and verifies admin access
*/

const adminAuth = async (req, res, next) => {

    try {

        let token;

        // token from Authorization header
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        // token from cookie
        if (!token && req.cookies?.token) {
            token = req.cookies.token;
        }

        // check if token exists
        if (!token) {
            return res.status(401).json({
                message: "Access denied. Token missing."
            });
        }

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // check admin role
        if (decoded.role !== "admin") {
            return res.status(403).json({
                message: "Admin access only"
            });
        }

        // attach admin data to request
        req.admin = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token"
        });

    }

};

export { adminAuth };