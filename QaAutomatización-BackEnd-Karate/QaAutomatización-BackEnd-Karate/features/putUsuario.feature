Feature: Actualizar un usuario existente

Scenario: Crear y actualizar usuario
  # Crear usuario
  Given url 'https://serverest.dev/usuarios'
  And request
  """
  {
    "nome": "Alexa QA",
    "email": "abc@correo.com",
    "password": "123456",
    "administrador": "true"
  }
  """
  When method POST
  Then status 201
  * def userId = response._id

  # Actualizar usuario
  Given url `https://serverest.dev/usuarios/${userId}`
  And request
  """
  {
    "nome": "Alexa Actualizada",
    "email": "abc@correo.com",
    "password": "123456",
    "administrador": "false"
  }
  """
  When method PUT
  Then status 200
  And match response.message == "Registro alterado com sucesso"