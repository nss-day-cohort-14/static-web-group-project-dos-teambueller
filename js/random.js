var testimonials = [
	"Better than eating bugs in the woods - John Rambo",
	"Now with fewer holes! - Johny",
	"I've lost that sinking feeling - Alex P.",
	"Nothing Fishy about Thom's Cruises - Thom",
	"The food is tasty, and the staff is disease-free - Thom",
	"A truly Un-hole-y experience - Michael from next door",
]

var random = Math.floor(Math.random() * testimonials.length)

console.log(random)

var texts = document.getElementById("placeHolder");




console.log(testimonials[random])

texts.innerHTML += `<h3>${testimonials[random]}</h3>`




