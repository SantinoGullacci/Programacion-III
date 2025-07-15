# PROYECTO FINAL 🏪 2. Sistema de Inventario Básico


### Para iniciacilar el proyecto:
```bash
docker-compose build

docker-compose up -d
```

En caso de no ver inicializada la base de datos utilizar:
```bash

docker-compose exec backend sh

npx sequelize-cli db:seed:all

#Para salir de ese bash
exit
```
---
### Rutas:
https://localhost:3000

https://localhost:3000/api/productos

https://localhost:3000/api/productos/:id

---
### Funcionalidades:
-Gestión de productos (CRUD)

Create:

Al pie de la página, utilizar esta sección para agregar productos
<img width="1267" height="686" alt="image" src="https://github.com/user-attachments/assets/ee10b1e6-4ef1-49f7-94a4-371585862735" />

Read:

Debajo del header se puede ver un listado con todos los productos de la base de datos
<img width="1276" height="483" alt="image" src="https://github.com/user-attachments/assets/ac48038c-9fd3-4b5d-827d-e45fec4282d2" />

Update:

Luego de hacer click sobre un producto, se habilita esta sección para actualizarlo
<img width="1274" height="554" alt="image" src="https://github.com/user-attachments/assets/5bbaa938-a41d-42df-b613-b5288ddab634" />

Delete:

Si se diese  click sobre  el botón rojo "Eliminar", el producto se eliminaria
<img width="1276" height="232" alt="image" src="https://github.com/user-attachments/assets/752075c8-d493-48d7-bb0e-7a674120bdb5" />

-Control de stock básico:

Debajo del nombre de cada producto podemos ver en verde el stock actual que tiene
<img width="1273" height="233" alt="image" src="https://github.com/user-attachments/assets/456caf45-5462-4ab5-826b-371c74d83c99" />

-Categorización de productos:

También, esta vez en gris, podemos ver la categoria de cada producto
<img width="1275" height="237" alt="image" src="https://github.com/user-attachments/assets/fc3625bf-fb3e-4762-bf73-24d935edae4c" />

-Búsqueda simple de productos:

Mediante barra buscadora, filtra por nombre de producto
<img width="1263" height="582" alt="image" src="https://github.com/user-attachments/assets/7456b38a-e5f8-44d1-a84b-088830d25379" />

---
### Integrantes:
Santino Gullacci

Rodrigo Sisko

Josué Chazarreta
