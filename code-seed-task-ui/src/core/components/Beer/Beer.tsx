// import axios, { AxiosResponse } from 'axios';
// import React, { FC } from 'react';
// import { IoCloseCircleOutline } from 'react-icons/io5';
// import { VscEdit } from 'react-icons/vsc';
// import { useModal } from '../../hooks/useModal';
// import { BeerInterface } from '../../interfaces/beer.interface';
// import { EditBeerModal } from '../Modal/EditBeerModal';
// import './Beer.scss';

// interface ChildProps {
//   beer: BeerInterface;
//   deleteBeer: (beerId: number) => void;
//   updateBeer: (beerId: number) => void;
// }
// const Beer: FC<ChildProps> = ({ beer, deleteBeer, updateBeer }) => {
//   const { isShown, toggle } = useModal();

//   const deleteBeerId = async (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
//     event.preventDefault();

//     try {
//       const result: AxiosResponse = await axios.request({
//         method: 'DELETE',
//         url: `http://localhost:3001/beer/${id}`,
//       });
//       if (result.status === 202) {
//         deleteBeer(id as number);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const updateBeerId = () => {
//     updateBeer(1);
//   };

//   return (
//     <React.Fragment>
//       <div className='beer-container'>
//         <p>
//           {beer.name}: {beer.price}
//         </p>
//         <div className='actions-container'>
//           <button
//             onClick={toggle}
//             style={{
//               backgroundColor: '#06b',
//             }}
//           >
//             <VscEdit />
//           </button>
//           <button
//             onClick={(e) => deleteBeerId(e, beer.id as number)}
//             style={{
//               backgroundColor: 'red',
//             }}
//           >
//             <IoCloseCircleOutline />
//           </button>
//         </div>
//       </div>
//       <EditBeerModal isShown={isShown} hide={toggle} updateState={updateBeerId} />
//     </React.Fragment>
//   );
// };
// export default Beer;

import axios, { AxiosResponse } from 'axios';
import React, { FC } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { VscEdit } from 'react-icons/vsc';
import { useBeerContext } from '../../../context/BeerContext';
import { useModal } from '../../hooks/useModal';
import { BeerInterface } from '../../interfaces/beer.interface';
import { EditBeerModal } from '../Modal/EditBeerModal';
import './Beer.scss';

interface ChildProps {
  beer: BeerInterface;
}
const Beer: FC<ChildProps> = ({ beer }) => {
  const { isShown, toggle } = useModal();
  const { deleteBeer } = useBeerContext();

  const deleteBeerId = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    event.preventDefault();
    deleteBeer(id);
  };

  return (
    <React.Fragment>
      <div className='beer-container'>
        <p>
          {beer.name}: {beer.price}
        </p>
        <div className='actions-container'>
          <button
            onClick={toggle}
            style={{
              backgroundColor: '#06b',
            }}
          >
            <VscEdit />
          </button>
          <button
            onClick={(e) => deleteBeerId(e, beer.id as number)}
            style={{
              backgroundColor: 'red',
            }}
          >
            <IoCloseCircleOutline />
          </button>
        </div>
      </div>
      <EditBeerModal isShown={isShown} hide={toggle} beer={beer} />
    </React.Fragment>
  );
};
export default Beer;
