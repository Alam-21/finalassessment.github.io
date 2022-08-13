const cards = document.getElementById("cards");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const json = JSON.parse(this.responseText);
    const data = json.data;
    console.log('The fetched data:',json);
    

    data.map((e) => {
      const card = document.createElement("div");
      const name = document.createElement("span");
      const email = document.createElement("span");
      const img = document.createElement("img");

      card.className = "card";
      name.className = "name";
      email.className = "email";

      name.innerHTML = e.first_name + " " + e.last_name;
      email.innerHTML = `Email : ${e.email}`;
      img.src = e.avatar;
      card.appendChild(name);
      card.appendChild(img);
      card.appendChild(email);
      cards.appendChild(card);
    });
  }
};
xhttp.open("GET", "https://reqres.in/api/users?page=1", true);
xhttp.send();
