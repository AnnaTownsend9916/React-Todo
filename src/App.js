import React from 'react';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      shopping: [
        
      ]
    }
  }
}

export default App;
// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   constructor() {
//     super();
    
//     this.state = {
//       shopping: [
        
//       ]
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Shopping:</h1>

//         <div className="list">
//           {/* Step 7 - use that state in your render method */
//           this.state.students.map(student => (
//             <Student student={student} />
//           ))}
//         </div>
//         <StudentForm addStudent={this.addStudent} />
//       </div>
//     );
//   }

//   addStudent = student => {
//     this.setState({
//       students: [...this.state.student, student]
//     });
//   };
// }
//   }
//   render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//       </div>
//     );
//   }
// }

// export default App;
