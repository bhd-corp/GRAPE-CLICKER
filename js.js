let cou = 160;
let gr = document.getElementById('gr');
gr.addEventListener('click', function(){
	let h2 = document.getElementById('h2');
	cou-=1;
	gr.style.animation = 'wer 0.3s linear';
	setTimeout( function(){
		gr.style.animation = 'none';
	}, 300);
	h2.innerHTML = cou;
	let count = Math.random(100000) * 999999;
	count = Math.ceil(count);
	let h1 = document.getElementById('h1');
	h1.innerHTML = count;
	if (cou < 1) {
		location.reload();
}

});

let b = document.getElementById('b');
b.addEventListener('click', function(){
	let h2 = document.getElementById('b');
	let h1 = document.getElementById('q');
	h2.innerHTML = 'когда вы нажмете на этот текст каждое слово будет преведено';
	h2.style.fontFamily = 'sans-serif';
	h1.innerHTML = 'ЦЕЛЬ:   ' + '444.444.444';
	h1.style.fontFamily = 'sans-serif';
});

let ww = document.getElementById('qq');
let k = document.getElementById('play');
k.addEventListener('click', function(){
	ww.style.display = 'none';
	let j = document.getElementById('ll');
	j.style.display = 'block';
});


let t = document.getElementById('left');
t.addEventListener('click', function(){
	ww.style.display = 'block';
	let j = document.getElementById('ll');
	j.style.display = 'none';
});