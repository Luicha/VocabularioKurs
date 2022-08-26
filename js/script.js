var listaPalabras = [
  ["Баба", "Abuela", "Femenino", "Баби"],
  ["Басейн", "Piscina", "Masculino", "Басейни"],
  ["Брат", "Hermano", "Masculino", "Брати"],
  ["Будинок", "Casa", "Masculino", "Будинки"],
  ["Буква", "Letra", "Femenino", "Букви"],
  ["Булка", "Pan", "Femenino", "Булки"],
  ["Ваза", "Jarrón", "Femenino", "Вази"],
  ["Весілля", "Boda", "Pl. - Neut.", "Весілля"],
  ["Вечеря", "Cena", "Femenino", "Вечері"],
  ["Взуття", "Calzado", "Pl. - Neut.", "Взуття"],
  ["Виделка", "Tenedor", "Femenino", "Виделки"],
  ["Викладач", "Profesor", "Masculino", "Викладачі"],
  ["Викладачка", "Profesora", "Femenino", "Викладачки"],
  ["Вікно", "Ventana", "Neutro", "Вікна"],
  ["Вірш", "Verso", "Masculino", "Вірші"],
  ["Вода", "Agua", "Femenino", "Вода"],
  ["Водій", "Chofer", "Masculino", "Водії"],
  ["Волосся", "Cabello", "Pl. - Neut.", "Волосся"],
  ["Вулиця", "Calle", "Femenino", "Вулиці"],
  ["Газета", "Diario", "Femenino", "Газети"],
  ["Галуззя", "Industria", "Pl. - Neut.", "Галуззя"],
  ["Готель", "Hotel", "Masculino", "Готелі"],
  ["Гуртожиток", "Hostal", "Masculino", "Гуртожитки"],
  ["Ґід", "Guía", "Masculino", "Ґіди"],
  ["Ґудзик", "Botón", "Masculino", "Ґудзики"],
  ["Дзвоник", "Campana", "Masculino", "Дзвоники"],
  ["Дитина", "Niño/niña", "Femenino", "Діти"],
  ["Дівчина", "Muchacha", "Femenino", "дівчата"],
  ["Дід", "Abuelo", "Masculino", "Діди"],
  ["Дочка", "Hija", "Femenino", "Дочки"],
  ["Дошка", "Pizarrón", "Femenino", "Дошки"],
  ["Друг", "Amigo", "Masculino", "Друзі"],
  ["Дуб", "Roble", "Masculino", "Дуби"],
  ["Дядько", "Tío", "Masculino", "Дядьки"],
  ["Життя", "Vida", "Pl. - Neut.", "Життя"],
  ["Журнал", "Revista", "Masculino", "Журнали"],
  ["Завод", "Fábrica", "Masculino", "Заводи"],
  ["Зошит", "Cuaderno", "Masculino", "Зошити"],
  ["Інженер", "Ingeniero", "Masculino", "Інженери"],
  ["Іноземець", "Extranjero", "Masculino", "Іноземці"],
  ["Інститут", "Instituto", "Masculino", "Інститути"],
  ["Кава", "Café", "Femenino", "Кави"],
  ["Кавун", "Sandía", "Masculino", "Кавуни"],
  ["Карта", "Mapa", "Femenino", "Карти"],
  ["Кафе", "Cafetería", "Neutro", "Кафе"],
  ["Киянин", "Kievita", "Masculino", "Кияни"],
  ["Кімната", "Habitación", "Femenino", "Кімнати"],
  ["Клас", "Aula", "Masculino", "Класи"],
  ["Книжка", "Libro", "Femenino", "Книжки"],
  ["Конверт", "Sobre", "Masculino", "Конверти"],
  ["Костюм", "Traje", "Masculino", "Костюми"],
  ["Лава", "Banco", "Femenino", "Лави"],
  ["Лист", "Carta", "Masculino", "Листи"],
  ["Листівка", "Postal", "Femenino", "Листівки"],
  ["Ліжко", "Cama", "Neutro", "Ліжка"],
  ["Лікар", "Médico", "Masculino", "Лікарі"],
  ["Лікарка", "Médica", "Femenino", "Лікарки"],
  ["Лікарня", "Hospital", "Femenino", "Лікарні"],
  ["Ложка", "Cuchara", "Femenino", "Ложки"],
  ["Маґазин", "Tienda", "Masculino", "Маґазини"],
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
  ["Оповідання", "Relato", "Pl. - Neut.", "Оповідання"],
  ["Пальто", "Abrigo", "Neutro", "Пальта"],
  ["Пам'ятник", "Monumento", "Masculino", "Пам'ятники"],
  ["Папка", "Carpeta", "Femenino", "Папки"],
  ["Парк", "Parque", "Masculino", "Парки"],
  ["Піджак", "Saco", "Masculino", "Піджаки"],
  ["Пілот", "Piloto", "Masculino", "Пілоти"],
  ["Пісня", "Canción", "Femenino", "Пісні"],
  ["Подруга", "Novia", "Femenino", "Подруги"],
  ["Поет", "Poeta", "Masculino", "Поети"],
  ["Прапор", "Bandera", "Masculino", "Прапори"],
  ["Радіо", "Radio", "Neutro", "Радіо"],
  ["Ресторан", "Restorán", "Masculino", "Ресторани"],
  ["Риба", "Pez", "Femenino", "Риби"],
  ["Річка", "Río", "Femenino", "Річки"],
  ["Робітник", "Trabajador", "Masculino", "Робітники"],
  ["Ручка", "Lápiz", "Femenino", "Ручки"],
  ["Сад", "Jardín", "Masculino", "Сади"],
  ["Сестра", "Hermana", "Femenino", "Сестри"],
  ["Син", "Hijo", "Masculino", "Сини"],
  ["Сир", "Queso", "Masculino", "Сири"],
  ["Сім'я", "Familia", "Femenino", "Сім'ї"],
  ["Сніданок", "Desayuno", "Masculino", "Сніданки"],
  ["Стіл", "Mesa", "Masculino", "Столи"],
  ["Стілець", "Silla", "Masculino", "Стілці"],
  ["Сторіччя", "Siglo", "Pl. - Neut.", "Сторіччя"],
  ["Студент", "Estudiante", "Masculino", "Студенти"],
  ["Суддя", "Juez", "Pl. - Neut.", "Суддя"],
  ["Сукня", "Vestido", "Femenino", "Сукні"],
  ["Тарілка", "Plato", "Femenino", "Тарілки"],
  ["Тато", "Papá", "Masculino", "Тати"],
  ["Турист", "Turista", "Masculino", "Туристи"],
  ["Тютюн", "Tabaco", "Masculino", "Тютюни"],
  ["Узбережжя", "Costa", "Pl. - Neut.", "Узбережжя"],
  ["Учень", "Estudiante", "Masculino", "Учні"],
  ["Учитель", "Maestro", "Masculino", "Учителі"],
  ["Учителька", "Maestra", "Femenino", "Учительки"],
  ["Фізик", "Físico", "Masculino", "Фізики"],
  ["Фонтана", "Fuente", "Femenino", "Фонтани"],
  ["Фото", "Foto", "Neutro", "Фото"],
  ["Хлопець", "Novio", "Masculino", "Хлопці"],
  ["Церква", "Iglesia", "Femenino", "Церкви"],
  ["Чашка", "Taza", "Femenino", "Чашки"],
  ["Шаль", "Bufanda", "Masculino", "Шалі"],
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

var table3 = document.getElementById("cuadro"),
  rIndex;
//Esto me da el índice de cada fila.
for (var i = 0; i < table3.rows.length; i++) {
  table3.rows[i].onclick = function () {
    rIndex = this.rowIndex;
    console.log(rIndex);
    var singular = this.cells[0].innerHTML; 
    var plural = this.cells[3].innerHTML; //esto me pone en "plural" la celda de la columna 4 (plurales)
  
    declinar(rIndex, singular, plural); //Acá paso el verbo(índice) a la función declinar(verbo).
  };
}

function declinar(indice, singular, plural) {
  switch (singular) {
    case "Ucraniano ⇅":
      break;

  case "Баба":
    document.getElementById("nom-sing").innerHTML = "баба";
    document.getElementById("nom-plur").innerHTML = "баби";

    document.getElementById("gen-sing").innerHTML = "баби";
    document.getElementById("gen-plur").innerHTML = "баб, бабів";

    document.getElementById("dat-sing").innerHTML = "бабі";
    document.getElementById("dat-plur").innerHTML = "бабам";

    document.getElementById("acu-sing").innerHTML = "бабу";
    document.getElementById("acu-plur").innerHTML = "баб, бабів";

    document.getElementById("instr-sing").innerHTML = "бабою";
    document.getElementById("instr-plur").innerHTML = "бабами";

    document.getElementById("loc-sing").innerHTML = "на/у бабі";
    document.getElementById("loc-plur").innerHTML = "на/у бабах";

    document.getElementById("voc-sing").innerHTML = "бабо";
    document.getElementById("voc-plur").innerHTML = "баби";
   break;

   case "Басейн":
    document.getElementById("nom-sing").innerHTML = "басейн";
    document.getElementById("nom-plur").innerHTML = "басейни";

    document.getElementById("gen-sing").innerHTML = "басейну";
    document.getElementById("gen-plur").innerHTML = "басейнів";

    document.getElementById("dat-sing").innerHTML = "басейнові, басейну";
    document.getElementById("dat-plur").innerHTML = "басейнам";

    document.getElementById("acu-sing").innerHTML = "басейн";
    document.getElementById("acu-plur").innerHTML = "басейни";

    document.getElementById("instr-sing").innerHTML = "басейном";
    document.getElementById("instr-plur").innerHTML = "басейнами";

    document.getElementById("loc-sing").innerHTML = "на/у басейні";
    document.getElementById("loc-plur").innerHTML = "на/у басейнах";

    document.getElementById("voc-sing").innerHTML = "басейне";
    document.getElementById("voc-plur").innerHTML = "басейни";
  break;

  case "Брат":
    document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
    document.getElementById("nom-plur").innerHTML = plural.toLowerCase();

    document.getElementById("gen-sing").innerHTML = "брата";
    document.getElementById("gen-plur").innerHTML = "братів";

    document.getElementById("dat-sing").innerHTML = "братові, брату";
    document.getElementById("dat-plur").innerHTML = "братам";

    document.getElementById("acu-sing").innerHTML = "брата";
    document.getElementById("acu-plur").innerHTML = "братів";

    document.getElementById("instr-sing").innerHTML = "братом";
    document.getElementById("instr-plur").innerHTML = "братами";

    document.getElementById("loc-sing").innerHTML = "на/у браті, братові";
    document.getElementById("loc-plur").innerHTML = "на/у братах";

    document.getElementById("voc-sing").innerHTML = "брате";
    document.getElementById("voc-plur").innerHTML = "брати";
  break;

  case "Будинок":
    document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
    document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
    document.getElementById("gen-sing").innerHTML = "будинку";
    document.getElementById("gen-plur").innerHTML = "будинків";
    document.getElementById("dat-sing").innerHTML = "будинкові, будинку";
    document.getElementById("dat-plur").innerHTML = "будинкам";
    document.getElementById("acu-sing").innerHTML = "будинок";
    document.getElementById("acu-plur").innerHTML = "будинки";
    document.getElementById("instr-sing").innerHTML = "будинком";
    document.getElementById("instr-plur").innerHTML = "будинками";
    document.getElementById("loc-sing").innerHTML = "на/у будинку";
    document.getElementById("loc-plur").innerHTML = "на/у будинках";
    document.getElementById("voc-sing").innerHTML = "будинку";
    document.getElementById("voc-plur").innerHTML = "будинки";
    break;

    case "Буква":
      document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
      document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
      document.getElementById("gen-sing").innerHTML = "букви";
      document.getElementById("gen-plur").innerHTML = "букв";
      document.getElementById("dat-sing").innerHTML = "букві";
      document.getElementById("dat-plur").innerHTML = "буквам";
      document.getElementById("acu-sing").innerHTML = "букву";
      document.getElementById("acu-plur").innerHTML = "букви";
      document.getElementById("instr-sing").innerHTML = "буквою";
      document.getElementById("instr-plur").innerHTML = "буквами";
      document.getElementById("loc-sing").innerHTML = "на/у букві";
      document.getElementById("loc-plur").innerHTML = "на/у буквах";
      document.getElementById("voc-sing").innerHTML = "букво";
      document.getElementById("voc-plur").innerHTML = "букви";
      break;

      case "Булка":
        document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
        document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
        document.getElementById("gen-sing").innerHTML = "булки";
        document.getElementById("gen-plur").innerHTML = "булок";
        document.getElementById("dat-sing").innerHTML = "булці";
        document.getElementById("dat-plur").innerHTML = "булкам";
        document.getElementById("acu-sing").innerHTML = "булку";
        document.getElementById("acu-plur").innerHTML = "булки";
        document.getElementById("instr-sing").innerHTML = "булкою";
        document.getElementById("instr-plur").innerHTML = "булками";
        document.getElementById("loc-sing").innerHTML = "на/у булці";
        document.getElementById("loc-plur").innerHTML = "на/у булках";
        document.getElementById("voc-sing").innerHTML = "булко";
        document.getElementById("voc-plur").innerHTML = "булки";
        break;
        
        case "Ваза":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "вази";
document.getElementById("gen-plur").innerHTML = "ваз";
document.getElementById("dat-sing").innerHTML = "вазі";
document.getElementById("dat-plur").innerHTML = "вазам";
document.getElementById("acu-sing").innerHTML = "вазу";
document.getElementById("acu-plur").innerHTML = "вази";
document.getElementById("instr-sing").innerHTML = "вазою";
document.getElementById("instr-plur").innerHTML = "вазами";
document.getElementById("loc-sing").innerHTML = "на/у вазі";
document.getElementById("loc-plur").innerHTML = "на/у вазах";
document.getElementById("voc-sing").innerHTML = "вазо";
document.getElementById("voc-plur").innerHTML = "вази";
break;

case "Весілля":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "весілля";
document.getElementById("gen-plur").innerHTML = "весіль, весіллів";
document.getElementById("dat-sing").innerHTML = "весіллю";
document.getElementById("dat-plur").innerHTML = "весіллям";
document.getElementById("acu-sing").innerHTML = "весілля";
document.getElementById("acu-plur").innerHTML = "весілля";
document.getElementById("instr-sing").innerHTML = "весіллям";
document.getElementById("instr-plur").innerHTML = "весіллями";
document.getElementById("loc-sing").innerHTML = "на/у весіллі";
document.getElementById("loc-plur").innerHTML = "на/у весіллях";
document.getElementById("voc-sing").innerHTML = "весілля";
document.getElementById("voc-plur").innerHTML = "весілля";
break;

case "Вечеря":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "вечері";
document.getElementById("gen-plur").innerHTML = "вечер";
document.getElementById("dat-sing").innerHTML = "вечері";
document.getElementById("dat-plur").innerHTML = "вечерям";
document.getElementById("acu-sing").innerHTML = "вечерю";
document.getElementById("acu-plur").innerHTML = "вечері";
document.getElementById("instr-sing").innerHTML = "вечерею";
document.getElementById("instr-plur").innerHTML = "вечерями";
document.getElementById("loc-sing").innerHTML = "на/у вечері";
document.getElementById("loc-plur").innerHTML = "на/у вечерях";
document.getElementById("voc-sing").innerHTML = "вечере";
document.getElementById("voc-plur").innerHTML = "вечері";
break;

case "Взуття":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "взуття";
document.getElementById("gen-plur").innerHTML = "";
document.getElementById("dat-sing").innerHTML = "взуттю";
document.getElementById("dat-plur").innerHTML = "";
document.getElementById("acu-sing").innerHTML = "взуття";
document.getElementById("acu-plur").innerHTML = "";
document.getElementById("instr-sing").innerHTML = "взуттям";
document.getElementById("instr-plur").innerHTML = "";
document.getElementById("loc-sing").innerHTML = "на/у взутті";
document.getElementById("loc-plur").innerHTML = "";
document.getElementById("voc-sing").innerHTML = "взуття";
document.getElementById("voc-plur").innerHTML = "";
break;

case "Викладач":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "викладача";
document.getElementById("gen-plur").innerHTML = "викладачів";
document.getElementById("dat-sing").innerHTML = "викладачеві, викладачу";
document.getElementById("dat-plur").innerHTML = "викладачам";
document.getElementById("acu-sing").innerHTML = "викладача";
document.getElementById("acu-plur").innerHTML = "викладачів";
document.getElementById("instr-sing").innerHTML = "викладачем";
document.getElementById("instr-plur").innerHTML = "викладачами";
document.getElementById("loc-sing").innerHTML = "на/у викладачі, викладачу, викладачеві";
document.getElementById("loc-plur").innerHTML = "на/у викладачах";
document.getElementById("voc-sing").innerHTML = "викладачу";
document.getElementById("voc-plur").innerHTML = "викладачі";
break;

case "Виделка":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "виделки";
document.getElementById("gen-plur").innerHTML = "виделок";
document.getElementById("dat-sing").innerHTML = "виделці";
document.getElementById("dat-plur").innerHTML = "виделкам";
document.getElementById("acu-sing").innerHTML = "виделку";
document.getElementById("acu-plur").innerHTML = "виделки";
document.getElementById("instr-sing").innerHTML = "виделкою";
document.getElementById("instr-plur").innerHTML = "виделками";
document.getElementById("loc-sing").innerHTML = "на/у виделці";
document.getElementById("loc-plur").innerHTML = "на/у виделках";
document.getElementById("voc-sing").innerHTML = "виделко";
document.getElementById("voc-plur").innerHTML = "виделки";
break;

case "Викладачка":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "викладачки";
document.getElementById("gen-plur").innerHTML = "викладачок";
document.getElementById("dat-sing").innerHTML = "викладачці";
document.getElementById("dat-plur").innerHTML = "викладачкам";
document.getElementById("acu-sing").innerHTML = "викладачку";
document.getElementById("acu-plur").innerHTML = "викладачок";
document.getElementById("instr-sing").innerHTML = "викладачкою";
document.getElementById("instr-plur").innerHTML = "викладачками";
document.getElementById("loc-sing").innerHTML = "на/у викладачці";
document.getElementById("loc-plur").innerHTML = "на/у викладачках";
document.getElementById("voc-sing").innerHTML = "викладачко";
document.getElementById("voc-plur").innerHTML = "викладачки";
break;

case "Вікно":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "вікна";
document.getElementById("gen-plur").innerHTML = "вікон";
document.getElementById("dat-sing").innerHTML = "вікну";
document.getElementById("dat-plur").innerHTML = "вікнам";
document.getElementById("acu-sing").innerHTML = "вікно";
document.getElementById("acu-plur").innerHTML = "вікна";
document.getElementById("instr-sing").innerHTML = "вікном";
document.getElementById("instr-plur").innerHTML = "вікнами";
document.getElementById("loc-sing").innerHTML = "на/у вікні";
document.getElementById("loc-plur").innerHTML = "на/у вікнах";
document.getElementById("voc-sing").innerHTML = "вікно";
document.getElementById("voc-plur").innerHTML = "вікна";
break;

case "Вірш":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "вірша";
document.getElementById("gen-plur").innerHTML = "віршів";
document.getElementById("dat-sing").innerHTML = "віршеві, віршу";
document.getElementById("dat-plur").innerHTML = "віршам";
document.getElementById("acu-sing").innerHTML = "вірш";
document.getElementById("acu-plur").innerHTML = "вірші";
document.getElementById("instr-sing").innerHTML = "віршем";
document.getElementById("instr-plur").innerHTML = "віршами";
document.getElementById("loc-sing").innerHTML = "на/у вірші, віршу, віршеві";
document.getElementById("loc-plur").innerHTML = "на/у віршах";
document.getElementById("voc-sing").innerHTML = "віршу";
document.getElementById("voc-plur").innerHTML = "вірші";
break;

case "Вода":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "води";
document.getElementById("gen-plur").innerHTML = "вод";
document.getElementById("dat-sing").innerHTML = "воді";
document.getElementById("dat-plur").innerHTML = "водам";
document.getElementById("acu-sing").innerHTML = "воду";
document.getElementById("acu-plur").innerHTML = "води";
document.getElementById("instr-sing").innerHTML = "водою";
document.getElementById("instr-plur").innerHTML = "водами";
document.getElementById("loc-sing").innerHTML = "на/у воді";
document.getElementById("loc-plur").innerHTML = "на/у водах";
document.getElementById("voc-sing").innerHTML = "водо";
document.getElementById("voc-plur").innerHTML = "води";
break;

case "Водій":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "водія";
document.getElementById("gen-plur").innerHTML = "водіїв";
document.getElementById("dat-sing").innerHTML = "водієві, водію";
document.getElementById("dat-plur").innerHTML = "водіям";
document.getElementById("acu-sing").innerHTML = "водія";
document.getElementById("acu-plur").innerHTML = "водіїв";
document.getElementById("instr-sing").innerHTML = "водієм";
document.getElementById("instr-plur").innerHTML = "водіями";
document.getElementById("loc-sing").innerHTML = "на/у водії";
document.getElementById("loc-plur").innerHTML = "на/у водіях";
document.getElementById("voc-sing").innerHTML = "водію";
document.getElementById("voc-plur").innerHTML = "водії";
break;

case "Волосся":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "волосся";
document.getElementById("gen-plur").innerHTML = "";
document.getElementById("dat-sing").innerHTML = "волоссю";
document.getElementById("dat-plur").innerHTML = "";
document.getElementById("acu-sing").innerHTML = "волосся";
document.getElementById("acu-plur").innerHTML = "";
document.getElementById("instr-sing").innerHTML = "волоссям";
document.getElementById("instr-plur").innerHTML = "";
document.getElementById("loc-sing").innerHTML = "на/у волоссі";
document.getElementById("loc-plur").innerHTML = "";
document.getElementById("voc-sing").innerHTML = "волосся";
document.getElementById("voc-plur").innerHTML = "";
break;

case "Вулиця":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "вулиці";
document.getElementById("gen-plur").innerHTML = "вулиць";
document.getElementById("dat-sing").innerHTML = "вулиці";
document.getElementById("dat-plur").innerHTML = "вулицям";
document.getElementById("acu-sing").innerHTML = "вулицю";
document.getElementById("acu-plur").innerHTML = "вулиці";
document.getElementById("instr-sing").innerHTML = "вулицею";
document.getElementById("instr-plur").innerHTML = "вулицями";
document.getElementById("loc-sing").innerHTML = "на/у вулиці";
document.getElementById("loc-plur").innerHTML = "на/у вулицях";
document.getElementById("voc-sing").innerHTML = "вулице";
document.getElementById("voc-plur").innerHTML = "вулиці";
break;

case "Газета":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "газети";
document.getElementById("gen-plur").innerHTML = "газет";
document.getElementById("dat-sing").innerHTML = "газеті";
document.getElementById("dat-plur").innerHTML = "газетам";
document.getElementById("acu-sing").innerHTML = "газету";
document.getElementById("acu-plur").innerHTML = "газети";
document.getElementById("instr-sing").innerHTML = "газетою";
document.getElementById("instr-plur").innerHTML = "газетами";
document.getElementById("loc-sing").innerHTML = "на/у газеті";
document.getElementById("loc-plur").innerHTML = "на/у газетах";
document.getElementById("voc-sing").innerHTML = "газето";
document.getElementById("voc-plur").innerHTML = "газети";
break;

case "Галуззя":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "галуззя";
document.getElementById("gen-plur").innerHTML = "";
document.getElementById("dat-sing").innerHTML = "галуззю";
document.getElementById("dat-plur").innerHTML = "";
document.getElementById("acu-sing").innerHTML = "галуззя";
document.getElementById("acu-plur").innerHTML = "";
document.getElementById("instr-sing").innerHTML = "галуззям";
document.getElementById("instr-plur").innerHTML = "";
document.getElementById("loc-sing").innerHTML = "на/у галуззі";
document.getElementById("loc-plur").innerHTML = "";
document.getElementById("voc-sing").innerHTML = "галуззя";
document.getElementById("voc-plur").innerHTML = "";
break;

case "Готель":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "готелю";
document.getElementById("gen-plur").innerHTML = "готелів";
document.getElementById("dat-sing").innerHTML = "готелеві, готелю";
document.getElementById("dat-plur").innerHTML = "готелям";
document.getElementById("acu-sing").innerHTML = "готель";
document.getElementById("acu-plur").innerHTML = "готелі";
document.getElementById("instr-sing").innerHTML = "готелем";
document.getElementById("instr-plur").innerHTML = "готелями";
document.getElementById("loc-sing").innerHTML = "на/у готелі";
document.getElementById("loc-plur").innerHTML = "на/у готелях";
document.getElementById("voc-sing").innerHTML = "готелю";
document.getElementById("voc-plur").innerHTML = "готелі";
break;

case "Гуртожиток":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "гуртожитку";
document.getElementById("gen-plur").innerHTML = "гуртожитків";
document.getElementById("dat-sing").innerHTML = "гуртожиткові, гуртожитку";
document.getElementById("dat-plur").innerHTML = "гуртожиткам";
document.getElementById("acu-sing").innerHTML = "гуртожиток";
document.getElementById("acu-plur").innerHTML = "гуртожитки";
document.getElementById("instr-sing").innerHTML = "гуртожитком";
document.getElementById("instr-plur").innerHTML = "гуртожитками";
document.getElementById("loc-sing").innerHTML = "на/у гуртожитку";
document.getElementById("loc-plur").innerHTML = "на/у гуртожитках";
document.getElementById("voc-sing").innerHTML = "гуртожитку";
document.getElementById("voc-plur").innerHTML = "гуртожитки";
break;

case "Ґід":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "гіда";
document.getElementById("gen-plur").innerHTML = "гідів";
document.getElementById("dat-sing").innerHTML = "гідові, гіду";
document.getElementById("dat-plur").innerHTML = "гідам";
document.getElementById("acu-sing").innerHTML = "гід";
document.getElementById("acu-plur").innerHTML = "гіди";
document.getElementById("instr-sing").innerHTML = "гідом";
document.getElementById("instr-plur").innerHTML = "гідами";
document.getElementById("loc-sing").innerHTML = "на/у гіді";
document.getElementById("loc-plur").innerHTML = "на/у гідах";
document.getElementById("voc-sing").innerHTML = "гіде";
document.getElementById("voc-plur").innerHTML = "гіди";
break;

case "Ґудзик":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "ґудзика";
document.getElementById("gen-plur").innerHTML = "ґудзиків";
document.getElementById("dat-sing").innerHTML = "ґудзикові, ґудзику";
document.getElementById("dat-plur").innerHTML = "ґудзикам";
document.getElementById("acu-sing").innerHTML = "ґудзик";
document.getElementById("acu-plur").innerHTML = "ґудзики";
document.getElementById("instr-sing").innerHTML = "ґудзиком";
document.getElementById("instr-plur").innerHTML = "ґудзиками";
document.getElementById("loc-sing").innerHTML = "на/у ґудзику";
document.getElementById("loc-plur").innerHTML = "на/у ґудзиках";
document.getElementById("voc-sing").innerHTML = "ґудзику";
document.getElementById("voc-plur").innerHTML = "ґудзики";
break;

case "Дзвоник":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "дзвоника";
document.getElementById("gen-plur").innerHTML = "дзвоників";
document.getElementById("dat-sing").innerHTML = "дзвоникові, дзвонику";
document.getElementById("dat-plur").innerHTML = "дзвоникам";
document.getElementById("acu-sing").innerHTML = "дзвоник";
document.getElementById("acu-plur").innerHTML = "дзвоники";
document.getElementById("instr-sing").innerHTML = "дзвоником";
document.getElementById("instr-plur").innerHTML = "дзвониками";
document.getElementById("loc-sing").innerHTML = "на/у дзвонику";
document.getElementById("loc-plur").innerHTML = "на/у дзвониках";
document.getElementById("voc-sing").innerHTML = "дзвонику";
document.getElementById("voc-plur").innerHTML = "дзвоники";
break;

case "Дитина":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "дитини";
document.getElementById("gen-plur").innerHTML = "дітей";
document.getElementById("dat-sing").innerHTML = "дитині";
document.getElementById("dat-plur").innerHTML = "дітям";
document.getElementById("acu-sing").innerHTML = "дитину";
document.getElementById("acu-plur").innerHTML = "дітей";
document.getElementById("instr-sing").innerHTML = "дитиною";
document.getElementById("instr-plur").innerHTML = "дітьми";
document.getElementById("loc-sing").innerHTML = "на/у дитині";
document.getElementById("loc-plur").innerHTML = "на/у дітях";
document.getElementById("voc-sing").innerHTML = "дитино";
document.getElementById("voc-plur").innerHTML = "діти";
break;

case "Дівчина":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "дівчини";
document.getElementById("gen-plur").innerHTML = "дівчат";
document.getElementById("dat-sing").innerHTML = "дівчині";
document.getElementById("dat-plur").innerHTML = "дівчатам";
document.getElementById("acu-sing").innerHTML = "дівчину";
document.getElementById("acu-plur").innerHTML = "дівчат";
document.getElementById("instr-sing").innerHTML = "дівчиною";
document.getElementById("instr-plur").innerHTML = "дівчатами";
document.getElementById("loc-sing").innerHTML = "на/у дівчині";
document.getElementById("loc-plur").innerHTML = "на/у дівчатах";
document.getElementById("voc-sing").innerHTML = "дівчино";
document.getElementById("voc-plur").innerHTML = "дівчата";
break;

case "Дід":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "діда";
document.getElementById("gen-plur").innerHTML = "дідів";
document.getElementById("dat-sing").innerHTML = "дідові, діду";
document.getElementById("dat-plur").innerHTML = "дідам";
document.getElementById("acu-sing").innerHTML = "діда";
document.getElementById("acu-plur").innerHTML = "дідів";
document.getElementById("instr-sing").innerHTML = "дідом";
document.getElementById("instr-plur").innerHTML = "дідами";
document.getElementById("loc-sing").innerHTML = "на/у дідові";
document.getElementById("loc-plur").innerHTML = "на/у дідах";
document.getElementById("voc-sing").innerHTML = "діду";
document.getElementById("voc-plur").innerHTML = "діди";
break;

case "Дочка":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "дочки";
document.getElementById("gen-plur").innerHTML = "дочок";
document.getElementById("dat-sing").innerHTML = "дочці";
document.getElementById("dat-plur").innerHTML = "дочкам";
document.getElementById("acu-sing").innerHTML = "дочку";
document.getElementById("acu-plur").innerHTML = "дочок";
document.getElementById("instr-sing").innerHTML = "дочкою";
document.getElementById("instr-plur").innerHTML = "дочками";
document.getElementById("loc-sing").innerHTML = "на/у дочці";
document.getElementById("loc-plur").innerHTML = "на/у дочках";
document.getElementById("voc-sing").innerHTML = "дочко";
document.getElementById("voc-plur").innerHTML = "дочки";
break;

case "Дошка":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "дошки";
document.getElementById("gen-plur").innerHTML = "дощок";
document.getElementById("dat-sing").innerHTML = "дошці";
document.getElementById("dat-plur").innerHTML = "дошкам";
document.getElementById("acu-sing").innerHTML = "дошку";
document.getElementById("acu-plur").innerHTML = "дошки";
document.getElementById("instr-sing").innerHTML = "дошкою";
document.getElementById("instr-plur").innerHTML = "дошками";
document.getElementById("loc-sing").innerHTML = "на/у дошці";
document.getElementById("loc-plur").innerHTML = "на/у дошках";
document.getElementById("voc-sing").innerHTML = "дошко";
document.getElementById("voc-plur").innerHTML = "дошки";
break;

case "Друг":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "друга";
document.getElementById("gen-plur").innerHTML = "друзів";
document.getElementById("dat-sing").innerHTML = "другові, другу";
document.getElementById("dat-plur").innerHTML = "друзям";
document.getElementById("acu-sing").innerHTML = "друга";
document.getElementById("acu-plur").innerHTML = "друзів";
document.getElementById("instr-sing").innerHTML = "другом";
document.getElementById("instr-plur").innerHTML = "друзями";
document.getElementById("loc-sing").innerHTML = "на/у другу, другові";
document.getElementById("loc-plur").innerHTML = "на/у друзях";
document.getElementById("voc-sing").innerHTML = "друже";
document.getElementById("voc-plur").innerHTML = "друзі";
break;

case "Дуб":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "дуба";
document.getElementById("gen-plur").innerHTML = "дубів";
document.getElementById("dat-sing").innerHTML = "дубові, дубу";
document.getElementById("dat-plur").innerHTML = "дубам";
document.getElementById("acu-sing").innerHTML = "дуб";
document.getElementById("acu-plur").innerHTML = "дуби";
document.getElementById("instr-sing").innerHTML = "дубом";
document.getElementById("instr-plur").innerHTML = "дубами";
document.getElementById("loc-sing").innerHTML = "на/у дубі";
document.getElementById("loc-plur").innerHTML = "на/у дубах";
document.getElementById("voc-sing").innerHTML = "дубе";
document.getElementById("voc-plur").innerHTML = "дуби";
break;

case "Дядько":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "дядька";
document.getElementById("gen-plur").innerHTML = "дядьків";
document.getElementById("dat-sing").innerHTML = "дядькові, дядьку";
document.getElementById("dat-plur").innerHTML = "дядькам";
document.getElementById("acu-sing").innerHTML = "дядька";
document.getElementById("acu-plur").innerHTML = "дядьків";
document.getElementById("instr-sing").innerHTML = "дядьком";
document.getElementById("instr-plur").innerHTML = "дядьками";
document.getElementById("loc-sing").innerHTML = "на/у дядьку, дядькові";
document.getElementById("loc-plur").innerHTML = "на/у дядьках";
document.getElementById("voc-sing").innerHTML = "дядьку";
document.getElementById("voc-plur").innerHTML = "дядьки";
break;

case "Життя":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "життя";
document.getElementById("gen-plur").innerHTML = "житттів";
document.getElementById("dat-sing").innerHTML = "життю";
document.getElementById("dat-plur").innerHTML = "життям";
document.getElementById("acu-sing").innerHTML = "життя";
document.getElementById("acu-plur").innerHTML = "життя";
document.getElementById("instr-sing").innerHTML = "життям";
document.getElementById("instr-plur").innerHTML = "життями";
document.getElementById("loc-sing").innerHTML = "на/у житті";
document.getElementById("loc-plur").innerHTML = "на/у життях";
document.getElementById("voc-sing").innerHTML = "життя";
document.getElementById("voc-plur").innerHTML = "життя";
break;

case "Журнал":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "журналу";
document.getElementById("gen-plur").innerHTML = "журналів";
document.getElementById("dat-sing").innerHTML = "журналові, журналу";
document.getElementById("dat-plur").innerHTML = "журналам";
document.getElementById("acu-sing").innerHTML = "журнал";
document.getElementById("acu-plur").innerHTML = "журнали";
document.getElementById("instr-sing").innerHTML = "журналом";
document.getElementById("instr-plur").innerHTML = "журналами";
document.getElementById("loc-sing").innerHTML = "на/у журналі";
document.getElementById("loc-plur").innerHTML = "на/у журналах";
document.getElementById("voc-sing").innerHTML = "журнале";
document.getElementById("voc-plur").innerHTML = "журнали";
break;

case "Завод":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "заводу";
document.getElementById("gen-plur").innerHTML = "заводів";
document.getElementById("dat-sing").innerHTML = "заводові, заводу";
document.getElementById("dat-plur").innerHTML = "заводам";
document.getElementById("acu-sing").innerHTML = "завод";
document.getElementById("acu-plur").innerHTML = "заводи";
document.getElementById("instr-sing").innerHTML = "заводом";
document.getElementById("instr-plur").innerHTML = "заводами";
document.getElementById("loc-sing").innerHTML = "на/у заводі";
document.getElementById("loc-plur").innerHTML = "на/у заводах";
document.getElementById("voc-sing").innerHTML = "заводе";
document.getElementById("voc-plur").innerHTML = "заводи";
break;

case "Зошит":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "зошита";
document.getElementById("gen-plur").innerHTML = "зошитів";
document.getElementById("dat-sing").innerHTML = "зошитові, зошиту";
document.getElementById("dat-plur").innerHTML = "зошитам";
document.getElementById("acu-sing").innerHTML = "зошит";
document.getElementById("acu-plur").innerHTML = "зошити";
document.getElementById("instr-sing").innerHTML = "зошитом";
document.getElementById("instr-plur").innerHTML = "зошитами";
document.getElementById("loc-sing").innerHTML = "на/у зошиті";
document.getElementById("loc-plur").innerHTML = "на/у зошитах";
document.getElementById("voc-sing").innerHTML = "зошите";
document.getElementById("voc-plur").innerHTML = "зошити";
break;

case "Інженер":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "інженера";
document.getElementById("gen-plur").innerHTML = "інженерів";
document.getElementById("dat-sing").innerHTML = "інженерові, інженеру";
document.getElementById("dat-plur").innerHTML = "інженерам";
document.getElementById("acu-sing").innerHTML = "інженера";
document.getElementById("acu-plur").innerHTML = "інженерів";
document.getElementById("instr-sing").innerHTML = "інженером";
document.getElementById("instr-plur").innerHTML = "інженерами";
document.getElementById("loc-sing").innerHTML = "на/у інженері, інженерові";
document.getElementById("loc-plur").innerHTML = "на/у інженерах";
document.getElementById("voc-sing").innerHTML = "інженере";
document.getElementById("voc-plur").innerHTML = "інженери";
break;

case "Іноземець":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "іноземця";
document.getElementById("gen-plur").innerHTML = "іноземців";
document.getElementById("dat-sing").innerHTML = "іноземцеві, іноземцю";
document.getElementById("dat-plur").innerHTML = "іноземцям";
document.getElementById("acu-sing").innerHTML = "іноземця";
document.getElementById("acu-plur").innerHTML = "іноземців";
document.getElementById("instr-sing").innerHTML = "іноземцем";
document.getElementById("instr-plur").innerHTML = "іноземцями";
document.getElementById("loc-sing").innerHTML = "на/у іноземці";
document.getElementById("loc-plur").innerHTML = "на/у іноземцях";
document.getElementById("voc-sing").innerHTML = "іноземцю";
document.getElementById("voc-plur").innerHTML = "іноземці";
break;

case "Інститут":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "інституту";
document.getElementById("gen-plur").innerHTML = "інститутів";
document.getElementById("dat-sing").innerHTML = "інститутові, інституту";
document.getElementById("dat-plur").innerHTML = "інститутам";
document.getElementById("acu-sing").innerHTML = "інститут";
document.getElementById("acu-plur").innerHTML = "інститути";
document.getElementById("instr-sing").innerHTML = "інститутом";
document.getElementById("instr-plur").innerHTML = "інститутами";
document.getElementById("loc-sing").innerHTML = "на/у інституті";
document.getElementById("loc-plur").innerHTML = "на/у інститутах";
document.getElementById("voc-sing").innerHTML = "інституте";
document.getElementById("voc-plur").innerHTML = "інститути";
break;

case "Кава":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "кави";
document.getElementById("gen-plur").innerHTML = "кав";
document.getElementById("dat-sing").innerHTML = "каві";
document.getElementById("dat-plur").innerHTML = "кавам";
document.getElementById("acu-sing").innerHTML = "каву";
document.getElementById("acu-plur").innerHTML = "кави, кав";
document.getElementById("instr-sing").innerHTML = "кавою";
document.getElementById("instr-plur").innerHTML = "кавами";
document.getElementById("loc-sing").innerHTML = "на/у каві";
document.getElementById("loc-plur").innerHTML = "на/у кавах";
document.getElementById("voc-sing").innerHTML = "каво";
document.getElementById("voc-plur").innerHTML = "кави";
break;

case "Кавун":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "кавуна";
document.getElementById("gen-plur").innerHTML = "кавунів";
document.getElementById("dat-sing").innerHTML = "кавунові, кавуну";
document.getElementById("dat-plur").innerHTML = "кавунам";
document.getElementById("acu-sing").innerHTML = "кавун";
document.getElementById("acu-plur").innerHTML = "кавуни";
document.getElementById("instr-sing").innerHTML = "кавуном";
document.getElementById("instr-plur").innerHTML = "кавунами";
document.getElementById("loc-sing").innerHTML = "на/у кавуні";
document.getElementById("loc-plur").innerHTML = "на/у кавунах";
document.getElementById("voc-sing").innerHTML = "кавуне";
document.getElementById("voc-plur").innerHTML = "кавуни";
break;

case "Карта":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "карти";
document.getElementById("gen-plur").innerHTML = "карт";
document.getElementById("dat-sing").innerHTML = "карті";
document.getElementById("dat-plur").innerHTML = "картам";
document.getElementById("acu-sing").innerHTML = "карту";
document.getElementById("acu-plur").innerHTML = "карти";
document.getElementById("instr-sing").innerHTML = "картою";
document.getElementById("instr-plur").innerHTML = "картами";
document.getElementById("loc-sing").innerHTML = "на/у карті";
document.getElementById("loc-plur").innerHTML = "на/у картах";
document.getElementById("voc-sing").innerHTML = "карто";
document.getElementById("voc-plur").innerHTML = "карти";
break;

case "Кафе":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "кафе";
document.getElementById("gen-plur").innerHTML = "кафе";
document.getElementById("dat-sing").innerHTML = "кафе";
document.getElementById("dat-plur").innerHTML = "кафе";
document.getElementById("acu-sing").innerHTML = "кафе";
document.getElementById("acu-plur").innerHTML = "кафе";
document.getElementById("instr-sing").innerHTML = "кафе";
document.getElementById("instr-plur").innerHTML = "кафе";
document.getElementById("loc-sing").innerHTML = "на/у кафе";
document.getElementById("loc-plur").innerHTML = "на/у кафе";
document.getElementById("voc-sing").innerHTML = "кафе";
document.getElementById("voc-plur").innerHTML = "кафе";
break;

case "Киянин":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "киянина";
document.getElementById("gen-plur").innerHTML = "киян";
document.getElementById("dat-sing").innerHTML = "киянинові, киянину";
document.getElementById("dat-plur").innerHTML = "киянам";
document.getElementById("acu-sing").innerHTML = "киянина";
document.getElementById("acu-plur").innerHTML = "киян";
document.getElementById("instr-sing").innerHTML = "киянином";
document.getElementById("instr-plur").innerHTML = "киянами";
document.getElementById("loc-sing").innerHTML = "на/у киянині, киянинові";
document.getElementById("loc-plur").innerHTML = "на/у киянах";
document.getElementById("voc-sing").innerHTML = "киянине";
document.getElementById("voc-plur").innerHTML = "кияни";
break;

case "Кімната":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "кімнати";
document.getElementById("gen-plur").innerHTML = "кімнат";
document.getElementById("dat-sing").innerHTML = "кімнаті";
document.getElementById("dat-plur").innerHTML = "кімнатам";
document.getElementById("acu-sing").innerHTML = "кімнату";
document.getElementById("acu-plur").innerHTML = "кімнати";
document.getElementById("instr-sing").innerHTML = "кімнатою";
document.getElementById("instr-plur").innerHTML = "кімнатами";
document.getElementById("loc-sing").innerHTML = "на/у кімнаті";
document.getElementById("loc-plur").innerHTML = "на/у кімнатах";
document.getElementById("voc-sing").innerHTML = "кімнато";
document.getElementById("voc-plur").innerHTML = "кімнати";
break;

case "Клас":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "класу";
document.getElementById("gen-plur").innerHTML = "класів";
document.getElementById("dat-sing").innerHTML = "класові, класу";
document.getElementById("dat-plur").innerHTML = "класам";
document.getElementById("acu-sing").innerHTML = "клас";
document.getElementById("acu-plur").innerHTML = "класи";
document.getElementById("instr-sing").innerHTML = "класом";
document.getElementById("instr-plur").innerHTML = "класами";
document.getElementById("loc-sing").innerHTML = "на/у класі";
document.getElementById("loc-plur").innerHTML = "на/у класах";
document.getElementById("voc-sing").innerHTML = "класе";
document.getElementById("voc-plur").innerHTML = "класи";
break;

case "Книжка":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "книжки";
document.getElementById("gen-plur").innerHTML = "книжок";
document.getElementById("dat-sing").innerHTML = "книжці";
document.getElementById("dat-plur").innerHTML = "книжкам";
document.getElementById("acu-sing").innerHTML = "книжку";
document.getElementById("acu-plur").innerHTML = "книжки";
document.getElementById("instr-sing").innerHTML = "книжкою";
document.getElementById("instr-plur").innerHTML = "книжками";
document.getElementById("loc-sing").innerHTML = "на/у книжці";
document.getElementById("loc-plur").innerHTML = "на/у книжках";
document.getElementById("voc-sing").innerHTML = "книжко";
document.getElementById("voc-plur").innerHTML = "книжки";
break;

case "Конверт":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "конверта";
document.getElementById("gen-plur").innerHTML = "конвертів";
document.getElementById("dat-sing").innerHTML = "конвертові, конверту";
document.getElementById("dat-plur").innerHTML = "конвертам";
document.getElementById("acu-sing").innerHTML = "конверт";
document.getElementById("acu-plur").innerHTML = "конверти";
document.getElementById("instr-sing").innerHTML = "конвертом";
document.getElementById("instr-plur").innerHTML = "конвертами";
document.getElementById("loc-sing").innerHTML = "на/у конверті";
document.getElementById("loc-plur").innerHTML = "на/у конвертах";
document.getElementById("voc-sing").innerHTML = "конверте";
document.getElementById("voc-plur").innerHTML = "конверти";
break;

case "Костюм":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "костюма";
document.getElementById("gen-plur").innerHTML = "костюмів";
document.getElementById("dat-sing").innerHTML = "костюмові, костюму";
document.getElementById("dat-plur").innerHTML = "костюмам";
document.getElementById("acu-sing").innerHTML = "костюм";
document.getElementById("acu-plur").innerHTML = "костюми";
document.getElementById("instr-sing").innerHTML = "костюмом";
document.getElementById("instr-plur").innerHTML = "костюмами";
document.getElementById("loc-sing").innerHTML = "на/у костюмі";
document.getElementById("loc-plur").innerHTML = "на/у костюмах";
document.getElementById("voc-sing").innerHTML = "костюме";
document.getElementById("voc-plur").innerHTML = "костюми";
break;

case "Лава":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "лави";
document.getElementById("gen-plur").innerHTML = "лав";
document.getElementById("dat-sing").innerHTML = "лаві";
document.getElementById("dat-plur").innerHTML = "лавам";
document.getElementById("acu-sing").innerHTML = "лаву";
document.getElementById("acu-plur").innerHTML = "лави";
document.getElementById("instr-sing").innerHTML = "лавою";
document.getElementById("instr-plur").innerHTML = "лавами";
document.getElementById("loc-sing").innerHTML = "на/у лаві";
document.getElementById("loc-plur").innerHTML = "на/у лавах";
document.getElementById("voc-sing").innerHTML = "лаво";
document.getElementById("voc-plur").innerHTML = "лави";
break;

case "Лист":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "листа";
document.getElementById("gen-plur").innerHTML = "листів";
document.getElementById("dat-sing").innerHTML = "листові, листу";
document.getElementById("dat-plur").innerHTML = "листам";
document.getElementById("acu-sing").innerHTML = "лист";
document.getElementById("acu-plur").innerHTML = "листи";
document.getElementById("instr-sing").innerHTML = "листом";
document.getElementById("instr-plur").innerHTML = "листами";
document.getElementById("loc-sing").innerHTML = "на/у листі, листу";
document.getElementById("loc-plur").innerHTML = "на/у листах";
document.getElementById("voc-sing").innerHTML = "листе";
document.getElementById("voc-plur").innerHTML = "листи";
break;

case "Листівка":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "листівки";
document.getElementById("gen-plur").innerHTML = "листівок";
document.getElementById("dat-sing").innerHTML = "листівці";
document.getElementById("dat-plur").innerHTML = "листівкам";
document.getElementById("acu-sing").innerHTML = "листівку";
document.getElementById("acu-plur").innerHTML = "листівки";
document.getElementById("instr-sing").innerHTML = "листівкою";
document.getElementById("instr-plur").innerHTML = "листівками";
document.getElementById("loc-sing").innerHTML = "на/у листівці";
document.getElementById("loc-plur").innerHTML = "на/у листівках";
document.getElementById("voc-sing").innerHTML = "листівко";
document.getElementById("voc-plur").innerHTML = "листівки";
break;

case "Ліжко":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "ліжка";
document.getElementById("gen-plur").innerHTML = "ліжок";
document.getElementById("dat-sing").innerHTML = "ліжкові, ліжку";
document.getElementById("dat-plur").innerHTML = "ліжкам";
document.getElementById("acu-sing").innerHTML = "ліжко";
document.getElementById("acu-plur").innerHTML = "ліжка";
document.getElementById("instr-sing").innerHTML = "ліжком";
document.getElementById("instr-plur").innerHTML = "ліжками";
document.getElementById("loc-sing").innerHTML = "на/у ліжку";
document.getElementById("loc-plur").innerHTML = "на/у ліжках";
document.getElementById("voc-sing").innerHTML = "ліжко";
document.getElementById("voc-plur").innerHTML = "ліжка";
break;

case "Лікар":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "лікаря";
document.getElementById("gen-plur").innerHTML = "лікарів";
document.getElementById("dat-sing").innerHTML = "лікареві, лікарю";
document.getElementById("dat-plur").innerHTML = "лікарям";
document.getElementById("acu-sing").innerHTML = "лікаря";
document.getElementById("acu-plur").innerHTML = "лікарів";
document.getElementById("instr-sing").innerHTML = "лікарем";
document.getElementById("instr-plur").innerHTML = "лікарями";
document.getElementById("loc-sing").innerHTML = "на/у лікарі, лікареві";
document.getElementById("loc-plur").innerHTML = "на/у лікарях";
document.getElementById("voc-sing").innerHTML = "лікарю";
document.getElementById("voc-plur").innerHTML = "лікарі";
break;

case "Лікарка":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "лікарки";
document.getElementById("gen-plur").innerHTML = "лікарок";
document.getElementById("dat-sing").innerHTML = "лікарці";
document.getElementById("dat-plur").innerHTML = "лікаркам";
document.getElementById("acu-sing").innerHTML = "лікарку";
document.getElementById("acu-plur").innerHTML = "лікарок";
document.getElementById("instr-sing").innerHTML = "лікаркою";
document.getElementById("instr-plur").innerHTML = "лікарками";
document.getElementById("loc-sing").innerHTML = "на/у лікарці";
document.getElementById("loc-plur").innerHTML = "на/у лікарках";
document.getElementById("voc-sing").innerHTML = "лікарко";
document.getElementById("voc-plur").innerHTML = "лікарки";
break;

case "Лікарня":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "лікарні";
document.getElementById("gen-plur").innerHTML = "лікарень";
document.getElementById("dat-sing").innerHTML = "лікарні";
document.getElementById("dat-plur").innerHTML = "лікарням";
document.getElementById("acu-sing").innerHTML = "лікарню";
document.getElementById("acu-plur").innerHTML = "лікарні";
document.getElementById("instr-sing").innerHTML = "лікарнею";
document.getElementById("instr-plur").innerHTML = "лікарнями";
document.getElementById("loc-sing").innerHTML = "на/у лікарні";
document.getElementById("loc-plur").innerHTML = "на/у лікарнях";
document.getElementById("voc-sing").innerHTML = "лікарне";
document.getElementById("voc-plur").innerHTML = "лікарні";
break;

case "Ложка":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "ложки";
document.getElementById("gen-plur").innerHTML = "ложок";
document.getElementById("dat-sing").innerHTML = "ложці";
document.getElementById("dat-plur").innerHTML = "ложкам";
document.getElementById("acu-sing").innerHTML = "ложку";
document.getElementById("acu-plur").innerHTML = "ложки";
document.getElementById("instr-sing").innerHTML = "ложкою";
document.getElementById("instr-plur").innerHTML = "ложками";
document.getElementById("loc-sing").innerHTML = "на/у ложці";
document.getElementById("loc-plur").innerHTML = "на/у ложках";
document.getElementById("voc-sing").innerHTML = "ложко";
document.getElementById("voc-plur").innerHTML = "ложки";
break;

case "Маґазин":
document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
document.getElementById("gen-sing").innerHTML = "магазину";
document.getElementById("gen-plur").innerHTML = "магазинів";
document.getElementById("dat-sing").innerHTML = "магазинові, магазину";
document.getElementById("dat-plur").innerHTML = "магазинам";
document.getElementById("acu-sing").innerHTML = "магазин";
document.getElementById("acu-plur").innerHTML = "магазини";
document.getElementById("instr-sing").innerHTML = "магазином";
document.getElementById("instr-plur").innerHTML = "магазинами";
document.getElementById("loc-sing").innerHTML = "на/у магазині";
document.getElementById("loc-plur").innerHTML = "на/у магазинах";
document.getElementById("voc-sing").innerHTML = "магазине";
document.getElementById("voc-plur").innerHTML = "магазини";
break;



  case "":
    document.getElementById("nom-sing").innerHTML = singular.toLowerCase();
    document.getElementById("nom-plur").innerHTML = plural.toLowerCase();
    document.getElementById("gen-sing").innerHTML = "";
    document.getElementById("gen-plur").innerHTML = "";
    document.getElementById("dat-sing").innerHTML = "";
    document.getElementById("dat-plur").innerHTML = "";
    document.getElementById("acu-sing").innerHTML = "";
    document.getElementById("acu-plur").innerHTML = "";
    document.getElementById("instr-sing").innerHTML = "";
    document.getElementById("instr-plur").innerHTML = "";
    document.getElementById("loc-sing").innerHTML = "";
    document.getElementById("loc-plur").innerHTML = "";
    document.getElementById("voc-sing").innerHTML = "";
    document.getElementById("voc-plur").innerHTML = "";
    break;
  default: 
    document.getElementById("nom-sing").innerHTML = "";
    document.getElementById("nom-plur").innerHTML = "";
    document.getElementById("gen-sing").innerHTML = "";
    document.getElementById("gen-plur").innerHTML = "";
    document.getElementById("dat-sing").innerHTML = "";
    document.getElementById("dat-plur").innerHTML = "";
    document.getElementById("acu-sing").innerHTML = "";
    document.getElementById("acu-plur").innerHTML = "";
    document.getElementById("instr-sing").innerHTML = "";
    document.getElementById("instr-plur").innerHTML = "";
    document.getElementById("loc-sing").innerHTML = "";
    document.getElementById("loc-plur").innerHTML = "";
    document.getElementById("voc-sing").innerHTML = "";
    document.getElementById("voc-plur").innerHTML = "";
  }
  
}
