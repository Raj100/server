const express = require('express');
const { updateFacultyProfile, updateProfile,updateSlides,addSlides, deleteSlides, updateAnnouncement,updateNews,addNews,deleteNews } = require('../controllers/adminController');
const router = express.Router();
// const upload = require('../middlewares/fileMiddleware');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'static/'); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });

router.put('/announcements', updateAnnouncement);

router.put('/faculty/:id', updateFacultyProfile);

router.put('/profile', updateProfile);

router.put('/slides', updateSlides);
router.post('/slides', addSlides);
router.delete('/slides', deleteSlides);

router.put('/news', updateNews);
router.post('/news',upload.single('file'), addNews);
router.delete('/news', deleteNews); 




router.put('/announcements',updateAnnouncement);


module.exports = router;
