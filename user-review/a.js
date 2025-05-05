const reviews = [
    {id: 1,
    name: "Sam Tailor",
    job: "Web developer",
    img: "assets/user1.jpg",
    info: "Sam Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias in ipsum laudantium ut dolorum, voluptates natus nostrum, reprehenderit quaerat blanditiis perferendis veritatis."},
    {id: 2,
    name: "Scarlett Johnson",
    job: "Full stack developer",
    img:"assets/user2.jpg",
    info: "scarlett Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias in ipsum laudantium ut dolorum, voluptates natus nostrum, reprehenderit quaerat blanditiis perferendis veritatis."},
    {id: 3,
    name: "Tom Smith",
    job: "UI developer",
    img: "assets/user3.jpg",
    info: "Tom Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias in ipsum laudantium ut dolorum, voluptates natus nostrum, reprehenderit quaerat blanditiis perferendis veritatis."},
    {id: 4,
    name: "Luca John",
    job: "UI/UX developer",
    img: "assets/user4.jpg",
    info: "Luca Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias in ipsum laudantium ut dolorum, voluptates natus nostrum, reprehenderit quaerat blanditiis perferendis veritatis."},
    {id: 5,
    name: "Aidan Garcia",
    job: "Software developer",
    img: "assets/user5.jpg",
    info: "Aidan Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias in ipsum laudantium ut dolorum, voluptates natus nostrum, reprehenderit quaerat blanditiis perferendis veritatis."}
]

// accessing the elements

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const surpriseMeBtn = document.querySelector(".surprise-me-btn")

const personImg = document.querySelector("#person-img")
const personName = document.querySelector("#name")
const personJob = document.querySelector("#job")
const personInfo = document.querySelector("#info");

let initialIndex = 0;

window.addEventListener("load", () => {
    showPerson()
});

const showPerson=()=>{
    const item = reviews[initialIndex];
    personImg.src = item.img;
    personName.textContent=item.name
    personJob.textContent=item.job
    personInfo.textContent=item.info
}

nextBtn.addEventListener("click", ()=>{
    initialIndex++;
    if(initialIndex>reviews.length-1){
        initialIndex=0;
    }
    showPerson()
    console.log(initialIndex)
});
prevBtn.addEventListener("click", ()=>{
    initialIndex--;
    if(initialIndex<0){
        initialIndex=reviews.length-1;
    }
    showPerson()
    console.log(initialIndex)
});

surpriseMeBtn.addEventListener("click", ()=>{
    initialIndex= Math.floor(Math.random()*reviews.length);
    showPerson();
    console.log(initialIndex)
});








