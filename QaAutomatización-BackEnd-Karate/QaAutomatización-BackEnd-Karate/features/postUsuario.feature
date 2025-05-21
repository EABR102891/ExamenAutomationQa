Feature: Registrar un nuevo usuario

Scenario: Crear usuario con datos válidos
  Given url 'https://serverest.dev/usuarios'
  And request
  """
  {
    "nome": "Test QA",
    "email": "abc@correo.com",
    "password": "123456",
    "administrador": "true"
  }
  """
  When method POST
  Then status 201
  And match response.message == "Registro exitoso"