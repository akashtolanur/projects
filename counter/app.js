let count = 0;
let buttonsAll = document.querySelectorAll(".btn");
let countValue=document.querySelector(".count")

buttonsAll.forEach((e) => {
    e.addEventListener("click",(el)=>{
        console.log(el)
        if (el.currentTarget.classList.contains("Decrease")){
            count--;
            console.log(count)
            // countValue.innerText=count;

    }else if(el.currentTarget.classList.contains("Increase")){
        count++
        console.log(count)
    }else if(el.currentTarget.classList.contains("Reset")){
        count=0;
        console.log(count)
    }
    if(count>0){
                   countValue.style.color="green";
          }
                 if(count<0){
                     countValue.style.color="red"
                 }
                 if(count===0){
                     countValue.style.color="black"
                 }
    countValue.innerText=count;
})

})

// let count=0;

// let btns=document.querySelectorAll(".btn")
// let countValue=document.querySelector(".count")

// btns.forEach((e)=>{
//     console.log(e)
//     e.addEventListener("click", (el)=>{
//         // console.log(el);
//         // console.log(el.target);
//         // console.log(el.currentTarget);
//         const classTarget=el.target.classList;
//         if(classTarget.contains("Increase")){
//             count++
//             console.log(count)
//             countValue.textContent=count;
            
//         }else if(classTarget.contains("Decrease")){
//             count--
//             console.log(count)
//             // countValue.textContent=count;
//         }else{
//             count=0
//             // countValue.textContent=count;
//         }
//         if(count>0){
//             countValue.style.color="green";
//         }
//         if(count<0){
//             countValue.style.color="red"
//         }
//         if(count===0){
//             countValue.style.color="white"
//         }
//         countValue.textContent=count;
//     })
// });

