// Main viewmodel class
define(['knockout-2.2.1'], function(ko) {
    return function appViewModel() {
        this.firstName = ko.observable('Bert');
        this.firstNameCaps = ko.computed(function() {
            return this.firstName().toUpperCase();
        }, this);
		this.isOpen = ko.observable();
    };
});