const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const User = require('../models/User');
const AdminController = require('../controllers/AdminController');

var adminController = new AdminController();
var adminMiddleware = require('../configs/adminMiddleware');

router.get("/", adminController.index);
router.post("/login", adminController.login);
router.get('/dashboard', adminMiddleware, adminController.dashboard);
router.get('/logout', adminMiddleware, adminController.logout);


// Add admin account for test
router.get('/add/admin', async (req, res) => {
    var email = req.query.email;
    var password = req.query.password;

    // Hash password
    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(password, salt);

    user = await Admin.create({ admin_user: email, admin_password: hashPassword });

    res.send(user);
});

// Add user for test
router.get('/add/user', async (req, res) => {
   var query = req.query;

    // Hash password
    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(query.password, salt);

    user = await User.create({ 
        username: query.username, 
        account_pass: hashPassword,
        account_user: query.email,
        create_time: Date.now() 
    });

    res.send(user);
});

router.get("/ping", async (req, res) => {
    var result = await Admin.findAll();
    res.send({result});
});

module.exports = router;