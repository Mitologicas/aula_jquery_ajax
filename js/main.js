function consultaCep() {
  var cep = document.getElementById('cep').value;
  console.log(cep);
  var url = 'https://viacep.com.br/ws/' + cep + '/json/';

  console.log(url);
  $.ajax({
    url: url,
    type: 'GET',
    success: function (res) {
      document.getElementById('logradouro').innerHTML = res.logradouro;
      $('#bairro').html(res.bairro);
      $('#uf').html(res.uf);
      $('#complemento').html(res.complemento);
      $('#localidade').html(res.localidade);
      $('.cep').show();
    },
  });
}

$(function () {
  $('.cep').hide();
});
