'use strict';

/**
 * @ngdoc function
 * @name AniTheme.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of AniTheme
 */
angular.module('AniTheme').controller('ChartCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.line = {
	    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	          data: [
	      [65, 59, 80, 81, 56, 55, 40],
	      [28, 48, 40, 19, 86, 27, 90]
	    ],
	    colours: ['#3CA2E0','#F0AD4E','#7AB67B','#D9534F','#3faae3'],
	    onClick: function (points, evt) {
	      console.log(points, evt);
	    }

    };

    $scope.bar = {
	    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
		data: [
		   [65, 59, 80, 81, 56, 55, 40],
		   [28, 48, 40, 19, 86, 27, 90]
		],
		colours: ['#3CA2E0','#F0AD4E','#7AB67B','#D9534F','#3faae3']
    	
    };

    $scope.donut = {
    	labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    	      data: [300, 500, 100],
    	      colours: ['#3CA2E0','#F0AD4E','#7AB67B','#D9534F','#3faae3']
    };

     $scope.pie = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    	      data : [300, 500, 100],
    	      colours: ['#3CA2E0','#F0AD4E','#7AB67B','#D9534F','#3faae3']
    };
    
}]);