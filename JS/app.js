/* Start up buttone */
let upBtn = document.querySelector(".up-btn");

upBtn.addEventListener("click" , () => {
    window.scrollTo( {
        top: 0,
        behavior: "smooth",
    })
})
/* End up buttone */
/* Start our-awesome-stat */
const stat = document.querySelector(".stat");
const nums = stat.getElementsByClassName("count");
let started = false ;

// progress
let progs = document.querySelectorAll(".prg");
let progHand = document.querySelector(".our-skills");
window.onscroll = function () {
    this.scrollY >= 800 ? (upBtn.style.right = "20px") : (upBtn.style.right = "-40px");

    if(window.scrollY >= stat.offsetTop){
        if (!started){
            Array.from(nums).forEach((num) => startCount(num));
        }
        started = true;
    }

    if(window.scrollY >= progHand.offsetTop){
        progs.forEach((prog) =>{
            prog.style.width = prog.dataset.prg;
        })
    }
}

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=> {
        el.innerHTML++;
        if(el.innerHTML == goal)
            clearInterval(count);
    } , 2000 / goal);
}
/* End our-awesome-stat */
// typing effect
const texts = ['Website' , 'Portfolio'];
let index = 0;
let counter = 0;
let letter = '';
let currentText = '';
(function type(){
    if (counter == texts.length){
        counter = 0;
    }
    currentText = texts[counter];
    letter = currentText.slice(0 , ++index);

    document.querySelector(".typing").textContent = letter;
    if(index == currentText.length){
        counter++;
        index = 0;
    }
    setTimeout(type , 400);
}())