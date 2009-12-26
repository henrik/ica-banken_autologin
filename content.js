var got_double_session_error = $('#lastErrCode').val()=="4";
if (got_double_session_error) {
  restartFullLogin();
} else {
  fillOutFormAndSubmit();
}


function restartFullLogin() {
  var login_url = chrome.extension.getURL("login.html");
  location.replace(login_url);
}


function fillOutFormAndSubmit() {
  chrome.extension.sendRequest('getPIN', function(pin) {

    var may_autologin = location.hash=='#autologin';
    var has_form = $('form.login-simple').length;

    if (!pin || !may_autologin || !has_form) return;
  
    $('#sel-simple').click();
    $('#PasswordSimple, #PasswordNormal').val(pin);
    $('input[name=JSEnabled]').val("1");

    // Note that we need to click this button explicitly, not just form.submit(),
    // for the log-in to be allowed.
    $('#LoginSimplifiedButton').click();

  });
}
