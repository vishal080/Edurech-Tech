
import jwt from "jsonwebtoken";

/*
Controller function to handle admin login
POST /api/admin/login
*/

const adminLogin = async (req, res) => {

    try {

        // take data from frontend
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // check admin credentials from .env
        if (
            email !== process.env.ADMIN_EMAIL ||
            password !== process.env.ADMIN_PASSWORD
        ) {
            return res.status(401).json({
                message: "Invalid admin credentials"
            });
        }

        // generate jwt token
        const token = jwt.sign(
            { role: "admin", email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRE }
        );

        // store token in cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        // return response
        return res.status(200).json({
            success: true,
            message: "Admin login successful",
        });

    } catch (error) {

        return res.status(500).json({
            message: "Server error"
        });

    }

};

const adminLogout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "strict",
            secure: false
        });

        return res.status(200).json({
            success: true,
            message: "Logout successful"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        });
    }
};

export {
    adminLogin,
    adminLogout
};