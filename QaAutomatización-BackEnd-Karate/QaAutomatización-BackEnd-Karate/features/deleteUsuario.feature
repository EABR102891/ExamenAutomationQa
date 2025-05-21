Feature: Eliminar usuario

Scenario: Crear y luego eliminar usuario
  # Crear usuario
  Given url 'https://serverest.dev/usuarios'
  And request
  """
  {
    "nome": "Alexa Delete",
    "email": "alexa.delete@correo.com",
    "password": "123456",
    "administrador": "true"
  }
  """
  When method POST
  Then status 201
  * def userId = response._id

  # Eliminar usuario
  Given url `https://serverest.dev/usuarios/${userId}`
  When method DELETE
  Then status 200
  And match response.message == "Registro excluído com sucesso"