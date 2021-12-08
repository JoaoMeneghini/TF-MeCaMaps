// create a class when Grafo is called
// calculate shorter path between two nodes when 'AchaMenorCaminho' is called

// Lib
import { min } from 'mathjs'
// distances dictionary
import { maps } from './distances'


export default class Grafo {
  // initiate the class creating two dictionaries,
  // the first one keeps de distances between nodes
  // and the second one keeps the path from a node to another
  constructor() {
      this.dist = {};
      this.prev = {};
  }

  AchaMenorCaminho(v1, v2){
      this.dist[v1] = {}; // start creating the first key, corresponding to the current position
      let chaves = Object.keys(maps); // list all keys from distances dictionaries
      for (let vertices in chaves) { // populate dist: if the node is not adjacent to v1, distance is set to Inf
          if (chaves[vertices] !== v1) {
              this.dist[v1][chaves[vertices]] = Infinity
          }
          else {
              this.dist[v1][chaves[vertices]] = 0
          }
        };

      let a = v1;
      let Q  = Object.assign({}, this.dist[v1]);
      let s = [];
      let alt = 0;
      let distancia = 0;

      // add visited nodes to s. Algorithm keep going till get v2
      while (!s.includes(v2)) {

          let menor = min(Object.values(Q));
          let keys = Object.keys(Q);

          for (let i in keys) {
                if (menor === this.dist[v1][keys[i]]) {
                    a = keys[i]
                }
          };

          delete Q[a];
          s.push(a);

          for (let viz in maps[a]) {
          // Calculate distances
                alt = this.dist[v1][a] + maps[a][viz][0];
                distancia = this.dist[v1][viz];
                if (alt < distancia) {
                    this.dist[v1][viz] = alt;
                    Q[viz] = alt;
                    this.prev[viz] = [a, maps[a][viz][1]]
              }
          };
      };
      let b = v2;
      let path = [];

      let goal = this.dist[v1][v2];

      while (b !== v1) {
          let c = this.prev[b];    // Set the best path
          path.push(c[1]);
          b = c[0];
      };

      path.reverse();

      return [goal,path] ;
  }
}

