$(document).ready(function() {

    //submission scripts
    $('#mia-form').submit(function() {
        //statements to validate the form	
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var filter2 = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        var email = document.getElementById('email_address');
        var contact_no = document.getElementById('contact_no');

        if (!filter.test(email.value)) {
            $('.email_address-missing').css({
                'opacity': 1
            });
        } else {
            $('.email_address-missing').css({
                'opacity': 0
            });
        }
        if (document.cform.name.value == "") {
            $('.name-missing').css({
                'opacity': 1
            });
        } else {
            $('.name-missing').css({
                'opacity': 0
            });
        }
        if (document.cform.ic_number.value == "") {
            $('.ic_number-missing').css({
                'opacity': 1
            });
        } else {
            $('.ic_number-missing').css({
                'opacity': 0
            });
        }
        if (document.cform.contact_no.value == "" || !filter2.test(contact_no.value)) {
            $('.contact_no-missing').css({
                'opacity': 1
            });
        } else {
            $('.contact_no-missing').css({
                'opacity': 0
            });
        }
        if (document.cform.mia_membership.value == "") {
            $('.mia_membership-missing').css({
                'opacity': 1
            });
        } else {
            $('.mia_membership-missing').css({
                'opacity': 0
            });
        }
        if (document.cform.name.value == "" ||
            !filter.test(email.value) ||
            document.cform.ic_number.value == "" ||
            !filter2.test(contact_no.value) ||
            document.cform.mia_membership.value == "") {
            return false;
        }

        if (document.cform.name.value != "" &&
            filter.test(email.value) &&
            document.cform.ic_number.value != "" &&
            filter2.test(contact_no.value) &&
            document.cform.mia_membership.value) {
            $.ajax({

                url: 'https://mrcbland.com.my/admin/index.php/API/mia_submit',
                type: 'POST',
                data: {
                    name: $('#name').val(),
                    ic_number: $('#ic_number').val(),
                    email_address: $('#email_address').val(),
                    contact_no: $('#contact_no').val(),
                    mia_membership: $('#mia_membership').val()
                },
                crossDomain: true,
                datatype: 'application/json',
                success: function(response) {
                    alert("ThankThank you for your registration, your MRCB Land VIP e-card will be emailed to you shortly!");
                    history.go(0);
                },
                error: function(response) {
                    alert("Thank you for your registration, your MRCB Land VIP e-card will be emailed to you shortly!");
                    history.go(0);
                }
            });

            //stay on the page
            return false;
        }
    });
});