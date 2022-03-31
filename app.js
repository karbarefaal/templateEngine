const path = require('path');

const express = require('express');

const exphbs = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

//pug
// app.set("view engine","pug");


// handlebars
// app.engine("hbs", exphbs.engine({
//     extname: "hbs",
//     layoutDir: "views/layout",
//     defaultLayout: "main",
//     partialsDir: "views/partials"
// }));
// app.set("view engine", "hbs");

// ejs
app.set("view engine","ejs");
app.set("views", "views");

app.get("/", (req, res) => {
    const arr = [
        { name: "mehdi ansari" },
        { name: "javad yesari" },
        { name: "ali sajjadi" }
    ];
    res.render("index", { 
        pageTitle: "This is Sample", 
        names: arr, 
        // home: true, 
        // hasName: (arr.length > 0)
        path: "/",
    });
});

app.listen(3000, () => {
    console.log("server is running");
});