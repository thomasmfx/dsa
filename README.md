**[EN-US](./README-en.md)**

# Estruturas de Dados e Algoritmos

Esse repositório foi criado para documentar o que eu desenvolvi estudando um dos tópicos mais importantes da programação e Ciência da Computação: Estruturas de Dados e Algoritmos.

A ordem do conteúdo do sumário segue do mais recente pro mais antigo, então se você não é familiarizado com alguns conceitos e deseja aprender um pouco, eu sugiro a leitura do mais antigo pro mais recente, pois alguns conceitos são dependentes um do outro.

## Sumário

- [Balanced Binary Search Tree](#binary-search-tree)
- [Hashmap](#hashmap)
- [Linked List](#linked-list)
- [Recursion](#recursion)

## Binary Search Tree

Uma Árvore de Busca Binária é uma estrutura de dados onde cada objeto da árvore, chamado de node, tem no máximo dois filhos, o da esquerda e direita. Por quê balanceada? Manter uma BST balanceada garante uma boa performance, já que sua complexidade de tempo para **pesquisa** **inserção** e **remoção** de dados é igual a O(log N).

[Código fonte](./binary-search-tree/)

<div align=center> 
  <img src="./assets/bst.png">
</div>

### Propriedades

```javascript
class Node {
  constructor(data) {
    this.data = data,
    this.left = null,
    this.right = null

    // ...Métodos para manipular nodes e suas conexões
  }
}
```

***

```javascript
class Tree {
  constructor(arr) {
    this.root = buildTree(arr)

    // ...Métodos descritos logo abaixo
  }
}
```

- `insert(data)` cria um node com o valor fornecido e insere na árvore

- `deleteItem(data)` deleta o node com o valor fornecido

- `find(data)` retorna o node com o valor fornecido

- `height(node)` retorna a altura do node em relação à base da árvore 

- `depth(node)` retorna a profundidade do node em relação ao topo da árvore

- `isBalanced()` verifica se a árvore está balanceada

- `rebalance()` rebalanceia a árvore

### Métodos para atravessar a árvore


- Level Order Traversal (também Breadth First Search ou BFS)

  - `levelOrder(callback)`

- Depth First Search or DFS

  - `preOrder(callback)`

  - `postOrder(callback)`

  - `inorder(callback)`

<div align="right">
  <a href="#estruturas-de-dados-e-algoritmos" style="font-weight: bold">&uarr; Voltar para o início</a>
</div>

## Hashmap

Um hashmap (ou hash table) é uma estrutura de dados usado para implementar um map, um tipo de estrutura de dados abstrata. Um hashmap é composto por um array, onde cada index possui uma linked list que atua como uma espécia de "balde". Para inserir e procurar valores, primeiro é relazido uma operação chamada "hashing", que retorna o que é chamada de hashcode. Com o hashcode, é possível pular para o index correspondente o hashcode, que contém um balde onde é possível realizar operações como **pesquisa**, **inserção** e **remoção** de entradas.

[Código fonte](./hashmap/)

<div align=center> 
  <img src="./assets/hashmap.png">  
</div>

### Propriedades

```javascript
class HashMap {
  constructor() {
    this.map = [];
    generateBuckets(this.map);

    // ...Métodos listados logo abaixo
  };
};
```

- `hash(key)` pega uma chave e produz um hashcode

- `set(key, value)` cria uma entrada com o valor fornecido atribuído a chave

- `get(key)` retorna o valor atríbuido à chave fornecida

- `has(key)` retorna verdadeiro ou falso com base se a chave está no hash map ou não, respectivamente

- `remove(key)` remove a entrada com a chave fornecida

- `length()` retorna o número de chaves dentro do hash map

- `clear()` remove todas as entradas to hash map

- `keys()` retorna um array contendo todas as chaves dentro do hash map

- `values()` retorna um array contendo todos os valores dentro do hash map

- `entries()` retorna um array contendo todos os pares de chave-valor dentro do hash map

<div align="right">
  <a href="#estruturas-de-dados-e-algoritmos" style="font-weight: bold">&uarr; Voltar para o início</a>
</div>

## Linked List

Uma lista ligada, é uma estrutura de dados que fornece maior eficiência para operações de **inserção** e **remoção** comparado com um array. Uma linked list consiste em uma sequência de nodes conectados por ponteiros ou referências dependendo da linguagem em que é escrita. Cada node contém um valor e um ponteiro/referência para o próximo node na lista. Linked lists são mais eficientes para **inserção** e **remoção** porque os nodes não são armazenados sequencialmente na memória, ao contrário de um array. 

[Código fonte](./linked-list/)

<div align=center> 
  <img src="./assets/linked-list.png">
</div>

### Features

```javascript
class LinkedList {
  constructor() {
    this.head = createNode(null)

    // ...Métodos listados logo abaixo
  }
}
```

- `append(value)` adiciona um novo node contendo o valor fornecido ao fim da lista

- `preppend(value)` adiciona um novo node contendo o valor fornecido ao começo da lista

- `size()` retorna o número total de nodes na list

- `getHead()` retorna o primeiro noda da lista

- `tail()` retorna o último node da lista

- `at(index)` retorna o node posicionado no index fornecido

- `pop()` remove o último node da lista

- `contains(value)` retorna verdadeiro se o valor fornecido está na lista, ou falso caso contrário

- `find(value)` retorna o index do node contendo o valor fornecido, ou `null` caso não seja encontrado

- `toString()` representa os nodes da linked list como strings, de forma com que possam ser vistos no console, igual a imagem exemplo acima

- `insertAt(value, index)` insere um novo node com um valor ao index fornecido

- `removeAt(index)` remove o node no index fornecido 

<div align="right">
  <a href="#estruturas-de-dados-e-algoritmos" style="font-weight: bold">&uarr; Voltar para o início</a>
</div>

## Recursion

Recursion é simplesmente a ideia de uma função que chama a si mesma. A função pega um problema grande e começa a dividir em problemas cada vez menores ("Dividir e conquistar"), e continua fornecendo os resultados para a função original até que uma espécia de resposta é alcançada e toda a cadeia de chamadas para.

[Código fonte](./recursion/)

### Features

### [`fibonacci.js`](./recursion/fibonacci.js)

A Sequência de Fibonacci é uma sequência numérica onde cada número é a soma dos dois números anteriores. Por exemplo: 0, 1, 1, 2, 3, 5, 8, 13 são os primeiros oito dígitos da sequência. Eu escrevi duas funções que retornam um array com todos os números da sequência até o número fornecido, uma versão usando iteração e uma versão recursiva.

#### Usando iteração

```javascript
function fibs(range) {
  let sequence = [0, 1, 1];

  if (range < 0) return 0;

  for (let i = 3; i < range; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  };

  return sequence;
};
```

#### Using recursão

```javascript
function fibsRec(n) {
  const recursive = (n) => {
    if (n == 0) return [0];
    if (n == 1) return [0, 1];

    const arr = recursive(n - 1);
    return [...arr, arr[n - 1] + arr[n - 2]];
  };

  let arr = recursive(n - 1);
  return arr;
}; 
```


### [`mergeSort.js`](./recursion/mergeSort.js)

Merge sort é um algoritmo de ordenação que usa a abordagem "Dividir e Conquistar", e pode ser muito mais rápido do que outros algoritmos de ordenação (bubble sort por exemplo) nos conjuntos de dados corretos. Essencialmente, um algoritmo de merge sort percorre um array de dados não ordenados até atingir seu menor subconjunto, um único item, e então mescla os itens únicos novamente de forma ordenada.

```javascript
function mergeSort(arr) {
  if (arr.length == 1) return arr;

  let mid = arr.length / 2;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    };
  };

  while (left.length) sorted.push(left.shift());
  while (right.length) sorted.push(right.shift());

  return sorted;
};
```

<div align="right">
  <a href="#estruturas-de-dados-e-algoritmos" style="font-weight: bold">&uarr; Voltar para o início</a>
</div>