$('body').append('###html###');

var wrapper = document.querySelector('#pw-wrapper'),
controlPanel = document.querySelector('#pw-control-panel'),
mover = document.querySelector('.mover'),
x = 0,
y = 0,
mousedown = false;
var timeoutID = null;
var emojiID = 0;
var statusTimeout = 30;

mover.addEventListener('mousedown', function (e) {
	mousedown = true;
	x = controlPanel.offsetLeft - e.clientX;
	y = controlPanel.offsetTop - e.clientY;
	$('.move-index').css('z-index', '9996');
	$('#pw-wrapper').css('pointer-events','auto');
}, true);

wrapper.addEventListener('mouseup', function (e) {
	mousedown = false;
	$('.move-index').css('z-index', '9999');
	$('#pw-wrapper').css('pointer-events','none');
}, true);

wrapper.addEventListener('mousemove', function (e) {
	if (mousedown) {
		controlPanel.style.left = e.clientX + x + 'px';
		controlPanel.style.top = e.clientY + y + 'px';
	}
}, true);

function setStatus(status) {
	if (statusTimeout > 0) {
		timeoutID = setTimeout(function() {
			clearStatus();
		}, statusTimeout * 1000);
	}
	$('.userItemContents--C2UQJ').click();
	$('li[data-test=setstatus]').click();
	$('li[data-test=' + status + ']').click();
}

function clearStatus() {
	if (timeoutID !== null) {
		clearTimeout(timeoutID);
		timeoutID = null;
	}
	$('li[data-test=clearStatus]').click();
}

function changeStatusTimeout() {
	if (timeoutID !== null) {
		clearTimeout(timeoutID);
		timeoutID = null;
	}
	let timeoutInterval = $('#status-timeout').val();
	statusTimeout = parseInt(timeoutInterval);
	if (statusTimeout > 0) {
		$('#status-timeout-span').text(timeoutInterval + 's');
	} else {
		$('#status-timeout-span').text('deact.');
	}
}

function sendMessageToChat(message) {
	/* @tjarbo here is your 🍺! */
	const triggerReact = new Event('input', { bubbles: true});
	const bbbInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
	const bbbChatInput = document.getElementById('message-input');
	const bbbChatButton = document.querySelector('[aria-label="Nachricht senden"]');
	bbbInputValueSetter.call(bbbChatInput, message);
	bbbChatInput.dispatchEvent(triggerReact);
	bbbChatButton.click();
}

async function toggleWebcamOption() {
	var delay = ms => new Promise(res => setTimeout(res, ms));
	document.querySelector('[aria-label="Verbindungsstatus der Teilnehmer anzeigen"]').click();
	await delay(100);
	document.querySelector('[aria-label="Verbindungsstatus"] div div').querySelectorAll('div')[10].click();
	await delay(100);
	document.querySelector('[aria-label="Schließen Verbindungsstatus"]').click();
}

function toggleBBBCPSize(option) {
	if (option === 'expand') {
		$('#pw-control-panel').height('250px');
		$('.not-expanded-tr').addClass('expanded-tr');
		$('.expanded-tr').removeClass('not-expanded-tr');
	} else {
		$('#pw-control-panel').height('180px');
		$('.expanded-tr').addClass('not-expanded-tr');
		$('.not-expanded-tr').removeClass('expanded-tr');
	}
}

function activateDarkMode() {
	$('#pw-control-panel').css('color', 'white');
	$('#pw-control-panel').css('background-color', '#0f0f0f');
	$('#pw-control-panel table tbody').css('border', '1px solid #262626');
	$('#pw-control-panel table tr').css('color', 'white');
	$('#pw-control-panel table tr').css('background-color', '#262626');
}
