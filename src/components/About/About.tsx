import React from 'react'
import { Navbar } from '../Navbar';
import { makeStyles, Divider } from '@material-ui/core';
import plaque from '../../assets/images/Skyrim2.png'

const useStyles = makeStyles({
  center:{
    justifyContent: 'center',
    alignItems: 'center',
    justifyItems: 'center'
  },
  row: {
    display:'flex',
    flexDirection: 'row',
  },
  width60: {
    width: '60%',
    justifyContent: 'space-evenly'
  },
  textalignment:{
    textAlign: 'center',
    wordBreak: 'break-all'
  },
  background: {
    background: 'radial-gradient(circle, rgba(133,0,0,1) 0%, rgba(0,0,0,1) 100%)',
    backgroundSize: 'cover',
  },
  textcolor: {
    color: '#f9f4d9'
  },
  columnalign:{
    display: 'flex',
    flexDirection: 'column'
  },
  padtop:{
    paddingTop: '15px'
  },
  textsize:{
    textSizeAdjust: '40%'
  },
  imgsize:{
    maxWidth: '65%',
    height: 'auto',
    justifyItems: 'center'
  },
  width70:{
    width: '70%'
  },
  pad:{
    padding: '15px'
  },
  bdybackground:{
    background: 'radial-gradient(circle, rgba(79,0,0,1) 0%, rgba(0,0,0,1) 100%)'
    
  },
  martop:{
    marginTop: '15px'
  },
  padleft:{
    paddingLeft: '20px'
  },
  marleft:{
    marginLeft: '60px'
  },
  ul:{
    listStyleType: 'none'
  },
  martop2:{
    marginTop: '40px'
  },
  padright:{
    paddingRight: '1px'
  },
  marbottom: {
    marginBottom: '40px'
  },
  top:{
    postition: 'fixed',
  }
  

})


export const About =() => {

  const classes = useStyles()

  return (
    <div className={`${classes.center} ${classes.background} ${classes.textcolor} ${classes.columnalign} ${classes.padright} ${classes.top}`}>
      <Navbar />
      <div className={`${classes.width60} ${classes.center} ${classes.padtop} `}>
        <h1 className={`${classes.textalignment}`}>Your Purpose</h1>
        <Divider style={{ background: '#8f8f8f' }} variant="middle" />
        <Divider style={{ background: '#8f8f8f' }} variant="middle" />
        <br />
        <div className={`${classes.textsize}`}>
          Dovakiin, you are part of the choosen but legendary few that have been blessed with the power of the dova.
          In your quest to face Alduin, you will encounter many more challenges that will test your strength
          and abilities. While you hold great power dovakiin, you cannot win with sheer strenght alone; 
          This was built for you Dovakiin. Use it well. Create concoctions that will help carry you to glory.
        </div>
      </div>
      <div>
        May the nine be with you.
      </div>
      <Divider style={{ background: '#8f8f8f' }} variant="middle" />
      <main className={`${classes.row} ${classes.padtop} ${classes.bdybackground} ${classes.martop} ${classes.marbottom}`}>
        <div>
          <img src={plaque} className={`${classes.imgsize} ${classes.center} ${classes.marleft} ${classes.martop2}`}   alt="" />
        </div>

        <div className={`${classes.width70}`}>
          <div>
            <h2 className={`${classes.textalignment}`}>Most effect ingrediens for potions</h2>
          </div>
          <div className={`${classes.textalignment} ${classes.martop}`}>
            <ul className={`${classes.center} ${classes.ul}`}>
              <li>Blisterwort</li>
              <li>Wheat</li>
              <li>Chaurus Eggs</li>
              <li>Blue and Red Mountain Flower</li>
              <li>Giants toe</li>
              <li>Scathecraw</li>
              <li>DeathBell Flower</li>
              <li>Snowberries</li>
              <li>Imp Stool</li>
              <li>Canis Root</li>
              <li>Vampire Dust</li>
              <li>Luna Moth Wing</li>
              <li>Nightshade</li>
            </ul>
          </div>
          <div className={`${classes.center} ${classes.martop2}`}>
            <div className={`${classes.textalignment}`}>
              <h3>Quick Potion Recipies for the Dovakiin on the go</h3>
            </div>
            <ul className={`${classes.martop}`}>
              <li>Invisibility Potion: Chaurus Eggs, Vampire Dust, Luna moth wing</li>
              <li>Healing Potion: Blisterwort, Blue Mountain Flower, Wheat, Imp Stool</li>
              <li>Paralysis Poison: Canis Root, Imp Stool, Swamp Fungal Pod </li>
              <li>Poison: Dealthbell Flower, Imp Stool, Nightshade</li>
              <li>Restore Magicka: Vampire Dust, Red Mountain Flower</li>
            </ul>
          </div>
          <div className={`${classes.martop2}`}>
          </div>
        </div>
        
      </main>
    </div>
  )
}
