$('body').append('###html###');

var wrapper = document.querySelector('#pw-wrapper'),
controlPanel = document.querySelector('#pw-control-panel'),
mover = document.querySelector('.mover'),
x = 0,
y = 0,
mousedown = false;
var timeoutID = null;
var emojiID = 0;

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
	$('.userItemContents--C2UQJ').click();
	$('li[data-test=setstatus]').click();
	$('li[data-test=' + status + ']').click();
}

function activateDarkMode() {
	$('#pw-control-panel').css('color', 'white');
	$('#pw-control-panel').css('background-color', '#0f0f0f');
	$('#pw-control-panel table tbody').css('border', '1px solid #262626');
	$('#pw-control-panel table tr').css('color', 'white');
	$('#pw-control-panel table tr').css('background-color', '#262626');
}
