import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
// import icon from '../../assets/beer';
import { IoBeerOutline } from 'react-icons/io5';
import { useBeerContext } from '../../../context/BeerContext';
import { BeerInterface } from '../../interfaces/beer.interface';
import './Form.scss';

interface ChildProps {
  // addOrUpdateBeer: (beer: BeerInterface) => void;
  action: 'ADD' | 'UPDATE';
  beer?: BeerInterface;
  hideModal?: () => void;
}

type Inputs = {
  beerPrice: number;
  beerName: string;
};

const Form: FC<ChildProps> = (props) => {
  // https://react-hook-form.com/
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();

  const { addBeer, updateBeer } = useBeerContext();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    if (isSubmitSuccessful) {
      if (props.action === 'ADD') {
        addBeer({ name: data.beerName, price: data.beerPrice });
      } else if (props.action === 'UPDATE') {
        updateBeer({ id: props.beer?.id, name: data.beerName, price: data.beerPrice });
        if (props.hideModal) props.hideModal();
      }
      reset();
    }
  };
  return (
    <div className='outter-div'>
      <form className='form-div'>
        <div className='form-input'>
          <input placeholder='Beer name' {...register('beerName', { required: true })} />
          {errors.beerName?.type === 'required' && <p className='error'>Beer name is required</p>}
        </div>
        <div className='form-input'>
          <input type='number' placeholder='Price' {...register('beerPrice', { required: true, min: 0 })} />
          {errors.beerPrice?.type === 'required' && <p className='error'>Beer price is required</p>}
          {errors.beerPrice?.type === 'min' && <p className='error'>Price must be bigger that 0</p>}
        </div>
      </form>
      <div onClick={handleSubmit(onSubmit)} className='button-div'>
        <button>
          <IoBeerOutline />
        </button>
      </div>
    </div>
  );
};
export default Form;
