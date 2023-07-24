//first method:

// import React from 'react';

// class Props extends React.Component {
//     render() {
//         const { record, btn, no , button } = this.props;

//         return (
//             <center>
//                 <table border={2} cellPadding={10}>
//                     <thead>
//                         <tr>
//                             <td>Grid</td>
//                             <td>Name</td>
//                             <td>Email</td>
//                             <td>Password</td>
//                              <td>Course</td>
//                              <td>City</td>
//                              <td>Action</td>
//                              <td>Points</td>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {
//                         record.map((val) => {
//                             return (
//                                 <tr key={val.grid}>
//                                     <td>{val.grid}</td>
//                                     <td>{val.name}</td>
//                                     <td>{val.email}</td>
//                                     <td>{val.password}</td>
//                                     <td>{val.course.join(', ')}</td>
//                                      <td>{val.city}</td>
//                                     <td>
//                                         <button onClick={() => btn(val)}>+</button>
//                                         <button onClick={() => button()}>-</button>
//                                     </td>
//                                   <td>{no}</td>
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//             </center>
//         );
//     }
// }

// export default Props;


// second method:
import React from 'react';


class Props extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state to keep track of points for each user
    this.state = {
      points: {}
    };
  }

  Increment = (grid) => {
    // Check if the user's points exist in the state
    if (this.state.points[grid]) {
      // If points exist, increment the points for that user
      this.setState((prevState) => ({
        points: {
          ...prevState.points,
          [grid]: prevState.points[grid] + 5
        }
      }));
    } else {
      // If points don't exist, set the points for that user to 1
      this.setState((prevState) => ({
        points: {
          ...prevState.points,
          [grid]: 1
        }
      }));
    }
  };

  decrement = (grid) => {
    if(this.state.points[grid]){
        this.setState((prevState) => ({
            points: {
              ...prevState.points,
              [grid]: prevState.points[grid] - 1
            }
          })); 
    }else{
        this.setState((prevState) => ({
            points: {
              ...prevState.points,
              [grid]: -1
            }
          }));
    }
  }

  render() {
    const { record, button } = this.props;

    return (
      <center>
        <h2 className='mt-5 font' style={{backgroundColor:'	#66998c',padding:'10px'}}><u>Class Component</u></h2>
        <table border={2} cellPadding={10} className="text-center mt-4 table table-bordered table-dark" >
          <thead>
            <tr style={{color:'#668c99'}}>
              <td>Grid</td>
              <td>Name</td>
              <td>Email</td>
              <td>Password</td>
              <td>Course</td>
              <td>City</td>
              <td>Action</td>
              <td>Points</td>
            </tr>
          </thead>

          <tbody>
            {record.map((val) => {
              const { grid, name, email, password, course, city } = val;
              const points = this.state.points[grid] || 0; // Get the points for the current user

              return (
                <tr key={grid}>
                  <td>{grid}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>{course.join(', ')}</td>
                  <td>{city}</td>
                  <td>
                    <button onClick={() => this.Increment(grid)} style={{ backgroundColor: '#666699', padding:'1px 8px',marginRight:'5px' }} >+</button>
                    <button onClick={() => this.decrement(grid)} style={{ backgroundColor: '#996699', padding:'1px 10px' }}>-</button>
                  </td>
                  <td>{points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    );
  }
}

export default Props;


