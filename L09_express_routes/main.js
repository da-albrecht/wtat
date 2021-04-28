const homeController = require("./controllers/homeController");
const port = 3000,
    express = require("express"),
    app = express();

app.get("/items/:vegetable", homeController.sendReqParam);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

app.use(homeController.logRequestPaths);

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.post("/", homeController.logPostObjects);