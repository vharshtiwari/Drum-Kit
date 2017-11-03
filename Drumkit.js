
window.addEventListener("keydown",function (e) {
	const audio = document.querySelector(`audio[datakey = "${e.keyCode}"]`);
	const key = document.querySelector(`.Alphabet[datakey = "${e.keyCode}"]`);
	if(!audio){
		return;
	}
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
	setTimeout(function(){
		key.classList.remove('playing');
		console.log("ds");
	},70);

});

