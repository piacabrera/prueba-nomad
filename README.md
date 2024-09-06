# prueba-nomad

## Consideraciones:

- Asumo que ```discount``` en el listado del request del enunciado es ```discountPercentage```y que ```productId``` es ```id``` (ya que así vienen del carrito aleatorio del API) 

- Asumo que el descuento total se calcula como  ```discount * quantity * price``` en caso de que ```quantity <= realStock``` y como ```discount * realStock * price``` en caso contrario.