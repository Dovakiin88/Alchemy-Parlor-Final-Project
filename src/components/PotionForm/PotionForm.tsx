import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { choosePname, choosePclass, choosePdescription } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface PotionFormProps{
  id?:string;
  data?:{}
}

interface PotionState{
  name: string;
  potion_class: string;
  description: string;
};

export const PotionForm = (props:PotionFormProps) => {

  const dispatch = useDispatch();
  const store = useStore();
  const name = useSelector<PotionState>(state => state.name)
  const { register, handleSubmit} = useForm({})

  const onSubmit = (data:any, event:any) => {
    console.log(props.id)
    if(props.id!){
      server_calls.update(props.id!, data);
      console.log(`Updated:${data} ${props.id}`);
      console.log(data);
      console.log(data.name)
      console.log(data.potion_class)
      console.log(data.description)
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();
    }else{
      dispatch(choosePname(data.name));
      dispatch(choosePclass(data.potion_class));
      dispatch(choosePdescription(data.description));
      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Potion Name</label>
          <Input {...register('name')} name='name' placeholder='Name'/>
        </div>
        <div>
          <label htmlFor="potion_class">Class?</label>
          <Input {...register('potion_class')} name='potion_class' placeholder='Class'/>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Input {...register('description')} name='description' placeholder='Description'/>
        </div>
        <Button type='submit'>Affirm</Button>
      </form>
    </div>
  )
}
