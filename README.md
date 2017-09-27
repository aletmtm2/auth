Auth
============================

Ejemplo de Json web token.

# Paso 1

Subir directorio al repositorio por primera vez

    $ git init
    $ git add *******
    $ git commit -m "Comentario"
    $ git remote add origin https://github.com/aletmtm2/auth.git
    $ git push -u origin master

# Paso 2

Clonar el repositorio y acceder al directorio raíz:

    $ git clone https://github.com/aletmtm2/auth.git
    $ cd auth

# Paso 3
Instalar dependencias

    $ npm install

# Paso 4
Ejecutar aplicación

    $ node app

# Paso 5
Test

    $ curl localhost:8888/a/a  				//obtener token
	$ curl localhost:8888/auth/g			//lee todos la data
	$ REST localhost:8888/auth/p			//post con data en body : firstName, lastName, token
	$ curl localhost:8888/auth/d/{fistName}	//borra data con nombre indicado en firstName
