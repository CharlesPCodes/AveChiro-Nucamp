$(function(){
    $(".carousel").carousel({
        interval: 2500
    });
    $('#communityButton').click(function () {
        $('#communityModal').modal('show');
    });
    
    $('#massageButton').click(function () {
        $('#massageModal').modal('show');
    });
    
    $('#contactButton').click(function () {
        $('#contactModal').modal('show');
    });
    
});
