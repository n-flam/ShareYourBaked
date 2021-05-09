import { GolfCourseRounded } from "@material-ui/icons";
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
        // console.log();
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <Container>
      {bakedgoods.map((good) => {
        return <RecipeListItem key={good.id} good = {good} />;
      })}
    </Container>
  );
}
