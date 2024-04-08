//Step -2

var container = document.getElementById('react-container');

ReactDOM.render("Hello! Welcome to React",container);


// Step - 3
// Functional component
const Container = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}
// Render the Container
var container = document.getElementById('react-container');
ReactDOM.render(React.createElement(Container),container);


// Step - 4

class ReactContainer extends React.Component{
    // constructor - to initialize the state 
  
    // render method to render the react dom 
      render(){
          return React.createElement(`div`,null,`Hey Kalvians`,
          React.createElement(`div`,null,`Let's rock and roll with classes`)
          );
      }
    
  }
  var container = document.getElementById('react-container');
  ReactDOM.render(React.createElement(ReactContainer),container);