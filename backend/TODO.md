Proyecto: Gestor de Tareas Colaborativo
Descripción:
Una aplicación donde los usuarios puedan:

Registrarse y autenticarse.
Crear, editar y eliminar tareas.
Compartir tareas con otros usuarios para colaboración.
Requerimientos del proyecto
Frontend (React)
Rutas protegidas:
Página de registro/login.
Página para gestionar tareas (solo accesible tras autenticación).
Funciones principales:
Listar las tareas del usuario.
Crear, editar y eliminar tareas.
Compartir una tarea con otro usuario (escribe su correo).
Ver si una tarea es colaborativa y con quién está compartida.
Tecnologías sugeridas:
React con Hooks.
React Router para la navegación.
Context API o Redux para manejar el estado global.
Backend (Node.js + Express)
Endpoints principales:
Autenticación (registro y login con JWT).
CRUD de tareas (Create, Read, Update, Delete).
Compartir tarea: una tarea puede ser compartida con otros usuarios (relación).
Endpoints para listar tareas colaborativas y sus dueños.
Tecnologías sugeridas:
Node.js con Express.
MongoDB para la base de datos.
JWT para manejar sesiones.
Bcrypt para hashear contraseñas.
Base de datos (MongoDB)

Pasos para desarrollar el proyecto
Semana 1: Backend básico
Configura el servidor con Express y MongoDB. ✅
Crea los endpoints de usuario:
Registro: Guarda el email y la contraseña (hasheada con bcrypt). ✅
Login: Devuelve un token JWT válido si las credenciales son correctas. ✅
Implementa los endpoints de tareas:
Crear tarea.
Obtener tareas de un usuario.
Editar y eliminar tareas.
Semana 2: Frontend básico
Configura un proyecto con React y React Router.
Crea un formulario de registro/login.
Implementa el flujo de autenticación:
Usa el token JWT para autorizar solicitudes desde el frontend.
Guarda el token en localStorage o sessionStorage.
Implementa una vista para listar, crear y eliminar tareas.
Semana 3: Funcionalidades avanzadas
Implementa el sistema de colaboración:
Backend: Endpoint para agregar colaboradores a una tarea.
Frontend: Formulario para compartir tareas con otros usuarios.
Agrega validaciones:
Verifica que solo el dueño pueda editar o eliminar una tarea.
Permite que colaboradores solo vean y editen tareas compartidas.
Añade filtros en el frontend:
Tareas propias.
Tareas colaborativas.
Semana 4: Despliegue
Despliega el frontend en Vercel.
Despliega el backend en Render o Railway.
Comparte tu proyecto con una documentación clara:
Cómo probar el sistema.
Ejemplos de cuentas de prueba.
Extras para destacar
Frontend:
Implementa diseño responsivo con TailwindCSS o Bootstrap.
Agrega notificaciones para acciones exitosas (crear tarea, compartir tarea, etc.).
Backend:
Añade validaciones más complejas usando Joi o Yup.
Implementa paginación para las tareas.
Testing:
Agrega pruebas unitarias con Jest (en el frontend y backend).
Refactor con Typescript:
Convierte tu backend y/o frontend a Typescript para practicar.
Resultado final esperado
Frontend:
Página de autenticación.
Vista de tareas (propias y colaborativas).
Formulario para crear y compartir tareas.
Backend:
Endpoints seguros con JWT.
Relación entre usuarios y tareas.
Control de permisos para tareas compartidas.
