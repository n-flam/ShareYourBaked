import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import RecipeListItem from "./RecipeListItem";

export default function RecipeContainer() {
  const [error, setError] = useState("");
  const [bakedgoods, setBakedgoods] = useState([]);

  useEffect(() => {
    fetch("/api/bakedgoods", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status !== 200) {
          throw resp.statusText;
        }
        return resp.json();
      })
      .then((data) => {
        setBakedgoods(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  console.log({bakedgoods})

  return (
    <Container>
      {bakedgoods.map((good) => {
        return (
          <RecipeListItem
            img={good.img}
            description={good.description}
            title={good.title}
          />
        );
      })}
    </Container>
  );
}
