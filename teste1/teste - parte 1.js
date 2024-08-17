//Parte 1: Lógica de Programação - JavaScript/TypeScript
  //Tarefa 1: Manipulação de Arrays e Objetos

  function transformData(users) {
    const novoArray = users.filter(item => item.isActive === true).map(({ id, name }) => ({ id, name }));
    return novoArray.sort((item1, item2) =>
      item1.name < item2.name ? -1 : item1.name > item2.name ? 1 : 0
    );
  }

  const users = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 22, isActive: true }
  ];

  const arrayTransformado = transformData(users);

  console.log(arrayTransformado);

  //Tarefa 2: Função Assíncrona

  async function fetchUserData() {

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      return users.filter(item => item.username.startsWith('C'));
    } catch (erro) {
      console.log("Erro ao carregar api");
    }
  }

  //Tarefa 3: Contagem de Ocorrências

  function countOccurrences(fruits) {
    const ocorrencias = {};
    fruits.forEach(fruit => {
      ocorrencias[fruit] ? ocorrencias[fruit]++ : ocorrencias[fruit] = 1;
    });

    return ocorrencias;
  }

  const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

  const contagemOcorrencias = countOccurrences(fruits);

  console.log(contagemOcorrencias);

  //Tarefa 4: Agrupamento de Objetos

  function groupByCategory(items) {
    const ordenado = {};
    items.forEach(item => {
      const categoria = item.category;

      ordenado[categoria] ? ordenado[categoria].push(item) : ordenado[categoria] = [item];
    });
    return ordenado;
  }

  const items = [
    { name: 'apple', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'banana', category: 'fruit' },
    { name: 'broccoli', category: 'vegetable' }
  ];

  const agrupadoPorCategoria = groupByCategory(items);

  console.log(agrupadoPorCategoria);

  //Tarefa 5: Mesclar Arrays de Objetos

  function mergeArrays(array1, array2) {
    const objCombinados = {};

    function adicionaEmObjCombinados(array) {
      array.forEach(obj => {
        if (obj.id != null) {
          objCombinados[obj.id] = { ...objCombinados[obj.id], ...obj };
        }
      });
    }

    adicionaEmObjCombinados(array1);
    adicionaEmObjCombinados(array2);

    return Object.values(objCombinados);
  }

  const array1 = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
  ];

  const array2 = [
    { id: 1, age: 26, email: 'alice@example.com' },
    { id: 3, name: 'Charlie', age: 22 }
  ];

  const arraysMesclados = mergeArrays(array1, array2);
  console.log(arraysMesclados);