const searcher = document.querySelector("#searcher");
searcher.addEventListener("keydown", function(event) {
  const result = document.querySelector(".result");
  const name = searcher.value;
  const enterKey = 13;
  if (event.which == enterKey) {
    const user = search(name);
    paint(user, result);
    event.preventDefault();
  }
  if (event.which == 8 || event.which == 46){
    clean(result)
  }
  
});

async function search(name) {
  const baseUrl = "https://swapi.co/api/people/?search=";
  const endpoint = baseUrl + name;

  let user = await fetch(endpoint);
  user = await user.json();

  return user;
}

async function paint(user, whereToPaint) {
  const resolveUser = await user;
  const name = resolveUser.results[0].name;
  whereToPaint.innerText = name;
}

async function clean(whereToClean){
    whereToClean.innerText = ''
}