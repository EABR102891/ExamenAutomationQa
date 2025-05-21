Feature: Obtener todos los usuarios

Scenario: Obtener lista de usuarios correctamente
  Given url 'https://serverest.dev/usuarios'
  When method GET
  Then status 200
  And match response.quantidade > 0
  And match response.usuarios[0] contains { nome: '#string', email: '#string', _id: '#string' }