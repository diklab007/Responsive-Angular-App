//home page controller
app.controller('SkillsPageCtrl', function ( $scope) {
    $scope.frontLabels = ["JS", "Angular", "jQuery", "Bootstrap", "CSS3", "HTML5", "SCSS"];
    $scope.backLabels = ["C#", "PHP", "node", "mySQL"];
    $scope.backData = [3, 3.5, 2, 4];
    $scope.frontData = [4, 4, 4, 3.5, 4, 4.5, 3.5];
    $scope.options =  {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        display: true,
                        position: 'left',
                        ticks: {
                            min: 1,
                    max: 5,
                    stepSize: 1,
                    callback: function(value, index, values) {

                    if(value == 1){
                        var dasLabel='Heard about it';                             
                    }
                    if(value == 2){
                        var dasLabel='basic';                            
                    }
                    if(value == 3){
                        var dasLabel='good';                             
                    }
                    if(value == 4){
                        var dasLabel='awesome';                             
                    }
                    if(value == 5){
                        var dasLabel='ninja';                             
                    }                         

                        return dasLabel;
                    }
                        },
                        scaleLabel:{
                            display: true,
                            labelString: 'Level',
                            fontColor: "#546372"
                        }
                    }   
                ]
            }
        };

});

