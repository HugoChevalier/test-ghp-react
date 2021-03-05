import './App.css';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import data from './data'
import Exemple from './Exemple'


function App() {
  console.log(data);

  const gameName = data.items.map((game) => {
    console.log(game)
    console.log('================')
    return game.name
  });
  console.log(gameName)
  
  return (
    <div className="App">

    <div className="title"> Dashboard</div>

    <div className="ligne">
      <Exemple />

      
      <div className="card">
      Prix moyen par jeux

      <VictoryChart domainPadding={20}>
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={gameName}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}€`)}
        />
        <VictoryBar
          data={data.items}
          x="name"
          y="price_average"
        />
      </VictoryChart>

      </div>
      </div>

    </div>
  );
}

export default App;
