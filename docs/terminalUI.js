$('#terminal').terminal({
	hello: function(what) {
		this.echo('Hello, ' + what + '. Welcome to this terminal.');
	}
}, {
	greetings: 'Connected to LeumasMymik.Github.io',
	height: 400,
	prompt: 'guest@leumasmymik.github.io:~$ '
});

