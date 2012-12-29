
(function() {

// Email model

    function email() {
	var self = this;
	self.id = 0;
	self.subject = "This is the Subject"; //get(subject);
	self.sender = "John Doe"; //get(sender);
	self.dateSent = "Today at 12:00am"; //get(dateSent);
	self.dateReceived = "date rec"; //get(dateRecieved);
	self.contentPreview =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis bibendum fermentum. Donec dolor..."; //get(content);
	self.tags = [{tag: '#calendar', count: 0}, {tag: '#links', count: 0}] ;//get(tags);
	self.loc = "All Messages"; //get(loc);
	self.read = false; //get(read);
	self.deleted = false; //get(deleted);
	self.selected = false; //get(selected);
	self.parent = null; //get(parent);
	self.child = null; //(get(child);
	self.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis bibendum fermentum. Donec dolor ante, iaculis at tincidunt ac, dapibus in risus. Donec aliquam consectetur libero, eget dignissim nisl laoreet quis. Suspendisse eget enim nec enim interdum commodo ut facilisis nunc. Aenean nec molestie nibh. Aliquam dolor enim, consequat vitae lobortis posuere, convallis eleifend lorem. Donec ipsum velit, venenatis at sollicitudin id, sollicitudin sit amet libero. Vestibulum cursus tellus eget mauris interdum ac bibendum sapien dictum. In hac habitasse platea dictumst. Nam auctor, magna vel tincidunt egestas, augue est posuere magna, eu venenatis tortor dolor eu turpis. Suspendisse at turpis vitae lacus elementum egestas. Pellentesque ut dolor vel mauris lacinia posuere."
    };


   function foldrs(fs) {
	var str = "<ul>";
	for (var i = 0; i < fs.length; i += 1) {
	    str +=  "<li class='subfolder'><h3>" + fs[i].name + "</h3>";
	    if (fs[i].subfolders) {
		str += foldrs(fs[i].subfolders) +  "</li>";
	    } else {
		str +=  "</li>" ;
	    };
	};
	return (str + "</ul>");
    };		
    

    var sampleFolders = 
	[{name: 'Personal', subfolders: [{name: 'Fun'}, {name: 'Family'}]},
	 {name: 'Work', subfolders: [{name: 'Project 1'}, 
				     {name: 'Project 2', subfolders: [{name: 'Part 1'}, {name: 'Part 2'}]}]},
	 {name: 'Misc'}];
    
    var sampleTags = [{tag: '#calendar', count: '(0)'}, {tag: '#links', count:  '(0)'},
		      {tag: '#cool', count:  '(0)'}, {tag: '#images', count:  '(0)'}];

    var sampleEmails = [(new email()), (new email()), (new email()), (new email()), 
		  (new email()), (new email()), (new email()), (new email())];

    var sampleButtons = [{html: "<button id='delete_button' type='button'>Delete</button>"},
		   {html: "<button id='done_button' type='button'>Done!</button>"},
		   {html: "<button id='later_button' type='button'>Later</button>"}];

    var sampleWidgets = [{html: "<div id='widget_1'>Widget 1</div>"},
		   {html: "<div id='widget_2'>Widget 2</div>"},
		   {html: "<div id='widget_3'>Widget 3</div>"}];

    var sampleNav = [{name: "Inbox", onPage: true, url: "/inbox"}, 
		     {name: "Inquiries", onPage: false, url: "/inquiries"},
		     {name: "Accounts", onPage: false, url: "/accounts"}];


    function inboxModel(f, t, e, b, w, n) {
	var self = this;
	self.folders = f;
	self.tags = t;
	self.folder_list = "<ul class='folders sideBlock'>" + foldrs(f).substring(4);
	self.emails = e;
	self.buttons = b;
	self.widgets = w;
	self.nav = n;
    };
console.log("<ul class='folders sideBlock'>" + foldrs(sampleFolders).substring(4));

    var m = new inboxModel(sampleFolders, sampleTags, sampleEmails, sampleButtons, sampleWidgets, sampleNav);
    ko.applyBindings(m);

})();
