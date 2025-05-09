const price = document.querySelector ("#priceButtons");
const butLes = document.querySelectorAll (".butLes");
const quit = document.querySelector ("#closePrice");
const fakeMain = document.querySelector ("#fakeMain");

for (bL=0;bL<butLes.length;bL++) {
    butLes[bL].addEventListener ("click", ()=> {
        
        price.classList.toggle("jsnone");
        fakeMain.classList.toggle("blur");
        quit.addEventListener ("click", () => {
            price.classList.add("jsnone");
            fakeMain.classList.remove("blur");
        })
    })
}
