$(document).ready(function(){
$("#submit").click(function(){
var name = $("#name").val();
var email = $("#email").val();
var password = $("#password").val();
var contact = $("#contact").val();
var country =$("#country").val();
var address =$("#address").val();

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'name1='+ name + '&email1='+ email + '&password1='+ password + '&contact1='+ contact + '&country1='+ country + '&address1=' + address;
if(name==''||email==''||password==''||contact=='')
{
alert("Please Fill All Fields");
}
else
{
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "submit.php",
data: dataString,
cache: false,
success: function(result){
// alert(result);
$("#name").val('');
$("#email").val('');
$("#password").val('');
$("#contact").val('');
$('#country').val('');
$('#address').val('');
}
});
}
return false;
});
});