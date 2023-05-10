# 14. Actualizaciones/Mantenimiento 
Encargado/a: Maria Isabel
Descripción: Se realizarán las mejoras propuestas por el equipo las cuales son:
•	Colocar una barra de navegación para mejorar la accesibilidad a las diferentes pantallas.
•	Mejorar la validación de datos del usuario

## Proceso
 
### Barra de Navegación
Para implementar la barra de navegación se utilizó la siguiente dependencia además de ya tener instalado el React- Native-Navigation.

   "@react-navigation/bottom-tabs": "^6.5.7",

Se realizó una modificación completa del código, donde se creó el propio apartado para colocar la barra y que estuviera todo integrado y se pudiera visualizar en las demás pantallas. También se crearon 3 botones diferentes. Los cuales corresponderían a “Home” donde te llevaría a la pantalla principal. El segundo corresponde a “Buscar” donde puedes acceder a la pantalla de mapa, y por último seria la futura pantalla de notificaciones, en la cual se podría visualizar todas las alertas recientes. 


### Autenticación de usuario
Para la autenticación de usuario se utilizó la plataforma Firebase, que, con sus dependencias ya integradas a la aplicación, se pudo colocar un código que rectificara que los datos ingresados al momento de registrar una cuenta fueran almacenados y guardados en la base de datos. Mostrando en la consola un mensaje de “La cuenta fue creada con éxito”. De igual manera al momento de iniciar sesión con el usuario creado la consola daría alertas dependido si este ingreso con éxito o que los datos de la cuenta no sean correctos
