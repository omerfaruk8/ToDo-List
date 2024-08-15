angular.module('gorevUygulamasi', [])
.controller('GorevKontrolcusu', function($scope) {
    $scope.gorevler = [];
    
    $scope.gorevEkle = function() {
        if ($scope.yeniGorev) {
            $scope.gorevler.push({ad: $scope.yeniGorev, tamamlandi: false});
            $scope.yeniGorev = '';
        }
    };

    $scope.tamamDurumunuDegistir = function(gorev) {
        gorev.tamamlandi = !gorev.tamamlandi;
    };

    $scope.gorevSil = function(index) {
        $scope.gorevler.splice(index, 1);
    };
});