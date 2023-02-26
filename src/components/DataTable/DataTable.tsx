import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core'
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { PotionForm } from '../PotionForm'

const columns:GridColDef[] = [
  {field: 'id', headerName:'ID', width:90, hide: true},
  {field: 'name', headerName: 'Potion Name', flex:1},
  {field: 'class', headerName: 'Potion Type', flex: 1},
  {field: 'description', headerName: 'Description', flex: 2},
];

interface gridData{
  data:{
    id?:string
  }
};

const useStyles = makeStyles({
  backgroundaz:{
    backgroundColor: '#fbe2d4'
  },
});


export const DataTable = () => {

  const classes = useStyles()

  let { potionData, getData} = useGetData();
  let [ open,setOpen ] = useState(false);
  let [ gridData, setData ] = useState<gridData>({data:{}})
  const [selectionModel, setSelectionModel] = useState<any>([]);

  let handleOpen = () => {
    setOpen(true)
  };

  let handleClose = ()=> {
    setOpen(false)
  }

  let deleteData = () =>{
    server_calls.delete(selectionModel);
    getData();
    setTimeout( () => {window.location.reload(); }, 1000)
  }

  return (
    <div style={{ height: 400, width:'100%' }} className ={`${classes.backgroundaz}`}>
      <h2>The List of Potions</h2>

      <DataGrid rows={potionData} columns={ columns } pageSize= {5} checkboxSelection={true} 
      onSelectionModelChange={ (item) => {
        setSelectionModel(item)
      }}/>

      <Button onClick={handleOpen}>Update</Button>
      <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

      {/* Dialog pop-up*/}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> Update Potion {selectionModel}</DialogTitle>
        <DialogContent>
          <DialogContentText>Update </DialogContentText>
            <PotionForm id={selectionModel!}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'> Cancel</Button>
          <Button onClick={handleClose} color='primary'> Complete</Button>
        </DialogActions>
      </Dialog>
      
    </div>
  )
}
