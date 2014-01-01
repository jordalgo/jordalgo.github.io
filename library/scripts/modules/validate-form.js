define(['jQuery'], function($) {

    var validateForm = function() {
        var okSoFar=true,
            form = document.phpformmailer;

        var foundAt = form.email.value.indexOf("@",0);

        if (foundAt < 1 && okSoFar) {
            okSoFar = false;
            alert ("Please enter a valid email address.");
            form.email.focus();
            return false;
        }

        var e1 = form.email.value;
        var messagestr = form.themessage.value;
        var patt1 = /(<|&lt;)(.|\n)*?(>|&gt;)/g;
        var patt2 = /(http)/g;
        var patt3 = /(.com)|(.net)|(.edu)|(.org)|(.biz)/g;

        if (form.themessage.value === "" && okSoFar) {
            okSoFar=false;
            alert("Please enter the details for your enquiry.");
            form.themessage.focus();
            return false;
        }

        if ((messagestr.match(patt1) || messagestr.match(patt2) || messagestr.match(patt3)) && okSoFar) {

            okSoFar=false;
            alert("Sorry but I'm strict. Please no links or html in your message :(. ");
            form.themessage.focus();
            return false;
        }

        if (okSoFar === true) { $("#contact-form").submit(); }
        else { return false; }
    };

    return validateForm;
});