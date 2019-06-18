'use strict';

var app = angular.module("myApp", ["leaflet-directive"]);
app.controller('CoffeeController', [ '$scope', '$http', function($scope, $http) {

  // calling $scope.search with the fetch function, when the page loads for the first time. 
  // watch: contacts the remote API
  // fetch: makes a call to the API
  $scope.$watch('search', function() {
      fetch();
    });

	$scope.search = "Trento";

    angular.extend($scope, {
        coffeecentre: {
            lat: 0,
            lng: 0,
            zoom: 1
        }
    });	  

    function fetch(){
      $http.get('https://api.foursquare.com/v2/venues/explore/?near=' + $scope.search + ',%20Italy&venuePhotos=1&query=caffe&client_id=WAMOYWKSVBLDXMXLEONCZ0NYUWPMOI3GF3X22LF5KOVXYLKX&client_secret=WAIMERRVPCIB5HMPAKSC0K2TN5IPK1NR1OOUZCIT35V4PRIZ&v=20170623&m=foursquare')
        .then(function(response){ 
          $scope.coffee = response.data;
          $scope.coffeeItems = response.data.response.groups[0].items;
          console.log("Mi aiuti a trovare il mio caffè perfetto!");
          var Latitude = response.data.response.geocode.center.lat;
          var Longitude = response.data.response.geocode.center.lng

          console.log($scope.search);

           angular.extend($scope, {

	        coffeecentre: {
	            lat: Latitude,
	            lng: Longitude,
	            zoom: 13
	        },
	        markers: {
	            main_marker: {
	                lat: Latitude,
	                lng: Longitude,
	                focus: true,
	                title: "segno",
	                label: {
	                    message: "Ciao, sono la caffetteria più raccomandata!",
                     //    getMessageScope: function () {
                     //            return $scope;
                     //        },
                     //    message: "<p>{{ coffee.response.geocode.displayString }}</p>",
                     //    compileMessage: true,
	                       options: {
	                        noHide: true
	                    }
	                }
	            }
	        }
	    });	 

          }); 

        }


// this ensures that the entire text is selected when a user clicks on the text input
        $scope.select = function(){
         this.setSelectionRange(0, this.value.length);
    };

}]);