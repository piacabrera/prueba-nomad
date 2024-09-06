# prueba-nomad

## Consideraciones:

- Asumo que se respeta el precio y descuento ofrecido al cliente, es decir el que llega en el carrito (```price```, ```discount```), no el almacenado en la base de datos.

- Asumo que ```discount``` en el listado del request es un porcentaje, por lo que descuento total se calcula como  ```discount * quantity * price``` en caso de que ```quantity <= realStock``` y como ```discount * realStock * price``` en caso contrario.