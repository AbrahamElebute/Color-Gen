const open = document.querySelector('.container');
		const close = document.querySelector('.close');
		var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
		open.addEventListener('click', () => {
			if (tl.reversed()) {
				tl.play();
			} else {
				tl.to('nav', { right: 0 })
					.to('nav', { height: '100vh' }, '-=.1')
					.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
					.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
					.to('nav h2', { opacity: 1 }, '-=1');
			}
		});

		close.addEventListener('click', () => {
			tl.reverse();
		});




        
///creating Array for Storage of colours
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
///  grabing element
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const body = document.body;
///  Event Listener

btn.addEventListener("click",function(){
    let  hexcolor = "#";

    for(let i = 0; i < 6; i++){
        let randomnumber = getRandomNumber();
        hexcolor +=  hex[randomnumber];
     }
     color.textContent=hexcolor;
     body.style.backgroundColor = hexcolor;

})
function getRandomNumber(){
    return Math.floor(Math.random() *hex.length);
 }