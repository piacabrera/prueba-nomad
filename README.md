# prueba-nomad

El código se encuentra en el repo ```https://github.com/piacabrera/prueba-nomad```
## Para correr en local:

Tener node version 18.20.2 o posterior 
- Se debe crear un archivo ```.env ```con la variable ```PORT = 3000``` en la raíz
- Entrar a la carpeta ```backend```
- Correr desde ```/backend ``` ```npm run build-frontend```
-  Correr desde ```/backend ``` ```npm start```

## Consideraciones:

- Asumo que ```discount``` en el listado del request del enunciado es ```discountPercentage```y que ```productId``` es ```id``` (ya que así vienen del carrito aleatorio del API) 

- Asumo que el descuento total se calcula como  ```discount * quantity * price``` en caso de que ```quantity <= realStock``` y como ```discount * realStock * price``` en caso contrario.

