$(function(){
    $('.product-one__tabs .tab,setting__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs,setting__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
        $(".js-range-slider").ionRangeSlider({
            type: "double",
            min: 0,
            max: 1000,
            from:0,
            to: 900,
            prefix: ""
        });
        var balli = 0;
        $('.right1').on('click',function(){
            balli++;
            $('.schet').html(balli);
            $('.right1').addClass('none');
        });
        $('.right2').on('click',function(){
            balli++;
            $('.schet').html(balli);
            $('.right2').addClass('none');
        });
        $('.right3').on('click',function(){
            balli++;
            $('.schet').html(balli);
            $('.right3').addClass('none');
        });
        $('.right4').on('click',function(){
            balli++;
            $('.schet').html(balli);
            $('.right4').addClass('none');
        });
        
        $('.error1').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error1').addClass('none');
        });
        $('.error2').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error2').addClass('none');
        });
        $('.error3').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error3').addClass('none');
        });
        $('.error4').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error4').addClass('none');
        });
        $('.error5').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error5').addClass('none');
        });
        $('.error6').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error6').addClass('none');
        });
        $('.error7').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error7').addClass('none');
        });
        $('.error8').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error8').addClass('none');
        });
        $('.error9').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error9').addClass('none');
        });
        $('.error10').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error10').addClass('none');
        });
        $('.error11').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error11').addClass('none');
        });
        $('.error12').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error12').addClass('none');
        });
        $('.error13').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error13').addClass('none');
        });
          
    });
 
