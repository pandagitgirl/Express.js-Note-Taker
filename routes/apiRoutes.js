const router = require("express").Router();
const dbjson = require("../data/db.json");
const fs = require("fs");

//  Route handlers
router.get("/notes", (req, res) =>
  fs.readFile("data/db.json", "utf8", (err, notes) => {
    if (err) {
      console.error(err);
      return;
    }
    let parsedNotes = JSON.parse(notes);
    console.log("get from frontend", parsedNotes);
    return res.send(parsedNotes);
  })
);

router.post("/notes", (req, res) => {
  fs.readFile("data/db.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let oldNotes = JSON.parse(data);
    let newNotes = [...oldNotes, req.body];

    fs.writeFile("data/db.json", JSON.stringify(newNotes), (error) => {
      if (error) {
        console.log(error);
      }
      res.sendStatus(200);
    });
  });
});


module.exports = router