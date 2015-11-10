var result = document.getElementById('result');

document.addEventListener('mousemove', 
	e => result.innerHTML = e.clientX + ', ' + e.clientY, 
	false);