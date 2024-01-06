import './App.css';
import Header from './components/Header';
import Main from './components/Main';



// function App() {
//   console.log(data[0]);
//   return (
//     <>
//       {data.map((item, index) => (
//         <div className="container" key={index}>
//           <h1>{item.name}</h1>
//           <h3>{item.universe}</h3>
//         </div>
//       ))
//       }
//     </>
//   )
// }


function App() {
  // console.log(data.heroes)
  return (
    <>
      <Header />
      <Main>

      </Main>
    </>
  );
}

export default App;
