const ELEMENTS = {
	FORM_INPUT: document.querySelector('.form__input'),
	FORM_SUBMIT: document.querySelector('.form__submit'),
	GOALS_LIST: document.querySelector('.goals-list'),
	FILTER_OPTIONS: document.querySelector('.filter__options'),
};

function addGoal() {
	if (ELEMENTS.FORM_INPUT.value === '') return;

	const newGoal = `
		<article class="goal progress animate__animated animate__rotateInDownRight">
            <header class="button__group">
				<button class="button--achieved">
					<span>achieved</span>
				</button>
				<button class="button--dismiss">
					<span>dismiss</span>
				</button>
			</header>
			<footer>
				<p class="goal__text">${ELEMENTS.FORM_INPUT.value}</p>
			</footer>
		</article>`;

	ELEMENTS.GOALS_LIST.insertAdjacentHTML('beforeend', newGoal);
	ELEMENTS.FORM_INPUT.value = '';
}

function filterGoals(event) {
	const filterStatus = event.target.value;
	const allGoals = document.querySelectorAll('.goal');

	allGoals.forEach((goal) => {
		// Make all goals display none first. This is for the animation.
		goal.style.display = 'none';
		goal.classList.remove(
			'animate__rotateInDownRight',
			'animate__rubberBand',
		);

		if (goal.classList.contains(filterStatus)) {
			setTimeout(() => {
				goal.style.display = 'block';
				goal.classList.add('animate__rubberBand');
			}, 100);
		}
	});
}

async function dismissGoal(dismissButton) {
	dismissButton.setAttribute('disabled', 'true');
	const goal = dismissButton.parentElement.parentElement;

	await goal.animate(
		[
			{ transform: 'translateX(-1%)', offset: 0 },
			{ transform: 'translateX(-3%)', offset: 0.3 },
			{ transform: 'translateX(15%)', offset: 0.5 },
			{ transform: 'translateX(-80%)', opacity: 0, offset: 1 },
		],
		{
			duration: 1000,
			easing: 'ease-in-out',
			fill: 'forwards',
		},
	).finished;

	await goal.animate([{ height: '100px' }, { height: '0px', margin: 0 }], {
		duration: 700,
		delay: 300,
		easing: 'ease-in-out',
		fill: 'forwards',
	}).finished;

	goal.remove();
}

function achieveGoal(achievedButton) {
	const goal = achievedButton.parentElement.parentElement;

	if (goal.classList.contains('progress')) {
		goal.classList.replace('progress', 'achieved');
		return;
	}

	goal.classList.replace('achieved', 'progress');
}

ELEMENTS.GOALS_LIST.addEventListener('click', (event) => {
	if (event.target.classList.contains('button--achieved')) {
		achieveGoal(event.target);
	}

	if (event.target.classList.contains('button--dismiss')) {
		dismissGoal(event.target);
	}
});

ELEMENTS.FORM_SUBMIT.addEventListener('click', () => {
	addGoal();
});

ELEMENTS.FORM_INPUT.addEventListener('keyup', (event) => {
	if (event.key !== 'Enter') return;

	addGoal();
});

ELEMENTS.FILTER_OPTIONS.addEventListener('change', filterGoals);
