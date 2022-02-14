import styled from "styled-components";

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 20px;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  width: 300px;
  box-shadow: 0px 3px 10px #aaa;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin: 10px 0;
`;

export const IngredientsText = styled.span`
  font-size: 18px;
  border: solid 1px GREEN;
  color: #000;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  color: green;
  text-align: center;
  margin-bottom: 12px;
`;

export const SeeMoreText = styled(IngredientsText)`
  color: #eb3000;
  border: solid 1px #eb3000;
`;

export const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

<RecipeContainer>
  <CoverImage src="hamburger.svg" alt="" />
  <RecipeName>Recipe</RecipeName>
  <IngredientsText>Ingredients</IngredientsText>
  <SeeMoreText>Complete Recipe</SeeMoreText>
</RecipeContainer>;
