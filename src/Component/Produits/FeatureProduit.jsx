import { CardQuantity, CardLivraison } from "../../Component/index";

export const FeatureProduit = [
  {
    id: 1,
    title: "Canape",
    descriptionProduit: "qsdqsdqsdq",
    features: [
      { name: "Marque", description: "Designed by Good Goods, Inc." },
      {
        name: "Prix",
        description:
          "Solid walnut base with rare earth magnets and powder coated steel card cover",
      },
      { name: "Dimensions", description: "6.25 x 3.55 x 1.15" },
      {
        name: "Stock",
        description: "Hand sanded and finished with natural oil",
      },
      { name: "Couleur", description: "Wood card tray and 3 refill packs" },
      {
        name: "Quantity",
        description: <CardQuantity />,
      },
      {
        name: "Livraison",
        description: <CardLivraison />,
      },
      {
        name: "Total avec livraison",
        description: "5151 DA",
      },
    ],
  },
  {
    id: 2,
    title: "lit",
    descriptionProduit: "aaaaaaa",
    features: [
      { name: "Marques", description: "Designed by Good Goods, Inc." },
      {
        name: "Prix",
        description:
          "Solid walnut base with rare earth magnets and powder coated steel card cover",
      },
      { name: "Dimensions", description: "6.25 x 3.55 x 1.15" },
      {
        name: "Stock",
        description: "Hand sanded and finished with natural oil",
      },
      { name: "Couleur", description: "Wood card tray and 3 refill packs" },
      {
        name: "Quantity",
        description: <CardQuantity />,
      },
      {
        name: "Livraison",
        description: <CardLivraison />,
      },
      {
        name: "Total avec livraison",
        description: "25151 DA",
      },
    ],
  },
];
