$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});
$('body').scrollspy({ target: '#navbar-example3' });
