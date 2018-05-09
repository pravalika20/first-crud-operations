var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        controller:'ProController',
        templateUrl:'views/pro.html'
    })

	.when('/products/view', {
		controller:'ProductsController',
		templateUrl: 'views/products.html'
	})
	.when('/products/details/:id',{
		controller:'ProductsController',
		templateUrl: 'views/product_details.html'
	})
	.when('/products/add',{
		controller:'ProductsController',
		templateUrl: 'views/add_product.html'
	})
	.when('/products/edit/:id',{
		controller:'ProductsController',
		templateUrl: 'views/edit_product.html'
	})
    .when('/products/edit',{
		controller:'ProductsController',
		templateUrl: 'views/edit.html'
	})
     .when('/products/delete',{
		controller:'ProductsController',
		templateUrl: 'views/delete.html'
	})
    
	.otherwise({
		redirectTo: '/'
	});
});