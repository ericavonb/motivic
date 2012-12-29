
(function() {

// Email model

    function email() {
	id: 0;
	subject: "This is the Subject"; //get(subject);
	sender: "John Doe"; //get(sender);
	dateSent: "Today at 12:00am"; //get(dateSent);
	dateReceived: "date rec"; //get(dateRecieved);
	contentPreview:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis bibendum fermentum. Donec dolor..."; //get(content);
	tags: ['#calendar', '#links'] ;//get(tags);
	loc: "All Messages"; //get(loc);
	read: false; //get(read);
	deleted: false; //get(deleted);
	selected: false: //get(selected);
	parent: null; //get(parent);
	child: null; //(get(child);
    };
    
    function foldrs(fs) {
	var str = "<ul>";
	for (var i = 0; i < fs.length; i++) {
	    if (fs[i].subfolders) {
		str = str + "<li> <h3>" + fs[i].name 
		    + "</h3>" + foldrs(fs[i].subfolders) + "</li>";
	    };
	};
	return str + "</ul>";
    };		
    

    var sampleFolders = 
	[{name: 'Personal', subfolders: [{name: 'Fun'}, {name: 'Family'}]},
	 {name: 'Work', subfolders: [{name: 'Project 1'}, 
				     {name: 'Project 2', subfolders: [{name: 'Part 1'}, {name: 'Part 2'}]}]},
	 {name: 'Misc'}];
    
    var sampleTags = [{tag: '#calendar', count: 0}, {tag: '#links', count: 0},
		{tag: '#cool', count: 0}, {tag: '#images', count: 0}];

    var sampleEmails = [(new email()), (new email()), (new email()), (new email()), 
		  (new email()), (new email()), (new email()), (new email())];

    var sampleButtons = [{html: "<button id='delete_button' type='button'>Delete</button>"},
		   {html: "<button id='done_button' type='button'>Done!</button>"},
		   {html: "<button id='later_button' type='button'>Later</button>"}];

    var sampleWidgets = [{html: "<div id='widget_1'>Widget 1</div>"},
		   {html: "<div id='widget_2'>Widget 2</div>"},
		   {html: "<div id='widget_3'>Widget 3</div>"}]


    function inboxModel(f, t, e, b, w) {
	var self = this;
	self.folders = f;
	self.tags = t;
	self.folder_list = foldrs(f);
	self.emails = e;
	self.buttons = e;
	self.widgets = w;
    };

    var m = new inboxModel(sampleFolders, sampleTags, sampleEmails, sampleButtons, sampleWidgets);
    ko.applyBindings(m);

})();
