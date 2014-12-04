$ = window.$;
submitButton = function() {
  return $("a[name='submit_order']");
}

oneClickSubmitButton = $('<a>One click buy</a>');
oneClickSubmitButton.addClass(submitButton().attr('class'))

submitButton().parent().append(oneClickSubmitButton)  