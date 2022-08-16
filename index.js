const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const special_characters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", ".", "?",
	"/"];

let alphabetic = [];

let char_length_input = document.getElementById('char_length');
let char_length = 15;
let special_toggle = document.getElementById('SpecialSwitch');
let numeric_toggle = document.getElementById('NumericSwitch');
let alpha_toggle = document.getElementById('AlphaSwitch');
let pw1_text = document.getElementById('pw1');
let pw2_text = document.getElementById('pw2');

let generate_button = document.getElementById('generate-btn');

generate_button.addEventListener('click', Generate_password);

function Generate_password() {
	alphabetic = [];
	if (alpha_toggle.checked) {
		Concat_arrays(characters);
	}
	if (special_toggle.checked) {
		Concat_arrays(special_characters);
	}
	if (numeric_toggle.checked) {
		Concat_arrays(numeric);
	}

	char_length = char_length_input.value;
	let password_1 = '';
	let password_2 = '';
	for (let i = 0; i < char_length; i++) {
		let random_index_pw1 = Math.floor(Math.random() * (alphabetic.length));
		let random_index_pw2 = Math.floor(Math.random() * (alphabetic.length));

		password_1 += alphabetic[random_index_pw1];
		password_2 += alphabetic[random_index_pw2];
	}

	if (password_1.length !== parseInt(char_length) || password_2.length !== parseInt(char_length)) {
		Generate_password();
	}
	pw1_text.innerHTML = password_1;
	pw2_text.innerHTML = password_2;
	console.log(password_1 + '     ' + password_2);
}

function Concat_arrays(arr) {
	alphabetic = alphabetic.concat(arr);
}





