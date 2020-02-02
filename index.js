const curriculum = [
	{
		Title: 'First Assignment',
		Description: 'desc',
		Image: './assets/screenshot.png',
	},

	{
		Title: 'Second Assignment',
		Description: 'desc',
		Image: './assets/screenshot.png',
	},

	{
		Title: 'Third Assignment',
		Description: 'desc yolo',
		Image: './assets/hideandseek2.png',
	},

	{
		Title: 'Fourth Assignment',
		Description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque blanditiis eum quibusdam officia illum, quo perferendis illo esse explicabo deserunt.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque blanditiis eum quibusdam officia illum, quo perferendis illo esse explicabo deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius exercitationem recusandae nobis minus. Dicta eos blanditiis, distinctio consequuntur qui quod quis enim iusto cumque doloremque? Exercitationem odit at quidem?',
		Image: './assets/screenshot.png',
	},

	{
		Title: 'Fifth Assignment',
		Description: 'desc',
		Image: './assets/screenshot.png',
	},

	{
		Title: 'Sixth Assignment',
		Description: 'desc',
		Image: './assets/screenshot.png',
	},

	{
		Title: 'Seventh Assignment',
		Description: 'desc',
		Image: './assets/screenshot.png',
	},

	{
		Title: 'Eigth Assignment',
		Description: 'desc',
		Image: './assets/screenshot.png',
	},
];

const next = document.querySelector('.next');
const title = document.querySelector('.title');
const description = document.querySelector('.desc');
const image = document.querySelector('#ss-image');
var count = 0;
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
