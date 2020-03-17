import React from 'react'

// export default props =>
//     <div>
//         <h1>Multi elementos parte 1</h1>
//         <h2>Multi elementos parte 2</h2>
//     </div>
    
// export default props =>
//     <React.Fragment>
//         <h1>Multi elementos parte 1</h1>
//         <h2>Multi elementos parte 2</h2>
//     </React.Fragment>

export default props =>
    [
        <h1>Multi elementos parte 1</h1>,
        <h2>Multi elementos parte 2</h2>
    ]