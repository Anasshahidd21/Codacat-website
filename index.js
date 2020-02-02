const curriculum = [
	{
		Title: 'First Assignment',
		Description: 'desc',
        Image: './assets/screenshot.png',
        URL: 
	},

	{
		Title: 'Second Assignment',
		Description: 'desc',
        Image: './assets/screenshot.png',
        URL:
	},

	{
		Title: 'Third Assignment',
		Description: 'desc yolo',
        Image: './assets/hideandseek2.png',
        URL: ''
	},

	{
		Title: 'Fourth Assignment',
		Description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque blanditiis eum quibusdam officia illum, quo perferendis illo esse explicabo deserunt.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque blanditiis eum quibusdam officia illum, quo perferendis illo esse explicabo deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius exercitationem recusandae nobis minus. Dicta eos blanditiis, distinctio consequuntur qui quod quis enim iusto cumque doloremque? Exercitationem odit at quidem?',
        Image: './assets/screenshot.png',
        URL: ''
	},

	{
		Title: 'Fifth Assignment',
		Description: 'desc',
        Image: './assets/screenshot.png',
        URL: ''
	},

	{
		Title: 'Sixth Assignment',
		Description: 'desc',
        Image: './assets/screenshot.png',
        URL: ''
	},

	{
		Title: 'Seventh Assignment',
		Description: 'desc',
        Image: './assets/screenshot.png',
        URL: ''
	},

	{
		Title: 'Eigth Assignment',
		Description: 'desc',
        Image: './assets/screenshot.png',
        URL: ''
	},
];

const next = document.querySelector('.next');
const title = document.querySelector('.title');
const description = document.querySelector('.desc');
const image = document.querySelector('#ss-image');
const lesson = document.querySelector('#lesson');
var count = 1;
next.addEventListener('click', () => {
	if (count >= curriculum.length) {
		count = count % curriculum.length;
	}
	title.textContent = curriculum[count].Title;
	description.textContent = curriculum[count].Description;
	image.src = curriculum[count].Image;
	console.log(count);
	count++;
});
lesson.addEventListener('click', () => {
	window.location.href = curriculum[count].URL;
});
