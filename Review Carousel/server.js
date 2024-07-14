const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img:
            "images/susan smith.jpg.jpg",
        text:
            `"My name is Susan Smith. I"m from Australia. I work in Web Development company. Because I interested in Web Development. So I join this company for increase my experience in Developmen"`
    },
    {
        id: 2,
        name: "Poul Heman",
        job: "Graphic Designer",
        img:
            "images/Poul Heman.jpg",
        text:
            `"My name is Poul Heman. I come Germani for Graphic Desiging. I belong to Canda. I want to become a perfect Graphic Designer.That"s why i become to America."`
    },
    {
        id: 3,
        name: "Tom Henry",
        job: "UX Designer",
        img:
            "images/Tom Henry.jpg",
        text:
            `"My name is Tom Henry. My profession is UX designer. I belong to England. I really very enjoy this profession. I am manager in Ux Designer company."`
    },
    {
        id: 4,
        name: "Ben Jones",
        job: "Web Designer",
        img:
            "images/Ben Jones.jpg",
        text:
            `"My name is Ben Jones. I"m from Newzeland. I come Eurpe For study of Web Designing. This is my passion to become a perfect Web Designer. That"s why i come in America."`
    },

]

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const preBtn = document.querySelector(".pre-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0;

window.addEventListener("DomContentloaded" , function(){
    showPerson()
})

function showPerson() {
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0
    }
    showPerson()
})

preBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1
    }
    showPerson()
})

randomBtn.addEventListener("click" , function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
})