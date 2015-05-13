# Importaciones y Exportaciones

[Importaciones](http://cne.opendata.junar.com/datastreams/91796/informe-de-importaciones/)

[Exportaciones](http://cne.opendata.junar.com/datastreams/91797/informe-de-exportaciones/)

Pais de origen (para la tabla de importaciones)

AÑO = Year("Fecha de aceptacion") // quizas es igual a la variable "Año" que ya esta generada

TON a mostrar = Cantidad Mercancia / 1000

Tipo Arancel REPORTE o Tipo Arancel = Producto o Combustible

Armar un JSON que tenga todo, las importaciones y las exportaciones. Tendria la siguiente estructura.

|operacion|año|pais|pais3|producto|cant|
|---------|---|----|-----|--------|----|
|I ó E|2014|Argentina|ARG|GNC|12|
