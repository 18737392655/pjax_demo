/**
 * element: ID
 * msg: 弹窗的条目
 * type: 弹窗类型  更多详见bootstrap官网
 * time: 延时时间 ，默认为2000 ms
 */
function _Toast(element, msg, type, time = 2000) {
	let timer = null;
	$("#" + element).html(msg);
	$("#" + element).addClass('alert-' + type);
	$("#attrBox").fadeIn();
	clearTimeout(timer);
	timer = setTimeout(function() {
		$("#" + element).fadeOut()
		$("#" + element).removeClass('alert-' + type)
	}, time)
}

/**
 * 防抖
 */

function debounce(method, delay) {
	var timer = null;
	return function() {
		var context = this,
			args = arguments;
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			method.apply(context, args);
		}, delay);
	}
}

function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if (c_end == -1) c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}

function setCookie(c_name, value, expiredays) {
	var exdate = new Date()
	exdate.setDate(exdate.getDate() + expiredays)
	document.cookie = c_name + "=" + escape(value) +
		((expiredays == null) ? "" : "; expires=" + exdate.toGMTString())
}


function hasClass(element, Hclass) {
	var patt = new RegExp(Hclass)
	return patt.test(element.className)
}

function addClass(element, Hclass) {
	if (!hasClass(element, Hclass)) {
		element.className += ' ' + Hclass;
	}
}

function removeClass(element, Hclass) {
	if (hasClass(element, Hclass)) {
		var re = element.className
		re = re.replace(Hclass, '');
		element.className = re
	}
}
