---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---
<html>
<style>
        html, body, h1, h2, h3, h4, h5, h6, p {
		font-family:  "Courier";
        }

        body {
                background-color:#cce9ff;
        }

	.site-header  {
		background-color:#ffe9ec;
	}

	.site-footer {
		background-color:#ffe9ec;
	}
</style>
<head>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://unpkg.com/js-polyfills/keyboard.js"></script>
<script src="https://cdn.jsdelivr.net/gh/jcubic/static/js/wcwidth.js"></script>
<script src="https://unpkg.com/jquery.terminal/js/jquery.terminal.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/jquery.terminal/css/jquery.terminal.min.css" />
<script>
$('body').terminal({
    help: function() {
        this.echo('List of Commands:');
        this.echo('        help         ' + 'help');
    }
}, {
    greetings: 'Connected to LeumasMymik.Github.io',
    prompt: 'guest@leumasmymik.github.io:~$ '
});
</script>
</head>
<body>
</body>
</html>
