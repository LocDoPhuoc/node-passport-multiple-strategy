const express = require("express");
const session = require("express-session");
const passport = require("passport");
const flash = require('connect-flash');

// Passport config
require("./configs/passport")(passport);

// Create a new Express application
const app = express();

// Config public directory
app.use(express.static('public'));

// Configure view engine to render EJS templates.
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Use application-level middleware for common functionality
// Body parser
app.use(express.urlencoded({ extended: false }));
// Session
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));
// Flash
app.use(flash());
app.use((req, res, next) => {
    // res.locals.success_msg = req.flash("success_msg");
    // res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash('error');
    next();
});

// Initialize passport 
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/admin", require("./routes/admin"));
app.use("/", require("./routes/client"));

// Server
const environment = process.env;
var HOST = environment.HOST;    
var PORT = environment.PORT || 3000;
app.listen(PORT, console.log(`Server running at ${HOST}:${PORT}`));


    


