const express = require('express');
const router = express.Router();
const { home, getaddmyProject, postaddmyProject, checkAuth } = require('../auth/home');
const { testimonial } = require('../auth/testimonial');
const { detailProject, detailProjectindex } = require('../auth/detail');
const { renderEdit, edit, deleteget, getEdit } = require('../auth/Delete');
const { contact } = require('../auth/contact');
const { loginView, login, logout } = require('../User/login');
const { register, registerView } = require('../User/register');
const upload = require('../src/middleware/uploadFile');
// Routing
router.get("/", home);
router.get("/addmyProject", checkAuth, getaddmyProject);
router.post("/addmyProject", upload.single('image'), postaddmyProject);
router.get("/testimonial", testimonial);
router.get("/detailProject", detailProject);
router.get("/detailProject/:index", detailProjectindex);

router.get("/editData", getEdit);
router.get("/editData/:id", checkAuth, renderEdit);
router.post("/editData/:id", checkAuth, upload.single('image'), edit);
router.post("/deleteData/:id", checkAuth, deleteget);
router.get("/contact", contact);

router.get("/login", loginView);
router.post("/login", login);
router.get("/register", registerView);
router.post("/register", register);
router.get('/logout', logout);

module.exports = router;