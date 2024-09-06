# prueba-nomad

## Consideraciones:

- Asumo que se respeta el precio y descuento ofrecido al cliente, es decir el que llega en el carrito (```price```, ```discount```), no el almacenado en la base de datos.

- Asumo que ```discount``` en el listado del request, es un número y no un porcentaje, por lo que descuento total se calcula como  ```discount * quantity``` en caso de que ```quantity <= realStock``` y como ```discount * realStock``` en caso contrario.