const btn = document.querySelector("button")
const email = document.querySelector("input")
const msg = document.querySelector("small")
const error = document.querySelector("#error")
const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let emailValue = email.value;
	if (validateEmail(emailValue)) {
		form.classList.remove('error');
	} else {
		form.classList.add('error');
	}
    if (emailValue.includes('@') && emailValue.includes('.com')) {
        msg.style.display = 'none';
        error.style.display = 'none';
    } else {
        msg.style.display = 'flex';
        error.style.display = 'flex';
    }
});
function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}