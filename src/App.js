import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import { DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchInput,
  SearchIcon,
} from "./components/headerComponent";

import {
  RecipeListContainer,
  RecipeContainer,
  RecipeName,
  IngredientsText,
  SeeMoreText,
  CoverImage,
} from "./components/recipeComponent";

const APP_ID = "bb3a1f6a";
const APP_KEY = "db1b887e819cfdfd87f37d116c1be079";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Placeholder = styled.img`
  wieght: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;

function App() {
  const [timeoutId, updateTimeoutId] = useState(null);
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    //console.log(response);
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  const RecipeComponent = (props) => {
    console.log("props", props);
    const [show, setShow] = useState(false);
    const { recipeObj } = props;

    return (
      <>
        <Dialog open={show}>
          
          <DialogTitle id="alert-dialog-slide-title">
            {recipeObj.label}
          </DialogTitle>
          <DialogContent>
            <table>
              <thead>
                <th>Ingredient</th>
                <th>Weight</th>
              </thead>
              <tbody>
                {recipeObj.ingredients.map((ingredientObj) => (
                  <tr>
                    <td>{ingredientObj.text}</td>
                    <td>{ingredientObj.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            {/* <SeeNewTab onClick={() => window.open(url)}>See More</SeeNewTab> */}
            <IngredientsText onClick={() => window.open(recipeObj.url)}>
              See More
            </IngredientsText>
            <SeeMoreText onClick={() => setShow(false)}>Close</SeeMoreText>
          </DialogActions>
        </Dialog>
        <RecipeContainer>
          <CoverImage src={recipeObj.image} alt="" />
          <RecipeName>{recipeObj.label}</RecipeName>
          <IngredientsText onClick={() => setShow(true)}>
            Ingredients
          </IngredientsText>
          <SeeMoreText onClick={() => window.open(recipeObj.url)}>
            Complete Recipe
          </SeeMoreText>
        </RecipeContainer>
      </>
    );
  };

  return (
    <Container className="App">
      <Header>
        <AppNameComponent>
          <AppIcon src="/hamburger.svg" alt="Hamburger" />
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" alt="Search " />
          <SearchInput
            type="text"
            placeholder="Search Recipe"
            onChange={onTextChange}
          />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length ? (
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder src="hamburger.svg" alt="Hamburger" />
        )}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
