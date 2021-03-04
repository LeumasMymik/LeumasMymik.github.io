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
var blog13 = "https://leumasmymik.github.io/senior-design/2021/01/30/blog-13.html";
var blog14 = "https://leumasmymik.github.io/senior-design/2021/02/21/blog-14.html";
var blog15 = "https://leumasmymik.github.io/senior-design/2021/02/28/blog-15.html";
var blog16 = "https://leumasmymik.github.io/senior-design/2021/03/07/blog-16.html";
var blog17 = "https://leumasmymik.github.io/senior-design/2021/03/14/blog-17.html";
var blog18 = "https://leumasmymik.github.io/senior-design/2021/03/21/blog-18.html";
var blog19 = "https://leumasmymik.github.io/senior-design/2021/03/28/blog-19.html";
var blog20 = "";
var blog21 = "";
var blog22 = "";
var blog23 = "";
var blog24 = "";
var home = "https://leumasmymik.github.io/";
var about = "https://leumasmymik.github.io/about";
var terminal = "https://leumasmymik.github.io/terminal";
var pepeSad = "https://raw.githubusercontent.com/LeumasMymik/LeumasMymik.github.io/master/docs/myPics/sadge.png";
var pepeGlad = "https://raw.githubusercontent.com/LeumasMymik/LeumasMymik.github.io/master/docs/myPics/gladge.png";
var blogArray = [blog0, blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9, blog10, blog11, blog12, blog13, blog14, blog15, blog16, blog17, blog18, blog19, blog20, blog21, blog22, blog23, blog24];

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
		this.echo('     [greet]          ' + 'Greets user based on the current time.');
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
			case 13:
				window.open(blogArray[13]);
				break;
			case 14:
				window.open(blogArray[14]);
				break;
			case 15:
				window.open(blogArray[15]);
				break;
			case 16:
				window.open(blogArray[16]);
				break;
			case 17:
				window.open(blogArray[17]);
				break;
			case 18:
				window.open(blogArray[18]);
				break;
			case 19:
				window.open(blogArray[19]);
				break;
			case 20:
				window.open(blogArray[20]);
				break;
			case 21:
				window.open(blogArray[21]);
				break;
			case 22:
				window.open(blogArray[22]);
				break;
			case 23:
				window.open(blogArray[23]);
				break;
			case 24:
				window.open(blogArray[24]);
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
		for (var i = 0; i < blogArray.length; i++){
			this.echo('          Blog ' + i + ':        ' + blogArray[i]);
		}
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
	},

	// javascript function that uses an if, else if, and else statements to greet a user based on specific times
	"greet": function() {
		if (new Date().getHours() >= 6 && new Date().getHours() < 12) {
			this.echo('     Good Morning!');
		}
		else if(new Date().getHours() >= 12 && new Date().getHours() < 17){
			this.echo('     Good Afternoon!');
		}
		else if(new Date().getHours() >= 17 && new Date().getHours() < 22){
			this.echo('     Good Evening!');
		}
		else if(new Date().getHours() >= 22 && new Date().getHours() < 6){
			this.echo('     Good Night!');
		}
		else{
			this.echo('     Hello World!');
		}
	}
}, {
	// will not provide the JQuerry error message for missing params
	checkArity: false,
	// message that comes up on start up
	greetings: '...Connected to LeumasMymik.Github.io\n\n     Type [-help] for more options.\n',        
	// message that signifies the user of the terminal
	prompt: 'guest@leumasmymik.github.io:~$ '
});
