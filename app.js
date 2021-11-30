const express = require("express");
const date = require(__dirname + "/date.js")
var app = express();
const router = express.Router()

var todoList = ["Buy food", "Cook food", "Eat food"];
var workItems = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: true
}));



app.use(express.static("public"));


app.post('/work', (req, res) => {
    console.log(req.body);
});

app.get('/', (req, res) => {
    let gotDay = date.getDay();


    res.render('list', {
        title: gotDay,
        newItems: todoList
    });


});

app.get('/work', (req, res) => {
    res.render('list', {
        title: "Work List",
        newItems: workItems
    });
});

app.post('/', (req, res) => {
    let input = req.body.todo;
    if (req.body.list === "Work") {
        workItems.push(input);
        res.redirect("/work");
    } else {
        // console.log(input);
        todoList.push(input);
        res.redirect("/");
    }
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
module.exports = app;