import React from "react";
// import { getMateriales } from "@/app/lib/api";
import Material from "./page";

const layout = async ({ params }) => {
  // const materiales = await getMateriales();
  const materiales = [
    {
      _id: "6563fbad0d8e042d1c79f070",
      nivel: "principiante",
      palabrasClave: "ser, estar, verbos, to be",
      privilegios: true,
      tipo: "gramaticas",
      titulo: "ser o estar (parte 1)",
      urlTitulo: "ser-vs-estar",
      urlImagen: "https://www.spanishwithalex.com/images/cards/seryestar1.jpg",
      descripcion:
        "la explicación definitiva de los verbos ser y estar en español",
    },
    {
      _id: "6563fbad0d8e042d1c79f070",
      nivel: "principiante",
      palabrasClave: "ser, estar, verbos, to be",
      privilegios: true,
      tipo: "gramaticas",
      titulo: "ser o estar (parte 1)",
      urlTitulo: "ser-vs-estar",
      urlImagen: "https://www.spanishwithalex.com/images/cards/seryestar1.jpg",
      descripcion:
        "la explicación definitiva de los verbos ser y estar en español",
    },
    {
      _id: "6563fbad0d8e042d1c79f070",
      nivel: "principiante",
      palabrasClave: "ser, estar, verbos, to be",
      privilegios: true,
      tipo: "gramaticas",
      titulo: "ser o estar (parte 1)",
      urlTitulo: "ser-vs-estar",
      urlImagen: "https://www.spanishwithalex.com/images/cards/seryestar1.jpg",
      descripcion:
        "la explicación definitiva de los verbos ser y estar en español",
    },
    {
      _id: "6563fbad0d8e042d1c79f070",
      nivel: "principiante",
      palabrasClave: "ser, estar, verbos, to be",
      privilegios: true,
      tipo: "gramaticas",
      titulo: "ser o estar (parte 1)",
      urlTitulo: "ser-vs-estar",
      urlImagen: "https://www.spanishwithalex.com/images/cards/seryestar1.jpg",
    },
  ];
  const material = materiales.find(
    (material) =>
      material.tipo === params.type && material.urlTitulo === params.material
  );
  return <Material material={material} />;
};

export default layout;
