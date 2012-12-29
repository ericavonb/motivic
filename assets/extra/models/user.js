// User model

function user(id) {
    var firstName, lastName, emailName, folders, widgets, emails;

    function getter(f) {
	return f(this.id);
    };

    function getFirstName() {
	var name = "First"; //getter(getFirstName)
	this.firstName = name;
	return name;
    };
    
    function getLastName() {
	var name = "Last";
	this.lastName = name;
	return name;
    };

    function getEmailName() {
	var name = "Email";
	this.emailName = name;
	return name;
    };

    function getFolders() {
	var f = [{name: folder}];
	this.folders = f;
	return f;
    };

    function getWidgets() {
	var w = [{name: widget}];
	this.widgets = w;
	return w;
    };

    function getEmails(n, sorter) {
	var e = [{}];
	this.emails = {sorter e};
	return e;
    };

};
