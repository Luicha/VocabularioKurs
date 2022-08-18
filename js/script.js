var listaPalabras = [
  ["Баба", "Abuela", "Femenino", "Баби"],
  ["Басейн", "Piscina", "Masculino", "Басейни"],
  ["Будинок", "Casa", "Masculino", "Будинки"],
  ["Буква", "Letra", "Femenino", "Букви"],
  ["Булка", "Pan", "Femenino", "Булка"],
  ["Ваза", "Jarrón", "Femenino", "Вази"],
  ["Виделка", "Tenedor", "Femenino", "Виделки"],
  ["Викладач", "Profesor", "Masculino", "Викладачі"],
  ["Вікно", "Ventana", "Neutro", "Вікна"],
  ["Вода", "Agua", "Femenino", "Вода"],
  ["Водій", "Chofer", "Masculino", "Водії"],
  ["Вулиця", "Calle", "Femenino", "Вулиці"],
  ["Дзвоник", "Campana", "Masculino", "Дзвоники"],
  ["Дитина", "Niño/niña", "Femenino", "Діти"],
  ["Дівчина", "Muchacha", "Femenino", "дівчата"],
  ["Дід", "Abuelo", "Masculino", "Діди"],
  ["Дочка", "Hija", "Femenino", "Дочки"],
  ["Дошка", "Pizarrón", "Femenino", "Дошки"],
  ["Дуб", "Roble", "Masculino", "Дуби"],
  ["Дядько", "Tío", "Masculino", "Дядьки"],
  ["Завод", "Fábrica", "Masculino", "Заводи"],
  ["Зошит", "Cuaderno", "Masculino", "Зошити"],
  ["Інститут", "Instituto", "Masculino", "Інститути"],
  ["Кава", "Café", "Femenino", "Кави"],
  ["Кавун", "Sandía", "Masculino", "Кавуни"],
  ["Кафе", "Cafetería", "Neutro", "Кафе"],
  ["Киянин", "Kievita", "Masculino", "Кияни"],
  ["Кімната", "Habitación", "Femenino", "Кімнати"],
  ["Клас", "Aula", "Masculino", "Класи"],
  ["Книжка", "Libro", "Femenino", "Книжки"],
  ["Костюм", "Traje", "Masculino", "Костюми"],
  ["Лава", "Banco", "Femenino", "Лави"],
  ["Лист", "Carta", "Masculino", "Листи"],
  ["Ложка", "Cuchara", "Femenino", "Ложки"],
  ["Мак", "Amapola", "Masculino", "Маки"],
  ["Мама", "Mamá", "Femenino", "Матері"],
  ["Масло", "Manteca", "Neutro", "Масло"],
  ["Місто", "Ciudad", "Neutro", "Міста"],
  ["Молоко", "Leche", "Neutro", "Молоко"],
  ["Музей", "Museo", "Masculino", "Музеї"],
  ["М'ясо", "Carne", "Neutro", "М'яса"],
  ["Ніж", "Cuchillo", "Masculino", "Ножі"],
  ["Обід", "Almuerzo", "Masculino", "Обіди"],
  ["Онук", "Nieto", "Masculino", "Онуки"],
  ["Папка", "Carpeta", "Femenino", "Папки"],
  ["Піджак", "Saco", "Masculino", "Піджаки"],
  ["Пілот", "Piloto", "Masculino", "Пілоти"],
  ["Сад", "Jardín", "Masculino", "Сади"],
  ["Син", "Hijo", "Masculino", "Сини"],
  ["Сім'я", "Familia", "Femenino", "Сім'ї"],
  ["Сніданок", "Desayuno", "Masculino", "Сніданки"],
  ["Стіл", "Mesa", "Masculino", "Столи"],
  ["Стілець", "Silla", "Masculino", "Стілці"],
  ["Студент", "Estudiante", "Masculino", "Студенти"],
  ["Сукня", "Vestido", "Femenino", "Сукні"],
  ["Тато", "Papá", "Masculino", "Тати"],
  ["Учень", "Estudiante", "Masculino", "Учні"],
  ["Фізик", "Físico", "Masculino", "Фізики"],
  ["Фонтана", "Fuente", "Femenino", "Фонтани"],
  ["Фото", "Foto", "Neutro", "Фото"],
  ["Чашка", "Taza", "Femenino", "Чашки"],
  ["Шапка", "Gorro", "Femenino", "Шапки"],
  ["Шафа", "Armario", "Femenino", "Шафи"],
  ["Школа", "Escuela", "Femenino", "Школи"],
  ["Шуба", "Tapado", "Femenino", "Шуби"],
  ["Юнак", "Joven", "Masculino", "Юнаки"],
  ["Яблуко", "Manzana", "Neutro", "Яблука"],
  
];

table = document.getElementById("cuadro");

for (var i = 0; i < listaPalabras.length; i++) {
  var filaNueva = table.insertRow(table.length);

  for (var j = 0; j < 4; j++) {
    var celda = filaNueva.insertCell(j);
    celda.innerHTML = listaPalabras[i][j];
  }
}

//Buscar
function buscar() {
  // Declare variables
  var input, filter, table2, tr, ucra, espa, i, txtValue, txtValue2;
  input = document.getElementById("editText");
  filter = input.value.toUpperCase();
  table2 = document.getElementById("cuadro");
  tr = table2.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    ucra = tr[i].getElementsByTagName("td")[0];
    espa = tr[i].getElementsByTagName("td")[1];
    if (ucra) {
      txtValue = ucra.textContent || ucra.innerText;
      txtValue2 = espa.textContent || espa.innerText;

      if (
        txtValue.toUpperCase().indexOf(filter) > -1 ||
        txtValue2.toUpperCase().indexOf(filter) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//Ordenar alfabéticamente
function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("cuadro");
  switching = true;
  // Que primero sea dirección ascendente
  dir = "asc";
  /* Hacer un bucle que siga hasta qeu no se hagan cambios */
  while (switching) {
    // De entrada no hay cambios
    switching = false;
    rows = table.rows;
    /* Navegar todas las filas menos la primera, que son los encabezados */
    for (i = 1; i < rows.length - 1; i++) {
      // Comenzar diciendo que no se hacen cambios
      shouldSwitch = false;
      /* Tomar los dos elementos para comparar, uno de la fila actual y el de la siguiente */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Ver si las dos filas deberían cambiar de lugar según su dirección (asc o desc).  */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // Si tienen que cambiar, marcarlo como un cambio y salir del bucle.
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // Si tienen que cambiar, marcarlo como un cambio y salir del bucle.
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* Si se marcó un cambio, hacer el cambio y marcar que se hizo. */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Cada vez que se haga un cambio, aumentar el contador en 1
      switchcount++;
    } else {
      /* Si no hay cambios Y la dirección es "asc", hacer que la dirección pase a "desc" y correr el bucle de nuevo. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
