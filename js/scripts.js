var elBtnRec = document.querySelector(".btn-rec");
var elBtnSrc = document.querySelector(".btn-src");
var elBtnRes = document.querySelector(".btn-rest");
var elForm = document.querySelector(".form")
var elInput = document.querySelector(".input")
var elLabel = document.querySelector(".label")
var elAnim = document.querySelector(".animation")
var elContent = document.querySelector(".content")
var record = new webkitSpeechRecognition();
window.document.body.style.transition = "0.2s ease"



record.lang = "en-US"


elBtnRec.addEventListener("click", function(){
   console.log("Yozuv boshlandi");
   elAnim.style.display = "block";
   record.start();
})

elInput.addEventListener("focus", function(){
   elBtnSrc.style.display = "block"
   elBtnRes.style.display = "block"
   elBtnRec.style.display = "none"
})
elBtnRec.addEventListener("click", function(){
   elLabel.style.display = "none"
   elBtnRes.style.display = "block"
})

record.onerror = function(){
   console.log("Xatolik yuz berdi");
}

record.onresult = function(evt){

   elContent.innerHTML = null;
   
   var command = evt["results"][0][0]["transcript"];

   console.log(command);

   function insertion(voice, actorName, aSurName, aFullName, array) {

      if (actorName == voice || aSurName == voice || aFullName == voice) {
         
         for (const actor of array) {

            let newImg = document.createElement("img")
            let newBox = document.createElement("div")
            let newTitle = document.createElement("h2")
            let born = document.createElement("p")
            let describ = document.createElement("p")
            let link = document.createElement("a")
            let list = document.createElement("ul")

            for (const film of actor.films) {
               let item = document.createElement("li")
               let href = document.createElement("a")
               let film_img = document.createElement("img")
               let film_info = document.createElement("div")
               let film_name = document.createElement("h3")
               let film_date = document.createElement("p")


               film_img.setAttribute("src", film.img)
               film_img.setAttribute("width", "100%")
               item.setAttribute("class", "item")
               film_info.setAttribute("class", "film-info")
               film_name.textContent = film.name
               film_name.setAttribute("class", "film-name")
               film_date.textContent = film.year
               href.setAttribute("href", film.link)
               href.setAttribute("class", "film-link")


               item.appendChild(href)
               href.appendChild(film_img)
               href.appendChild(film_info)
               film_info.appendChild(film_name)
               film_info.appendChild(film_date)
               list.appendChild(item)

               href.addEventListener("mouseover", function() {
                  window.document.body.setAttribute("class", "bg-white " + film.bg)
               })
               href.addEventListener("mouseout", function() {
                  window.document.body.setAttribute("class", "bgi-close")
               })
            }


            newImg.setAttribute("src", actor.img)
            newImg.setAttribute("width", "400px")
            newBox.setAttribute("class", "info")
            list.setAttribute("class", "list")
            link.setAttribute("href", actor.wiki)
            link.setAttribute("class", "btn btn-primary")

            newTitle.textContent = actor.name
            born.textContent = actor.born
            describ.textContent = actor.description
            link.textContent = ("Lear more")


            elContent.appendChild(newImg)
            elContent.appendChild(newBox)
            newBox.appendChild(newTitle)
            newBox.appendChild(born)
            newBox.appendChild(describ)
            newBox.appendChild(link)
            newBox.appendChild(list)
         }

      }
   }

   insertion(command, "Andrew", "Garfield", "Andrew Garfield", actors)
   insertion(command, "Emma", "Stone", "Emma Stone", emma)
   insertion(command, "Margot", "Robbie", "Margot Robbie", margo)
   insertion(command, "Leonardo", "DiCaprio", "Leonardo DiCaprio", leo)
   insertion(command, "Jonny", "Depp", "Johnny Depp", depp)

}

elForm.addEventListener("submit", function(evt){
   evt.preventDefault()

   elContent.innerHTML = null;

   function insertion(input, actorName, aSurName, aFullName, array) {

      if (actorName == input || aSurName == input || aFullName == input) {
         
         for (const actor of array) {

            let newImg = document.createElement("img")
            let newBox = document.createElement("div")
            let newTitle = document.createElement("h2")
            let born = document.createElement("p")
            let describ = document.createElement("p")
            let link = document.createElement("a")
            let list = document.createElement("ul")

            for (const film of actor.films) {
               let item = document.createElement("li")
               let href = document.createElement("a")
               let film_img = document.createElement("img")
               let film_info = document.createElement("div")
               let film_name = document.createElement("h3")
               let film_date = document.createElement("p")


               film_img.setAttribute("src", film.img)
               film_img.setAttribute("width", "100%")
               item.setAttribute("class", "item")
               film_info.setAttribute("class", "film-info")
               film_name.textContent = film.name
               film_name.setAttribute("class", "film-name")
               film_date.textContent = film.year
               href.setAttribute("href", film.link)
               href.setAttribute("class", "film-link")


               item.appendChild(href)
               href.appendChild(film_img)
               href.appendChild(film_info)
               film_info.appendChild(film_name)
               film_info.appendChild(film_date)
               list.appendChild(item)

               href.addEventListener("mouseover", function() {
                  window.document.body.setAttribute("class", "bg-white " + film.bg)
               })
               href.addEventListener("mouseout", function() {
                  window.document.body.setAttribute("class", "bgi-close")
               })
            }


            newImg.setAttribute("src", actor.img)
            newImg.setAttribute("width", "400px")
            newBox.setAttribute("class", "info")
            list.setAttribute("class", "list")
            link.setAttribute("href", actor.wiki)
            link.setAttribute("class", "btn btn-primary")

            newTitle.textContent = actor.name
            born.textContent = actor.born
            describ.textContent = actor.description
            link.textContent = ("Lear more")


            elContent.appendChild(newImg)
            elContent.appendChild(newBox)
            newBox.appendChild(newTitle)
            newBox.appendChild(born)
            newBox.appendChild(describ)
            newBox.appendChild(link)
            newBox.appendChild(list)
         }

      }

   }

   insertion(elInput.value, "Andrew", "Garfield", "Andrew Garfield", actors)
   insertion(elInput.value, "andrew", "garfield", "andrew garfield", actors)
   insertion(elInput.value, "Emma", "Stone", "Emma Stone", emma)
   insertion(elInput.value, "emma", "stone", "emma stone", emma)
   insertion(elInput.value, "Margot", "Robbie", "Margot Robbie", margo)
   insertion(elInput.value, "margot", "robbie", "margot robbie", margo)
   insertion(elInput.value, "Leonardo", "DiCaprio", "Leonardo DiCaprio", leo)
   insertion(elInput.value, "leonardo", "dicaprio", "leonardo dicaprio", leo)
   insertion(elInput.value, "Johnny", "Depp", "Johnny Depp", depp)
   insertion(elInput.value, "johnny", "depp", "johnny depp", depp)


})

record.onend = function(){
   console.log("Yozuv tugadi");
   elAnim.style.display = "none"
}
