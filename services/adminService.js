const User = require('../models/userModel');
const Slide = require('../models/slideModel');
const Announcements = require('../models/announcementModel');
const News = require('../models/newsModel');

// // Post Announcements (dummy function, can be expanded with announcement logic)
// const postAnnouncement = async (announcementData) => {
//     const { title, content } = announcementData;
//     const announcement = Announcements.findOneAndUpdate();
//     return { title, content, message: 'Announcement posted' };
// };

// Update Any Faculty Profile
const updateAnyFacultyProfile = async (facultyId, profileData) => {
    const { name, department, bio } = profileData;
    const user = await User.findByIdAndUpdate(
        facultyId,
        { profile: { name, department, bio } },
        { new: true }
    );
    if (!user) throw new Error('User not found');
    return user.profile;
};

// Admin Update Their Own Profile
const updateAdminProfile = async (username, profileData) => {
    const { name, department, bio } = profileData;
    const user = await User.findOneAndUpdate(
        { username },
        { profile: { name, department, bio } },
        { new: true }
    );
    if (!user) throw new Error('User not found');
    return user.profile;
};

const updateSlides = async (slideData) => {
    console.log('us',slideData);
    const slide = await Slide.findOneAndUpdate({'_id': slideData._id}, slideData);
    return slideData;
};
const addSlides = async (slideData) => {
    // console.log('slideDataa',slideData);
    const newslide = await Slide.create(slideData);  
    console.log('newslide',newslide);
    return newslide;
};
const deleteSlides = async (slideData) => {
    console.log('us',slideData);
    const slide = await Slide.findOneAndDelete({'_id': slideData});
    return slide;
};
const updateAnnouncement = async (announcementData) => {
    const { title, content } = announcementData;
    try{
        const announcement = await Announcements.findOneAndUpdate(
            { _id: announcementData._id },
            announcementData,
        );
        return announcement;
    }
    catch (error) {
        throw new Error('Announcement not found');
    }
};
const addAnnouncement = async (announcementData) => {
    const { title, content } = announcementData;
    try{
        const announcement = await Announcements.insert(
            announcementData,
        );
        return announcement;
    }
    catch (error) {
        throw new Error('Announcement not found');
    }
};
const updateNews = async (newsData) => {
    console.log('us',newsData);
    const news = await News.findOneAndUpdate({'_id': newsData._id}, newsData);
    return news;
};
const addNews = async (newsData) => {
    // console.log('slideDataa',slideData);
    const news = await News.create(newsData);  
    // console.log('news' newsData);
    return news;
};
const deleteNews = async (newsData) => {
    console.log('us',newsData);
    const news = await News.findOneAndDelete({'_id': newsData});
    return news;
};
module.exports = {
    updateAnyFacultyProfile,
    updateAdminProfile,
    updateSlides,
    addSlides,
    deleteSlides,
    updateAnnouncement,
    addAnnouncement,
    updateNews,
    addNews,
    deleteNews,
    
};
