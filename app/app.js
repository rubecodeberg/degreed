angular.module("movieApp", [])
    .filter('decade', function decadeFilterProvider() {
        return function decadeFilter(input, param) {
            var decadeKeys = Object.keys(param);            
            var decadeIsSet = decadeKeys.some(function(d){return param[d]});
            var decade;
            if(decadeIsSet) {
                decade = decadeKeys.filter(function(el){return param[el]})[0]
                if (decade === '1990s') {
                    return input.filter(function(movie) {return (parseInt(movie.Year) >= 1900 &&  parseInt(movie.Year) < 2000)})                   
                }
                if (decade === '2000s') {
                    return input.filter(function(movie) {return (parseInt(movie.Year) >= 2000 &&  parseInt(movie.Year) < 2010)})
                }                
            }
            return input;
        };
    })
    .controller('MainCtrl', ['MovieService', function MainCtrl(MovieService) {
        this.movies = MovieService.movies;
        this.decade = {
            '1990s': false,
            '2000s': false
        };
        this.toggleDecade = function(decade) {
            if(this.decade[decade] === false) { // if setting one to true, then set all others to false
                Object.keys(this.decade).forEach(function(el){
                    this.decade[el] = false;                    
                }.bind(this));
            }            
            this.decade[decade] = !this.decade[decade];
        }
      }]);
