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
  class: string;
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
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();
    }else{
      dispatch(choosePname(data.name));
      dispatch(choosePclass(data.class));
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
          <label htmlFor="class">Class?</label>
          <Input {...register('class')} name='class' placeholder='Class'/>
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
