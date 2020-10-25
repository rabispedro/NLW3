const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage.js");

Database.then(async db => {
	//	Inserir dados na tabela
	// await db.run(`INSERT INTO orphanages (lat, lng, name, about, whatsapp, images, instructions, opening_hours, open_on_weekends) VALUES ("-18.91943", "-48.25690", "Lar das Meninas", "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.", "4002-8922", "https://images.unsplash.com/photo-1601564267524-75b772c1aa7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "Venha como se sentir a vontade e traga muito amor e paciência para dar", "Horário de visitas Das 8h até 18h", "1");`);

	await saveOrphanage(db, {lat: "-18.91148",
		lng: "-48.25134",
		name: "Lar de Play",
		about: "Vamos doar Plarstation 2",
		whatsapp: "4002-8922",
		description: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
		images: ["https://images.unsplash.com/photo-1601564267524-75b772c1aa7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "https://images.unsplash.com/photo-1590966473477-e74b95a0c407?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "https://images.unsplash.com/photo-1580673787750-2c5ef81571dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "https://images.unsplash.com/photo-1595295410103-402cb7cb0254?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "https://images.unsplash.com/photo-1598454444314-28649fcaa0e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "https://images.unsplash.com/photo-1576025773492-cc2eb828c42a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"].toString(),
		instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
		opening_hours: "Horário de visitas Das 10h até 20h",
		open_on_weekends: "1"});
	
	//	Consultar dados da tabela
	const selectedOrphanages = await db.all("SELECT * FROM orphanages");
	console.log(selectedOrphanages);

	//	Consultar somente 1 orfanato pelo ID
	// const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
	// console.log(orphanage);

	//	Deletar dado da tabela
	// console.log(await db.run('DELETE FROM orphanages'));
});
