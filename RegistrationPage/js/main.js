(function($) {

  $('#meal_preference').parent().append('<ul class="list-item" id="newmeal_preference" name="meal_preference"></ul>');
  $('#meal_preference option').each(function(){
      $('#newmeal_preference').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
  });
  $('#meal_preference').remove();
  $('#newmeal_preference').attr('id', 'meal_preference');
  $('#meal_preference li').first().addClass('init');
  $("#meal_preference").on("click", ".init", function() {
      $(this).closest("#meal_preference").children('li:not(.init)').toggle();
  });
  
  var allOptions = $("#meal_preference").children('li:not(.init)');
  $("#meal_preference").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $("#meal_preference").children('.init').html($(this).html());
      allOptions.toggle();
  });

  var marginSlider = document.getElementById('slider-margin');
  if (marginSlider != undefined) {
      noUiSlider.create(marginSlider, {
            start: [500],
            step: 10,
            connect: [true, false],
            tooltips: [true],
            range: {
                'min': 0,
                'max': 1000
            },
            format: wNumb({
                decimals: 0,
                thousand: ',',
                prefix: '$ ',
            })
    });
  }
  $('#reset').on('click', function(){
      $('#register-form').reset();
  });

  $('#register-form').validate({
      
    rules : {
        firstname : {
            required: true,
			lettersonly:true,
        },
        lastname : {
            required: true,
			lettersonly:true,
        },
        age : {
            required: true,
            digits:true,
			range:[1,100],
		
           
        },
        meal_preference : {
            required: true,
            
        },
        contact : {
            required: true,
            number:true,
			maxlength:10,
			
			
            
        },
        city :{
            required:true,
			lettersonly:true,
        },
        state :{
            required:true,
			lettersonly:true,
        },
        userid :{
            required:true,
        },
        password :{
            
            required:true,
          
            
            
           
        },
      

    },
   
      
    onfocusout: function(element) {
        $(element).valid();
    },
});

    jQuery.extend(jQuery.validator.messages, {
        required: " Enter the Details ",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: " digits are allowed only",
        digits: " digits are allowed only",
		
		maxlength:jQuery.validator.format("please enter 10 Digin Mobile Number"),
	    minlength:jQuery.validator.format("please enter atleat 8 charchter"),
		
        creditcard: "",
        equalTo: ""
    });
})(jQuery);

