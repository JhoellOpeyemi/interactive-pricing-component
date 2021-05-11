// Query Selectors
const price = document.querySelector('span.amount');
const period = document.querySelector('span.period');
const pageViews = document.querySelector('.page-views span');
const toggle = document.querySelector('.toggle');
const checkbox = document.querySelector('.toggle input');
const range = document.querySelector('.slider');

// Event Listeners
toggle.addEventListener('click', toggleBillings);
range.addEventListener('input', setMonthlyPrice);
range.addEventListener('input', setYearlyPrice);

// Functions
function toggleBillings() {
	toggle.classList.toggle('active');

	if (period.innerText == '/ month') {
		period.innerText = '/ year';
	} else {
		period.innerText = '/ month';
	}

	setYearlyPrice();
}

function setMonthlyPrice() {
	if (range.value == 1) {
		const color = `linear-gradient(
            90deg,
            hsl(174, 77%, 80%) 0%,
            hsl(224, 65%, 95%) 0%
        )`; // background color on slider
		range.style.background = color;
		price.innerText = '8.00';
		pageViews.innerText = '10K';
	}
	if (range.value == 2) {
		const color = `linear-gradient(
            90deg,
            hsl(174, 77%, 80%) 25%,
            hsl(224, 65%, 95%) 25%
        )`; // background color on slider
		range.style.background = color;
		price.innerText = '12.00';
		pageViews.innerText = '50K';
	}
	if (range.value == 3) {
		const color = `linear-gradient(
            90deg,
            hsl(174, 77%, 80%) 50%,
            hsl(224, 65%, 95%) 50%
        )`; // background color on slider
		range.style.background = color;
		price.innerText = '16.00';
		pageViews.innerText = '100K';
	}
	if (range.value == 4) {
		const color = `linear-gradient(
            90deg,
            hsl(174, 77%, 80%) 75%,
            hsl(224, 65%, 95%) 75%
        )`; // background color on slider
		range.style.background = color;
		price.innerText = '24.00';
		pageViews.innerText = '500K';
	}
	if (range.value == 5) {
		const color = `linear-gradient(
            90deg,
            hsl(174, 77%, 80%) 100%,
            hsl(224, 65%, 95%) 100%
        )`; // background color on slider
		range.style.background = color;
		price.innerText = '36.00';
		pageViews.innerText = '1M';
	}
}

function setYearlyPrice() {
	if (range.value == 1) {
		if (toggle.classList.contains('active')) {
			price.innerText = (
				(price.innerText - price.innerText * 0.25) *
				12
			).toFixed(2);
		} else {
			price.innerText = '8.00';
		}
	}

	if (range.value == 2) {
		if (toggle.classList.contains('active')) {
			price.innerText = (
				(price.innerText - price.innerText * 0.25) *
				12
			).toFixed(2);
		} else {
			price.innerText = '12.00';
		}
	}

	if (range.value == 3) {
		if (toggle.classList.contains('active')) {
			price.innerText = (
				(price.innerText - price.innerText * 0.25) *
				12
			).toFixed(2);
		} else {
			price.innerText = '16.00';
		}
	}

	if (range.value == 4) {
		if (toggle.classList.contains('active')) {
			price.innerText = (
				(price.innerText - price.innerText * 0.25) *
				12
			).toFixed(2);
		} else {
			price.innerText = '24.00';
		}
	}

	if (range.value == 5) {
		if (toggle.classList.contains('active')) {
			price.innerText = (
				(price.innerText - price.innerText * 0.25) *
				12
			).toFixed(2);
		} else {
			price.innerText = '36.00';
		}
	}
}
