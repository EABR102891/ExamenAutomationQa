Feature: Buscar usuario por ID

Scenario: Crear y luego buscar usuario por ID
  Given url 'https://serverest.dev/usuarios'
  And request
  """
  {
    "nome": "Alexa Huaman",
    "email": "abc@correo.com",
    "password": "123456",
    "administrador": "true"
  }
  """
  When method POST
  Then status 201
  * def userId = response._id

  Given url `https://serverest.dev/usuarios/${userId}`
  When method GET
  Then status 200
  And match response._id == userId
  And match response.nome == "Alexa Huaman"
  And match response.email == "abc@correo.com"