// Email model

function email(id) {
    get: function(f) {return f(id);};
    put: function(f) {return f(id);};
    id: id;
    subject: "This is the Subject"; //get(subject);
    sender: "John Doe"; //get(sender);
    dateSent: "Today at 12:00am"; //get(dateSent);
    dateReceived: "date rec"; //get(dateRecieved);
    content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis bibendum fermentum. Donec dolor ante, iaculis at tincidunt ac, dapibus in risus. Donec aliquam consectetur libero, eget dignissim nisl laoreet quis. Suspendisse eget enim nec enim interdum commodo ut facilisis nunc. Aenean nec molestie nibh. Aliquam dolor enim, consequat vitae lobortis posuere, convallis eleifend lorem."; //get(content);
    tags: ['#calendar', '#links'] ;//get(tags);
    loc: "All Messages"; //get(loc);
    read: false; //get(read);
    deleted: false; //get(deleted);
    selected: false: //get(selected);
    parent: null; //get(parent);
    child: null; //(get(child);
};


    



}
