const special = document.querySelector(".special")
special
    .parentElement
    .previousElementSibling
    .children[1].remove()


 const obj = {
    name:"jitendra",
    class:"final"
 }

//  console.log(obj.name)

//  console.log(Math.PI)

//  console.log(Math.E)

//  console.log(Math.sqrt(36))

//  console.log(Math.log2(8))


special.addEventListener("dblclick",function handle(e)
{
    e.target.style.backgroundColor="red"
    console.log(e)
}
)

special.addEventListener("mouseleave",function handle(e)
{
    e.target.style.backgroundColor="white"
    console.log(e)
}
)
// mouseleave
