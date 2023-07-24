import React from "react";

const Function = ({record,btn,no,button}) => {
    return(
        <center>
             <h2 className='mt-5 font' style={{backgroundColor:'	#66998c',padding:'10px'}}><u> Function Component</u></h2>
            <table border={2} cellPadding={10} className="text-center mt-4 table table-bordered table-dark">
            <thead>
                <tr style={{color:'#668c99'}}>
                <td>Grid</td>
              <td>Name</td>
              <td>Email</td>
              <td>Password</td>
              <td>Course</td>
              <td>City</td>
              <td>{no}</td>
                </tr>
            </thead>
            <tbody>
                {
                    record.map((v)=>{
                      return(
                        <tr key={v.grid}>
                            <td>{v.grid}</td>
                            <td>{v.name}</td>
                            <td>{v.email}</td>
                            <td>{v.password}</td>
                            <td>{v.course.join(', ')}</td>
                            <td>{v.city}</td>
                            <td>
                                <button onClick={() => btn()} style={{ backgroundColor: '#666699', padding:'1px 8px',marginRight:'5px' }}>+</button>
                                <button onClick={() => button()} style={{ backgroundColor: '#996699', padding:'1px 10px' }}>-</button>
                            </td>
                        </tr>
                      )
                    })
                }
            </tbody>
        </table>
        </center>
    )
}

export default Function;