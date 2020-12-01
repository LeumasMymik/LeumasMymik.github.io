$('table').terminal({
	    "-help": function() {
		            this.echo('List of Commands:');
		            this.echo('        help         ' + 'help');
		        }
}, {
	        greetings: '...Connected to LeumasMymik.Github.io\n\n     Type [-help] for more options.\n',
	        prompt: 'guest@leumasmymik.github.io:~$ '
});
