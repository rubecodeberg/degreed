angular.module("movieApp").component('movieDetail', {
    templateUrl: './components/movie-detail.html',
    controllerAs: 'vm',
    bindings: {
        movie: '='
    }
})

