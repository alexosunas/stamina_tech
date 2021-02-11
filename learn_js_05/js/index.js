let name = 'Anakin';
	let lastName = 'Skywalker';
	let age = '10';
	let affiliation = 'The Jedi Order';
	let email = 'Anakin@JediOrder.com';
	let fullName = `${name} ${lastName}`;

	console.log(`
Full Name: ${fullName.toUpperCase()}
Age: ${age}
Affiliation: ${affiliation}
Email: ${email.toLowerCase()}
`);

	name = 'Darth';
	lastName = 'Vader';
	age = '24';
	affiliation = 'Galactic Empire';
	email = 'Vader@GalacticEmpire.org';
	fullName = `${name} ${lastName}`;

	console.log(`
Full Name: ${fullName.toUpperCase()}
Age: ${age}
Affiliation: ${affiliation}
Email: ${email.toLowerCase()}
`);