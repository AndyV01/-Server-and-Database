function createNewLink (newLink) {
    const newCard = document.createElement ("div")
    const title = document.createElement ("a")
    const url = document.getElementsByTagName("a")

    title.href = newLink.link
    title.textContent = newLink.name
    
    newCard.appendChild(title)
    
 
    newCard.classList.add("newLink")

    const container = document.getElementsByTagName ("aside")
    container[0].appendChild(newCard)
}

const listOfLink = [
{
    id: 1,
    name: "11 Curiosidades del Cannabis",
    link: "https://www.humboldtseeds.net/es/semillas-marihuana-autoflorecientes/",

},
{
    id: 2,
    name: "100 maneras de colocarse",
    link: "https://www.thekushbrothersseeds.com/blog/",
},
{
    id: 3,
    name: "Como conservar semillas de Marihuana",
    link: "https://www.thekushbrothersseeds.com/blog",
},
{
    id: 4,
    name: "El color de las flores de Marihuana",
    link: "https://www.thekushbrothersseeds.com/blog",

},
{
    id: 5,
    name: "Todo lo que tienes que saber sobre kush",
    link: "https://www.thekushbrothersseeds.com/blog",

},
{
    id: 6,
    name: "El olor de las Flores de Marihuana",
    link: "https://www.thekushbrothersseeds.com/blog",

},
{
    id: 7,
    name: "Kush free ",
    link: "https://www.thekushbrothersseeds.com/blog",

},
{
    id: 8,
    name: "Weed de alto nivel",
    link: "https://www.thekushbrothersseeds.com/blog",

},
{
    id: 9,
    name: "Salvia un potente Alucinogeno",
    link: "https://www.thekushbrothersseeds.com/blog",

},
{
    id: 10,
    name: "Nuevas semillas CBD",
    link: "https://www.thekushbrothersseeds.com/blog",

},
]

listOfLink.map(function(linkList) {
    createNewLink(linkList)
})
