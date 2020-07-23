$(document).ready(function(){
	
   //submission scripts
  $('#contact-form').submit( function(){
		//statements to validate the form	
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var filter2 = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
		var email = document.getElementById('email_address');
		var phone_number = document.getElementById('phone_number');
		var others = document.getElementById('others');
		if (!filter.test(email.value)) {
			$('.email_address-missing').css({'opacity': 1 });
		} else {$('.email_address-missing').css({'opacity': 0 });}
		if (document.cform.name.value == "") {
			$('.name-missing').css({'opacity': 1 });
		} else {$('.name-missing').css({'opacity': 0 });}	
		if (document.cform.ic_number.value == "") {
			$('.ic_number-missing').css({'opacity': 1 });
		} else {$('.ic_number-missing').css({'opacity': 0 });}		
		if (document.cform.phone_number.value == "" || !filter2.test(phone_number.value)) {
			$('.phone_number-missing').css({'opacity': 1 });
		} else {$('.phone_number-missing').css({'opacity': 0 });}	
		if ((document.cform.name.value == "") || (!filter.test(email.value)) || (document.cform.ic_number.value == "") || (!filter2.test(phone_number.value))) {
			return false;
		} 

		if ($('#checkbox8').is(':checked') == true) {
			if ((document.cform.others.value == "")) {
				$('.others-missing').css({'opacity': 1 });
			} else {
				$('.others-missing').css({'opacity': 0 });
			}
		}
		
		if ((document.cform.name.value != "") 
		&& (filter.test(email.value)) 
		&& (document.cform.ic_number.value != "") 
			|| (filter2.test(phone_number.value))) {
			$.ajax({

				url: 'https://mrcbland.com.my/admin/index.php/API/vip_submit',
				type: 'POST',
				data: {
					name: $('#name').val(),
					ic_number: $('#ic_number').val(),
					phone_number: $('#phone_number').val(), 
					email_address: $('#email_address').val(), 
					tria_seputeh: $('#checkbox1').is(':checked') ? 1 : 0, 
					vivo: $('#checkbox2').is(':checked') ? 1 : 0, 
					the_sentral_residences: $('#checkbox3').is(':checked') ? 1 : 0, 
					kalista: $('#checkbox4').is(':checked') ? 1 : 0, 
					alstonia: $('#checkbox5').is(':checked') ? 1 : 0, 
					sentral_suites: $('#checkbox6').is(':checked') ? 1 : 0, 
					sidec: $('#checkbox7').is(':checked') ? 1 : 0, 
					q_sentral: $('#checkbox8').is(':checked') ? 1 : 0, 
					others: $('#checkbox9').is(':checked') ? 1 : 0, 
					others_text: $('#others').val()
				},
				crossDomain: true,
				datatype: 'application/json',
				success: function(response) { alert("Thank you for your registration. You should receive your e-card within the next week. Kindly save the e-card from your e-mail to your mobile phone."); history.go(0); },
				error: function(response) { alert("Thank you for your registration. You should receive your e-card within the next week. Kindly save the e-card from your e-mail to your mobile phone."); history.go(0); }
			});

			//stay on the page
			return false;
		} 
  }); 
});