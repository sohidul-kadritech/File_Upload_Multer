const express = require("express");
const app = express();
var cors = require("cors");
const db = require("./db");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const multer = require("multer");

//Tackel Cors
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  Credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
// for this code we can access upload folders from the client side/browsers
app.use(express.static("uploads"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//Import Contact Router File
const contactRoutes = require("./routes/contactRoutes");
app.use("/contacts", contactRoutes);

//Import Employee Router File
const employeeRoutes = require("./routes/employeeRoutes");
app.use("/employees", employeeRoutes);

//Import Client Router File
const clientRoutes = require("./routes/clientroutes");
app.use("/clients", clientRoutes);

//Import Project Router File
const projectsRoutes = require("./routes/projectRoutes");
app.use("/projects", projectsRoutes);

let port = 8000;

app.get("/", (req, res) => {
  res.send("You Contacted root Path");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
