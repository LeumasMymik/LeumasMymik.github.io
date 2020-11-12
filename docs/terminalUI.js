$('#terminal').terminal({
	help: function() {
		this.echo('List of Commands:');
		this.echo('        help         ' + 'help');
	}
}, {
	greetings: 'Connected to LeumasMymik.Github.io',
	height: 400,
	prompt: 'guest@leumasmymik.github.io:~$ '
});
