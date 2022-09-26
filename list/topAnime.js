const List = require("./list");
const fs = require("fs");

var animeList = new List();
var anime = fs.readFileSync("./anime.txt", "utf-8").split("\n");
for (let i = 0; i < anime.length; i++) {
  anime[i] = anime[i].replace(/(\r)/gm, "").trim();
  animeList.append(anime[i]);
}

animeList.end();
animeList.next();

console.log(animeList.current());

// displays all items in current list
function display(list) {
  for (list.front(); list.current() < list.len(); list.next()) {
    if (list.getElement() instanceof User) {
      console.log(
        list.getElement()["name"] + ", " + list.getElement()["anime"]
      );
    } else {
      console.log(list.getElement());
    }
  }
}

var userList = new List();

class User {
  constructor(name, anime) {
    this.name = name;
    this.anime = anime;
  }
}

function checkOut(name, anime, animeList, userList) {
  if (animeList.contains(anime)) {
    var animeUser = new User(name, anime);
    userList.append(animeUser);
    animeList.remove(anime);
  } else {
    console.log(anime + "not available");
  }
}

function crunchyRoll() {
  console.log("Welcome to CrunchyRoll!: \n");
  display(animeList);
  checkOut("Todoroki", "A Silent Voice.", animeList, userList);
  console.log("\n Checkout, tada ri mastu \n");
  display(userList);
}
crunchyRoll();
