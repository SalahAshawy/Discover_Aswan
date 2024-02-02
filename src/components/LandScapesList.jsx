// import React from 'react';
// import { Link } from 'react-router-dom';
// import { data } from './data';
// import "./Landscape.css"
// import "./list.css"
// import Navbar from "./Navbar"
// const LandscapeList = () => {
//   return (
//     <div className='bol'>
//      <Navbar/>
//     <div className="container mt-5 dark-mode">
//       <div className="row">
//         {data.map(landscape => (
//             <div key={landscape.id} className="col-lg-4 mb-4">
//             <div className="card">
//               <img src={landscape.image} className="card-img-top" alt={landscape.name} />
//               <div className="card-body">
//                 <h5 className="card-title">{landscape.name}</h5>
//                 <p className="card-text">{landscape.description}</p>
//                 <Link to={`/landscape/${landscape.id}`} className="btn btn-primary">View Details</Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//         </div>
              
//   );
// };

// export default LandscapeList;

import React from 'react';
import { Link } from 'react-router-dom';
import { data } from './data';
import "./Landscape.css"
import "./list.css"
import Navbar from "./Navbar"
import "./list.css"; // Import the CSS file for LandscapeList component

const LandscapeList = () => {
  return (
    <div className='bol'>
     <Navbar/>
    <div className="container mt-5 dark-mode">
      <div className="row landscape-list">
        {data.map(landscape => (
            <div key={landscape.id} className="col-lg-4 mb-4">
            <div className="card">
              <img src={landscape.image} className="card-img-top" alt={landscape.name} />
              <div className="card-body">
                <h5 className="card-title">{landscape.name}</h5>
                <p className="card-text">{landscape.description}</p>
                <Link to={`/landscape/${landscape.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default LandscapeList;
