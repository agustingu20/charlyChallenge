# Challenge Frontend React para Charly.io :rocket:
## Objetivo del challenge
Desarrollar una aplicación que permita listar la información contenida en el arreglo de 'companies'. El diseño utilizado es a libre elección.

## Requerimientos del challenge

✔️ El usuario puede filtrar por:
 - Cualquiera de los Status existentes.
 - Mostrar el total de registros que se están desplegando.
<br />

✔️ Ordenar la información:
- Por fecha.
- Por id.
- Por name.
<br />

✔️ El manejo de HTTP deberá realizarse mediante Axios.
<br />

✔️ API: Haz un llamado a un api endpoint para cargar la data contenido en el arreglo companies. No es necesario proveer la api, solo debe tener una variable para el url donde puedo apuntar el llamado a un servidor que devuelve un arreglo de companies. Para hacer el llamado puedes usar axios o librerías similares.

## Arreglo de companies:

```bash

const companies = [
  { id: 1, status: "accepted", name: "001", date: "01/01/2022" },
  { id: 2, status: "accepted", name: "001", date: "01/01/2022" },
  { id: 8, status: "accepted", name: "001", date: "10/04/2022" },
  { id: 4, status: "declined", name: "005", date: "01/02/2022" },
  { id: 7, status: "pending", name: "005", date: "03/02/2022" },
  { id: 3, status: "pending", name: "001", date: "01/02/2022" },
  { id: 9, status: "pending", name: "002", date: "11/04/2022" },
  { id: 5, status: "declined", name: "002", date: "02/02/2022" },
  { id: 6, status: "declined", name: "001", date: "02/02/2022" },
]
```

# Instalación
Tener instalado el paquete [npm](https://www.npmjs.com/)

### Clonar el repositorio

```bash
$ git clone https://github.com/agustingu20/challenge-react-alkemy-refactored.git
$ cd ../path/to/the/file
$ npm install
$ npm start

# Autor ✒️
**Agustín Gómez Urrutia** - [agustingu20](https://github.com/agustingu20)

# Librerías 📚
- Axios
- React-Bootstrap
- Bootstrap
- Redux-toolkit
