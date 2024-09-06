# prueba-nomad

## Para correr en local:

Tener node version 18.20.2 o posterior 

- Se debe crear un archivo ```.env ```con la variable ```PORT = 3000```
- correr ```npm install```
- correr ```node app.js```

## Consideraciones:

- Asumo que ```discount``` en el listado del request del enunciado es ```discountPercentage```y que ```productId``` es ```id``` (ya que así vienen del carrito aleatorio del API) 

- Asumo que el descuento total se calcula como  ```discount * quantity * price``` en caso de que ```quantity <= realStock``` y como ```discount * realStock * price``` en caso contrario.