<p align="center">
    <img src="./public/icon.png" width="100"/>
</p>

# Impage 🖼️

### Esta aplicación fue creada para participar en la hackaton organizada por [midudev](https://twitch.tv/midudev) junto a [Cloudinary](https://cloudinary.com/)

<br>

### Con esta aplicación puedes acceder a funcionalidades como:
* Optimizar las imágenes de tu sitio web.
* Descargar las imágenes optimizadas, de cada imágen individual o todas juntas si así lo deseas.
* Realizar comparaciones en cuánto a calidad y peso de dichas imágenes.

<br>

## Tecnologías
* NextJS
* Cloudinary
* CSS Modules
* Cheerio

<br>

## Referencias
* [Repositorio de midudev](https://github.com/midudev/remove-bg-cloudinary-hackathon)
* [Optimización de imágenes](https://cloudinary.com/documentation/image_optimization)
* [SDK de Node](https://cloudinary.com/documentation/node_integration)

<br>

# Ejecutándolo

### Es necesario tener una cuenta de Cloudinary e ingresar las siguientes variables en un archivo de variables de entorno:
```env
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
```

### Descargas el proyecto de github
```bash
git clone https://github.com/Rolando1010/Impage
```

### Desde una terminal ingresas a la raíz del proyecto, instalas las dependencias y ejecutas el proyecto
```bash
cd Impage
npm install
npm run dev
```