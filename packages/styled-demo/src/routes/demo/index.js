import React from "react";
import styled, { css, keyframes } from "styled-components";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import { Button as RButton, ButtonIcon } from "rmwc/Button";
import { Chip, ChipSet } from "rmwc/Chip";
import Animated from "../../components/Animated";
import style from "./inline.module.css";
// const Button = styled.button``;

// const Button = styled.button`

import { bounce } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

const MDLButton = styled.button`
  margin: 0 1em;
  background: rgba(158, 158, 158, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  border: none;
  border-radius: 2px;
  color: #fff;
  position: relative;
  height: 36px;

  min-width: 64px;
  padding: 0 16px;
  display: inline-block;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0;
  overflow: hidden;
  will-change: box-shadow;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  line-height: 36px;
  vertical-align: middle;
`;

const MyButton = styled.a`
  border-radius: 3px;
  border: 2px solid palevioletred;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
/**
 * This is a very simple example. It shows a basic component changing
 * its background colour, once the screen's width drops below a
 *  threshold of 700px.
 */
const Content = styled.div`
  border-radius: 3px;
  border: 2px solid palevioletred;
  background: papayawhip;
  height: 3em;
  display: inline-block;
  width: 3em;
  padding: 0.25em 1em;
  margin: 0 1em;

  @media (max-width: 350px) {
    background: palevioletred;
  }
`;

class App extends React.Component {
  componentDidMount() {
    console.log("style", style);
  }
  render() {
    return (
      <Paper className="container">
        <header className="App-header">
          <h1 className="App-title">Demo</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <MyButton>Click Me!</MyButton>
            <MyButton primary>Click Me!</MyButton>
            {/* <Rotate>
              <Button>Click Me!</Button>
            </Rotate> */}
            <br />
            <MDLButton>MDL</MDLButton>
            <Button>Mui</Button>
            <Button color="primary" variant="raised">
              Mui
            </Button>
            <RButton raised>Rwc</RButton>
            <ChipSet>
              <Chip>Cookies</Chip>
              <Chip>Pizza</Chip>
              <Chip>Icecream</Chip>
            </ChipSet>
            {/* <BouncyDiv>Cool</BouncyDiv> */}
            {/* <Animated ref={c => (this.btn = c)} variant="bounce">
              <div onClick={() => this.btn.animate()} className="cool">
                azure win
              </div>
          
            </Animated> */}
            <Animated variant="bounce">
            <p>the default win</p>
            </Animated>
            <Animated event="onClick" variant="bounce">
            <p>onClick</p>
            </Animated>
            <Animated ref={c => this.nice = c} event="onMouseEnter" variant="bounce">
            <p onClick={() => this.nice.animate()}>onMouseEnter</p>
            </Animated>
            <Animated event="onClick" variant="zoomIn">
            <p>lightSpeedIn</p>
            <RButton raised>Rwc</RButton>
            </Animated>

            

            <div
              className="animated bounce"
              onClick={e => {
                var me = e.target;
                me.style.webkitAnimation = "none";
                console.log("wow", me);
                setTimeout(function() {
                  me.style.webkitAnimation = "";
                }, 10);
              }}
            >
              great
            </div>
          </Grid>
          <Grid item xs={12} sm={6} />
        </Grid>
      </Paper>
    );
  }
}

export default App;
