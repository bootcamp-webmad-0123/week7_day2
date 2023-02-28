# week7_day2

> React | State
>
> React | List & keys
> 
> React | Conditional rendering


## React | List & keys

- Es posible iterar sobre un Array para renderizar una lista de componentes.
- Cada elemento resultante debe disponer de una propiedad `key` de valor ùnico.
- A través del operador de propagación, es posible enviar la totalidad del objeto al componente en vez de en `props` independientes.

## Main points: import & export

- React permite dos tipos de exportaciones:
  - **Nominales**:
    - Permiten exportar un número indeterminado de elementos desde un archivo.
    - Deben ser importados mediante la sintaxis:
      ````javascript
      import {nombreExportacion} from 'path'
      ````
  - **Por defecto**:
    - Un archivo puede exportar un único elemento por defecto, mediante la sintaxis:
      ````javascript
      export default nombreExportacion
      ````
    - La importación del mismo puede realizarse bajo cualquier nomenclatura.
