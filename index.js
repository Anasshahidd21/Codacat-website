const curriculum = [
	{
		Title: 'Dancing Array',
		Description:
			'Teach Coda how to dance with arrays! Arrays are list of things, in this case list of dance moves. We taught Coda a few, see if you can use them',
		Image: './assets/dancingArray.PNG',
		URL: 'https://www.openprocessing.org/sketch/833648/',
	},

	{
		Title: 'Hide and Seek',
		Description:
			'Quick, we need to hide Coda!First, lets look at the array of hiding spots and hide our favourite cat at the first one we see',
		Image: './assets/hidenSeek.PNG',
		URL: 'https://www.openprocessing.org/sketch/833642/',
	},

	{
		Title: 'For Loops',
		Description:
			'This time you are going to learn about the for loop! For loops repeat actions over and over, and contain 3 parts -- The first section declares a variable, the second part sets the rules, and the third part updates the variable.',
		Image: './assets/forLoops.PNG',
		URL: 'https://www.openprocessing.org/sketch/833604',
	},

	{
		Title: 'Bubble Sort',
		Description: 'This is the explanation of bubble sort.',
		Image: './assets/screenshot.png',
		URL: 'https://www.openprocessing.org/sketch/833668',
	},

	{
		Title: 'CodaCat 101',
		Description:
			'But where is he? Write this line of code in the main function and press the play button at the top to make him appear :)',
		Image: './assets/screenshot.png',
		URL: 'https://www.openprocessing.org/sketch/833647',
	},

	// {
	// 	Title: 'Seventh Assignment',
	// 	Description: 'desc',
	// 	Image: './assets/screenshot.png',
	// 	URL: '',
	// },

	// {
	// 	Title: 'Eigth Assignment',
	// 	Description: 'desc',
	// 	Image: './assets/screenshot.png',
	// 	URL: '',
	// },
];

const next = document.querySelector('.next');
const title = document.querySelector('.title');
const description = document.querySelector('.desc');
const image = document.querySelector('#ss-image');
const lesson = document.querySelector('#lesson');
var count = 0;
next.addEventListener('click', () => {
	if (count >= curriculum.length - 1) {
		count = count % curriculum.length;
	}
	title.textContent = curriculum[count].Title;
	description.textContent = curriculum[count].Description;
	image.src = curriculum[count].Image;
	console.log(count);
	count++;
});
lesson.window.location.href = curriculum[curriculum.length - 1].URL;
lesson.addEventListener('click', () => {
	window.location.href = curriculum[count].URL;
});

// artwork

// const artwork = [
// 	'./assets/cheer.png',
// 	'./assets/dab.png',
// 	'./assets/fancy.png',
// 	'./assets/friend3yay.png',
// 	'./assets/friendsit.png',
// 	'./assets/hideandseek1.png',
// 	'./assets/hideandseek2.png',
// 	'./assets/hideandseek3.png',
// 	'./assets/hideandseek4.png',
// 	'./assets/yarnsit.png',
// 	'./assets/yarnyay.png',
// 	'./assets/yayfriend.png',
// 	'./assets/yeah.png',
// ];

// let art = 1;
// const artimage = document.querySelector('#artwork-image');
// const nextArt = document.querySelector('#nextArt');
