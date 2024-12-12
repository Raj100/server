const adminService = require('../services/adminService');

const updateAnnouncement = async (req, res) => {
    try {
        const announcement = await adminService.updateAnnouncement(req.body);
        res.status(201).json(announcement);
    } catch (error) {
        res.status(500).json({ message: 'Error posting announcement' });
    }
};

const updateFacultyProfile = async (req, res) => {
    try {
        const updatedProfile = await adminService.updateAnyFacultyProfile(req.params.id, req.body);
        res.json(updatedProfile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateProfile = async (req, res) => {
    try {
        const updatedProfile = await adminService.updateAdminProfile(req.user.username, req.body);
        res.json(updatedProfile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateSlides = async (req, res) => {
    try {
        const updatedSlides = await adminService.updateSlides(req.body);
        console.log("updatedSlides", updatedSlides);
        res.json(updatedSlides);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const addSlides = async (req, res) => {
    try {
        console.log("req", req.body);
        const addedSlides = await adminService.addSlides(req.body);
        res.status(200).json(addedSlides);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const deleteSlides = async (req, res) => {
    try {
        console.log("req", req.body);
        const deletedSlides = await adminService.deleteSlides(req.body.id);
        console.log("deletedSlides", deletedSlides);

        res.json(req.body.id);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateNews = async (req, res) => {
    try {
        const updatedNews = await adminService.updateNews(req.body);
        console.log("updatedNews", updatedNews);
        res.json(updatedNews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const addNews = async (req, res) => {
    try {
        if(req.file.path){
            req.body.link = `https://nitgoa1.vercel.app${req.file.path}`;
        }
        console.log("add news req file",req.file.path);
        console.log("add news req body",req.body);
        console.log("add news req content", req.content);
        const addedNews = await adminService.addNews(req.body);
        res.status(200).json(addedNews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const deleteNews = async (req, res) => {
    try {
        console.log("req", req.body);
        const deletedNews = await adminService.deleteNews(req.body.id);
        console.log("deletedNews", deletedNews);

        res.json(req.body.id);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports =
{
    updateFacultyProfile,
    updateProfile,
    updateSlides,
    updateAnnouncement,
    addSlides,
    deleteSlides,
    updateNews,
    addNews,
    deleteNews
};
