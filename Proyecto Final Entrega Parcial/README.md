# PROYECTO FINAL


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

### Rutas:
https://localhost:3000

https://localhost:3000/api/productos

https://localhost:3000/api/productos/:id


### Integrantes:
Santino Gullacci

Rodrigo Sisko

Josué Chazarreta