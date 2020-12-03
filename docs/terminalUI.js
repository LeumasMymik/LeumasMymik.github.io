// Variables used
var blog0 = "https://leumasmymik.github.io/senior-design/2020/08/31/blog-0.html";
var blog1 = "https://leumasmymik.github.io/senior-design/2020/09/10/blog-1.html";
var blog2 = "https://leumasmymik.github.io/senior-design/2020/09/17/blog-2.html";
var blog3 = "https://leumasmymik.github.io/senior-design/2020/09/24/blog-3.html";
var blog4 = "https://leumasmymik.github.io/senior-design/2020/10/01/blog-4.html";
var blog5 = "https://leumasmymik.github.io/senior-design/2020/10/09/blog-5.html";
var blog6 = "https://leumasmymik.github.io/senior-design/2020/10/16/blog-6.html";
var blog7 = "https://leumasmymik.github.io/senior-design/2020/10/23/blog-7.html";
var blog8 = "https://leumasmymik.github.io/senior-design/2020/10/28/blog-8.html";
var blog9 = "https://leumasmymik.github.io/senior-design/2020/11/05/blog-9.html";
var blog10 = "https://leumasmymik.github.io/senior-design/2020/11/12/blog-10.html";
var blog11 = "https://leumasmymik.github.io/senior-design/2020/11/19/blog-11.html";
var blog12 = "https://leumasmymik.github.io/senior-design/2020/12/02/blog-12.html";
var home = "https://leumasmymik.github.io/";
var about = "https://leumasmymik.github.io/about";
var terminal = "https://leumasmymik.github.io/terminal";
var pepeSad = "https://raw.githubusercontent.com/LeumasMymik/LeumasMymik.github.io/master/docs/myPics/sadge.png";
var pepeGlad = "https://raw.githubusercontent.com/LeumasMymik/LeumasMymik.github.io/master/docs/myPics/gladge.png";
var blogArray = [blog0, blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9, blog10, blog11, blog12];

// Relates the JQuery terminal to the html body element
$('body').terminal({
	// Javascript function that provides the commands available
	"-help": function() {
		this.echo('');
		this.echo('List of Commands:');
		this.echo('----------------------------------------------------------------------------------------');
		this.echo('     [-help]          ' + 'Provides the available commands.');
		this.echo('     [ls]             ' + 'Lists all of the navigatable Blogs and Sites.');
		this.echo('     [clear]          ' + 'Clears the terminal screen.');
		this.echo('     [home]           ' + 'Opens up the home page.');
		this.echo('     [about]          ' + 'Opens up the about page.');
		this.echo('     [blog]           ' + 'Parameter [BLOG #]: Opens a specified blog post.');
		this.echo('     [sadge]          ' + 'Parameters [width] && [height]: Sadge.');
		this.echo('     [gladge]         ' + 'Parameters [width] && [height]: Gladge.');
		this.echo('----------------------------------------------------------------------------------------');
		this.echo('');
		this.echo('### If you do not input parameters for the sadge and gladge command a default sizing has been provided! ###');
		this.echo('');
	},

	// Javascript fucntion that opens up a specified blog article hosted on the site
	"blog": function(args) {
		switch(args) {
			case 0:
				window.open(blogArray[0]);
				break;
			case 1:
				window.open(blogArray[1]);
				break;
			case 2:
				window.open(blogArray[2]);
				break;
			case 3:
				window.open(blogArray[3]);
				break;
			case 4:
				window.open(blogArray[4]);
				break;
			case 5:
				window.open(blogArray[5]);
				break;
			case 6:
				window.open(blogArray[6]);
				break;
			case 7:
				window.open(blogArray[7]);
				break;
			case 8:
				window.open(blogArray[8]);
				break;
			case 9:
				window.open(blogArray[9]);
				break;
			case 10:
				window.open(blogArray[10]);
				break;
			case 11:
				window.open(blogArray[11]);
				break;
			case 12:
				window.open(blogArray[12]);
				break;
			default:
				this.echo('');
				this.echo('     Current List of Blogs [0-12]:');
				this.echo('    -------------------------------------------');
				this.echo('          blog 0     -    ' + 'opens blog 0');
				this.echo('          ...');
				this.echo('          blog 12    -    ' + 'opens blog 12');
				this.echo('    -------------------------------------------');
				this.echo('');
				this.echo('     Example Command:         ' + 'blog 4');
				this.echo('');
		}
	},

	// Javascript function that lists the currently available pages on this site
	"ls": function() {
		this.echo('');
		this.echo('     Home Page:          ' + home);
		this.echo('     About Page:         ' + about);
		this.echo('     Terminal Page:      ' + terminal);
		this.echo('');
		this.echo('     Blogs:');
		this.echo('          Blog 0:        ' + blog0);
		this.echo('          Blog 1:        ' + blog1);
		this.echo('          Blog 2:        ' + blog2);
		this.echo('          Blog 3:        ' + blog3);
		this.echo('          Blog 4:        ' + blog4);
		this.echo('          Blog 5:        ' + blog5);
		this.echo('          Blog 6:        ' + blog6);
		this.echo('          Blog 7:        ' + blog7);
		this.echo('          Blog 8:        ' + blog8);
		this.echo('          Blog 9:        ' + blog9);
		this.echo('          Blog 10:       ' + blog10);
		this.echo('          Blog 11:       ' + blog11);
		this.echo('          Blog 12:       ' + blog12);
		this.echo('');
	},

	// javascript function that opens up the home page of this site
	"home": function() {
		window.open(home);
	},

	// javascript function that opens up the about page of this site
	"about": function() {
		window.open(about);
	},

	// javascript function that shows an image of the sadge emote
	"sadge": function(width, height) {
		const sad = $('<img src="' + pepeSad + '" alt="sadge" width="' + width + '" height="' + height + '">');
		this.echo(sad);
	},
	
	// javascript function that shows an image of the gladge emote
	"gladge": function(width, height) {
		const glad = $('<img src="' + pepeGlad + '" alt="gladge" width="' + width + '" height="' + height + '">');
		this.echo(glad);
	}
}, {
	// will not provide the JQuerry error message for missing params
	checkArity: false,
	// message that comes up on start up
	greetings: '...Connected to LeumasMymik.Github.io\n\n     Type [-help] for more options.\n',        
	// message that signifies the user of the terminal
	prompt: 'guest@leumasmymik.github.io:~$ '
});
