
const contentReloj = document.querySelector('#reloj'),
			audio = document.querySelector('#audio'),
			startReloj = document.querySelector('#start-reloj'),
			stopReloj = document.querySelector('#stop-reloj'),
			startAudio = document.querySelector('#start-audio'),
			stopAudio = document.querySelector('#stop-audio')



// RELOJ

function getDate() {
	const date = new Date
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const seconds = date.getSeconds()

	return `${hours} : ${minutes} : ${seconds}`
}


let interval

// EMPEZAR RElOJ
startReloj.addEventListener('click', e => {
	if(e.target.className !== 'disable') {
		e.target.classList.add('disable')

		interval = setInterval(() => {
			contentReloj.textContent = getDate()
		}, 1000)	
	}
})


// PAUSAR RElOJ
stopReloj.addEventListener('click', e => {
	startReloj.classList.remove('disable')

	clearInterval(interval)
	contentReloj.textContent = ''
})



// ALARMA

function sonarAlarma() {
	audio.play()
}


function pararAlarma() {
	audio.pause()
}

startAudio.addEventListener('click', e => sonarAlarma())
stopAudio.addEventListener('click', e => pararAlarma())

