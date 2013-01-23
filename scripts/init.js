require(['knockout', 'appViewModel', 'domReady!'], function(ko, appViewModel) {
    window.viewModel = new appViewModel();
	ko.applyBindings(viewModel);
});