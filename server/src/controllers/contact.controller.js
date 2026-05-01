import { Contact } from "../models/contact.model.js";

// contact form submission Controller
const submitContactForm = async (req, res) => {
    try {
        // take data from frontend
        const { name, email, contactNumber, service, message } = req.body;

        // validation
        if (!name || !email || !contactNumber || !service || !message) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // create a new contact document
        const contact = await Contact.create({
            name,
            email,
            contactNumber,
            service,
            message
        })

        // validation
        if (!contact) {
            return res.status(400).json({
                message: "contact form submition failed!"
            })
        }

        // return response
        return res.status(200).json({
            success: true,
            message: "contact form subimitted successfully!",
            contact
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server error during contact form"
        });
    }

}

// Get Contact Info Controller
const getContactInfo = async (_, res) => {
    try {
        // Get contact info from DB
        const contacts = await Contact.find();
        if (!contacts) {
            return res.status(404).json({
                message: "Contact not found"
            })
        }

        // return response
        return res.status(200).json({
            message: "Contact info fetch successfully",
            contacts
        })
    } catch (error) {
        console.log("Internal server error during fetching contacts : ", error);
        res.status(500).json({
            message: "Internal server error during fetching contacts"
        })
    }
}

export {
    submitContactForm,
    getContactInfo
};   