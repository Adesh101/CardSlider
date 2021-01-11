import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { THEME } from "./util";
import Carousel from "react-elastic-carousel";
import "../src/App.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 650, itemsToShow: 2 },
  { width: 1068, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
];

const ListingContainer = styled.article`
  border: 1px solid #eee;
  cursor: pointer;
  border-radius: 0px;
  display: inline-block;
  font-family: ${THEME.fontFamily};
  font-size: 14px;
  padding: 0em;
  max-width: 220px;
  margin: 35px;
`;

const ListingImage = styled.figure`
  margin: 0 auto 0em;
  position: relative;
  img {
    border-radius: 2px;
    display: block;
    max-width: 100%;
  }
`;

const ListingTitle = styled.h3`
  font-size: 1.2em;
  margin: 0 auto 0.5em;
  margin: 10px;
`;

const ListingSubtitle = styled.h4`
  font-weight: 400;
  margin: 0 auto 0.5em;
  margin: 12px;
`;

const FavButton = styled.button`
  background: transparent;
  border: none;
  color:white;
  cursor: pointer;
  font-size: 1.2em;
  line-height: 1;
  padding: 0;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  outline: none;
`;

const ImageOverlay = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.25s;
`;

export default class App extends React.Component {
 
  state = { isFavorite: false, hovered: false, favs:[] };

  _toggleFavorite = (id) => {
    if(this.state.favs.includes(id))
    {
      this.setState({
        favs:this.state.favs.filter(el=> el!=id)
      });
    }
    else
    {
      this.setState(prevState => ({
      
        favs: [...prevState.favs, id]
      }))
    }
    console.log(this.state.favs);
  };

  someFunction() {
    alert('Clicked');
  }  

  changeEffect(){
    const ele = document.getElementById("hovereffect");
    const custom_style = {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.6)",
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      opacity: "0",
      transition: "opacity 0.25s"
    }
    Object.assign(ele.style, custom_style);
  }
  
  render() {    
    return (
      <React.Fragment>
        <div className="container">
        <div className="cards">
        <Carousel breakPoints={breakPoints} pagination={false}>
    
            <ListingContainer>
          <ListingImage>
             <FavButton
              onClick={()=>{this._toggleFavorite(1)}}
              isFavorite={this.state.isFavorite}
            >
              {
                this.state.favs.includes(1)
                ?
                <FontAwesomeIcon icon="star" style={{color:"yellow"}}/>
                :
                <FontAwesomeIcon icon="star"  style={{color:"white"}} />
              }
              
            </FavButton> 
            <img onMouseOver="" onMouseOut=""
              src="https://raw.githubusercontent.com/geoffdavis92/weekly-ui/master/assets/ecommerce-listing/thinsulate-hat-orange.jpg"
              alt="Thinsulate knitted winter cap in blaze orange"
            />
          </ListingImage>
          <header>
            <ListingTitle>Thinsulate Winter Cap</ListingTitle>
            <ListingSubtitle>4000</ListingSubtitle>
          </header>  
        </ListingContainer> 
      
        
        <ListingContainer>
          <ListingImage>
          <FavButton
             onClick={()=>{this._toggleFavorite(2)}}
              isFavorite={this.state.isFavorite}
            >
              {
                this.state.favs.includes(2)
                ?
                <FontAwesomeIcon icon="star" style={{color:"yellow"}}/>
                :
                <FontAwesomeIcon icon="star"  style={{color:"white"}} />
              }
            </FavButton> 
            <img
              src="https://raw.githubusercontent.com/geoffdavis92/weekly-ui/master/assets/ecommerce-listing/thinsulate-hat-orange.jpg"
              alt="Thinsulate knitted winter cap in blaze orange"
            />
          </ListingImage>
          <header>
            <ListingTitle>Thinsulate Winter Cap</ListingTitle>
            <ListingSubtitle>4000</ListingSubtitle>
          </header>
        </ListingContainer>
        <ListingContainer>
          <ListingImage>
          <FavButton
             onClick={()=>{this._toggleFavorite(3)}}
              isFavorite={this.state.isFavorite}
            >{
              this.state.favs.includes(3)
              ?
              <FontAwesomeIcon icon="star" style={{color:"yellow"}}/>
              :
              <FontAwesomeIcon icon="star"  style={{color:"white"}} />
            }
            </FavButton> 
            <img
              src="https://raw.githubusercontent.com/geoffdavis92/weekly-ui/master/assets/ecommerce-listing/thinsulate-hat-orange.jpg"
              alt="Thinsulate knitted winter cap in blaze orange"
            />
          </ListingImage>
          <header>
            <ListingTitle>Thinsulate Winter Cap</ListingTitle>
            <ListingSubtitle>4000</ListingSubtitle>
          </header>
        </ListingContainer>
        <ListingContainer>
          <ListingImage>
          <FavButton
             onClick={()=>{this._toggleFavorite(4)}}
              isFavorite={this.state.isFavorite}
            >
             {
                this.state.favs.includes(4)
                ?
                <FontAwesomeIcon icon="star" style={{color:"yellow"}}/>
                :
                <FontAwesomeIcon icon="star"  style={{color:"white"}} />
              }
            </FavButton> 
            <img
              src="https://raw.githubusercontent.com/geoffdavis92/weekly-ui/master/assets/ecommerce-listing/thinsulate-hat-orange.jpg"
              alt="Thinsulate knitted winter cap in blaze orange"
            />
          </ListingImage>
          <header>
            <ListingTitle>Thinsulate Winter Cap</ListingTitle>
            <ListingSubtitle>4000</ListingSubtitle>
          </header>
        </ListingContainer>
        <ListingContainer>
          <ListingImage>
          <FavButton
             onClick={()=>{this._toggleFavorite(5)}}
              isFavorite={this.state.isFavorite}
            >
             {
                this.state.favs.includes(5)
                ?
                <FontAwesomeIcon icon="star" style={{color:"yellow"}}/>
                :
                <FontAwesomeIcon icon="star"  style={{color:"white"}} />
              }
            </FavButton> 
            <img
              src="https://raw.githubusercontent.com/geoffdavis92/weekly-ui/master/assets/ecommerce-listing/thinsulate-hat-orange.jpg"
              alt="Thinsulate knitted winter cap in blaze orange"
            />
          </ListingImage>
          <header>
            <ListingTitle>Thinsulate Winter Cap</ListingTitle>
            <ListingSubtitle>4000</ListingSubtitle>
          </header>
        </ListingContainer>
        
        </Carousel>
        </div>
        </div>
      </React.Fragment>  
    );
  }
}

