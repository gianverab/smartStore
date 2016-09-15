(function(){
	var app = angular.module('store', [])

	.controller('StoreCtrl', ['$http', function ($http){
		var store = this;
		store.products = [];

		$http.get('./products.json').success(function (data){
			store.products = data;
		});
	}])
	.controller('PanelCtrl', function() {
		this.tab = 3;

		this.selectTab = function (setTab) {
			this.tab = setTab;
		};
		this.isSelected = function (checkTab) {
			return this.tab === checkTab;
		};
	})
	.controller('ReviewCtrl', function () {
		this.review = {};

		this.addReview = function (product) {
			product.reviews.push(this.review);
			this.review = {};
		}
	})
	.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html'
		};
	});

})();