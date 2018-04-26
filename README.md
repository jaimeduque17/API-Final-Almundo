# API REST prueba final semillero Almundo

Documentación de la API REST utilizada en la prueba final del semillero de Almundo.

## Getting Started

Estas instrucciones le permitiránobtener una copia del proyecto en funcionamiento en su máquina local para fines de desarrollo y pruebas.


## Installing

Pasos para poder ejecutar el proyecto:

1) Entrar a la carpeta del proyecto

`cd pruebaAlmundo`

2) Luego de ello ejecutar la instalación de dependencias

`npm install`

3) Despues se ejecuta el comando para tcorrer la API

## Running in development

Para correr la API en desarrollo se ejecuta `npm run dev`

## Obtener todos los vuelos

Devuelve un array de datos json

- URL:
/flight

- Method:
`GET`

###Success Response

- Content:

`{
    "_id": {
        "$oid": "5ae00bc4734d1d48c4cad66b"
    },
    "destination": {
        "iata": "CDG",
        "name": "Paris"
    },
    "origin": {
        "iata": "MIA",
        "name": "Miami"
    },
    "image": "https://www.renfe-sncf.com/es-es/blog/PublishingImages/paris-noche-museos/paris_noche_museos_01.jpg",
    "price": "16653",
    "segments": "Panama-Madrid",
    "dateDeparture": "24-06-2018",
    "dateReturn": "10-07-2018",
    "hourDeparture": "05:01",
    "hourReturn": "14:22"
}`

## Obtener el detalle de un vuelo

Devuelve un json con los datos de un vuelo

- URL:
/flight/:id

- Method:
`GET`

###Success Response

- Content:

`{
    "_id": {
        "$oid": "5ae00bc4734d1d48c4cad66b"
    },
    "destination": {
        "iata": "CDG",
        "name": "Paris"
    },
    "origin": {
        "iata": "MIA",
        "name": "Miami"
    },
    "image": "https://www.renfe-sncf.com/es-es/blog/PublishingImages/paris-noche-museos/paris_noche_museos_01.jpg",
    "price": "16653",
    "segments": "Panama-Madrid",
    "dateDeparture": "24-06-2018",
    "dateReturn": "10-07-2018",
    "hourDeparture": "05:01",
    "hourReturn": "14:22"
}`

## Busqueda de vuelos ida

Devuelve un json con los datos de un vuelo

- URL:
/flights/departure

- Method:
`GET`

###Success Response

- Content:

`[
        {
            "destination": {
                "iata": "MIA",
                "name": "Miami"
            },
            "origin": {
                "iata": "BUE",
                "name": "Buenos Aires"
            },
            "_id": "5adcc71b734d1d0b3c2dd8db",
            "image": "http://segundoenfoque.com/wp-content/uploads/2017/04/miami-segundoenfoque.jpg",
            "price": "20960",
            "segments": "Panama",
            "dateDeparture": "30-06-2018",
            "dateReturn": "05-06-2018",
            "hourDeparture": "12:00",
            "hourReturn": "03:15"
        }
    ]`

## Busqueda de vuelos regreso

Devuelve un json con los datos de un vuelo

- URL:
/flights/return

- Method:
`GET`

###Success Response

- Content:

`[
        {
            "destination": {
                "iata": "MIA",
                "name": "Miami"
            },
            "origin": {
                "iata": "BUE",
                "name": "Buenos Aires"
            },
            "_id": "5adcc71b734d1d0b3c2dd8db",
            "image": "http://segundoenfoque.com/wp-content/uploads/2017/04/miami-segundoenfoque.jpg",
            "price": "20960",
            "segments": "Panama",
            "dateDeparture": "30-06-2018",
            "dateReturn": "05-06-2018",
            "hourDeparture": "12:00",
            "hourReturn": "03:15"
        }
    ]`


## Production

Una vez se instalen las dependencias automáticamente se ejecutará el script `build`, y luego para iniciar la API en producción se ejecuta `npm start`.

## Built With

- [Express](https://expressjs.com/) - Web framework used.

## Versioning

1.0.0

## Authors

- **Jaime Duque**

# Views

## License

The JavaScript Templates script is released under the [MIT license](https://opensource.org/licenses/MIT).

