let h1 = document.querySelector("h1")

h1.textContent = "this is new heading"
// changing style of element
// h1.style.color="blue"
h1.style.backgroundColor="yellow"

// remove a element
// h1.remove()

const h2 = document.createElement("h2")
h2.textContent = "created h2"

// before after
// h1.before(h2)

const div = document.querySelector("div")
// append prepend
div.prepend(h2)

h1.classList.add("hide")

h1.classList.remove("hide")

const p= document.querySelector("p");

p.classList.toggle("red")

for(let i=0;i<10;i++)
{
    console.log(i)
}


console.error("custom error");
console.warn("custom error");


let item1 = "samosa"

div.innerHTML=`  <ul>
                 <li>${item1}</li>
                 <li>item2</li>
                </ul>`


function myfun()
{
    h1.classList.toggle("red")
}

// setInterval(myfun,100);

// setTimeout(myfun,5000);

