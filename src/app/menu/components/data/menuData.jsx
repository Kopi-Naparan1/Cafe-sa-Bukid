const DRINK_IMAGE = "/images/menu/drinks/drinks.jpg";
const LIGHT_BITES_IMAGE = "/images/menu/light-bites/light-bites.jpg";
const MEALS_IMAGE = "/images/menu/meals/meals.jpg";
const SPECIALS_IMAGE = "/images/menu/specials/specials.jpg";

const drinksData = [
  {
    category: "Coffee (Hot)",
    items: [
      {
        id: "coffee-latte",
        name: "Koffee Latte",
        price: 125,
        image: DRINK_IMAGE,
        tags: [],
        description: "Smooth espresso with steamed milk",
      },
      {
        id: "coffee-latte-caramel",
        name: "Caramel Latte",
        price: 145,
        image: DRINK_IMAGE,
        tags: [],
        description: "Latte with caramel sweetness",
      },
      {
        id: "coffee-latte-mocha",
        name: "Mocha Latte",
        price: 145,
        image: DRINK_IMAGE,
        tags: [],
        description: "Chocolate-infused espresso latte",
      },
      {
        id: "coffee-latte-hazelnut",
        name: "Hazelnut Latte",
        price: 145,
        image: DRINK_IMAGE,
        tags: [],
        description: "Nutty flavored creamy latte",
      },
      {
        id: "coffee-latte-english-toffee",
        name: "English Toffee Latte",
        price: 145,
        image: DRINK_IMAGE,
        tags: [],
        description: "Rich caramel-toffee flavor",
      },
      {
        id: "coffee-latte-marshmallow",
        name: "Toasted Marshmallow Latte",
        price: 145,
        image: DRINK_IMAGE,
        tags: [],
        description: "Sweet toasted marshmallow flavor",
      },
      {
        id: "coffee-latte-almond-roca",
        name: "Almond Roca Latte",
        price: 145,
        image: DRINK_IMAGE,
        tags: [],
        description: "Chocolate almond caramel blend",
      },
    ],
  },

  {
    category: "Coffee (Specialty / Con Crema)",
    items: [
      {
        id: "caramel-con-crema",
        name: "Caramel con Crema",
        price: 165,
        image: DRINK_IMAGE,
        tags: [],
        description: "Creamy caramel coffee with rich topping",
      },
      {
        id: "mocha-con-crema",
        name: "Mocha con Crema",
        price: 165,
        image: DRINK_IMAGE,
        tags: [],
        description: "Chocolate coffee with cream topping",
      },
      {
        id: "hazelnut-con-crema",
        name: "Hazelnut con Crema",
        price: 165,
        image: DRINK_IMAGE,
        tags: [],
        description: "Nutty coffee with creamy finish",
      },
      {
        id: "butterscotch-con-crema",
        name: "Butterscotch con Crema",
        price: 165,
        image: DRINK_IMAGE,
        tags: [],
        description: "Sweet buttery caramel coffee",
      },
      {
        id: "toffee-con-crema",
        name: "English Toffee con Crema",
        price: 165,
        image: DRINK_IMAGE,
        tags: [],
        description: "Rich toffee coffee with cream",
      },
    ],
  },
];

const lightBitesData = [
  {
    category: "Sandwiches",
    items: [
      {
        id: "best-burger",
        name: "Best Burger",
        price: 195,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description: "Juicy beef burger with classic toppings and sauce",
      },
      {
        id: "adobo-macaroni",
        name: "Adobo Macaroni",
        price: 240,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description: "Creamy macaroni with savory Filipino adobo flavors",
      },
      {
        id: "chicken-burger",
        name: "Chicken Burger",
        price: 195,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description: "Grilled chicken patty burger with fresh toppings",
      },
      {
        id: "tuna-sandwich",
        name: "Tuna Sandwich",
        price: 190,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description: "Classic tuna salad sandwich with crisp vegetables",
      },
      {
        id: "beef-quesadilla",
        name: "Beef Quesadilla",
        price: 220,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description:
          "Flour tortilla filled with seasoned beef and melted cheese",
      },
      {
        id: "chicken-tacos",
        name: "Chicken Tacos",
        price: 190,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description: "Soft tacos filled with seasoned chicken and toppings",
      },
    ],
  },

  {
    category: "Desserts",
    items: [
      {
        id: "mango-cream",
        name: "Mango Cream",
        price: 140,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description: "Sweet and refreshing mango cream dessert",
      },
      {
        id: "creme-brulee",
        name: "Creme Brulee",
        price: 155,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description:
          "Classic French vanilla custard with caramelized sugar top",
      },
      {
        id: "chocolate-pot-de-creme",
        name: "Chocolate Pot de Creme",
        price: 155,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description: "Rich and silky chocolate custard dessert",
      },
    ],
  },

  {
    category: "Pasta",
    items: [
      {
        id: "beef-stroganoff-linguine",
        name: "Beef Stroganoff Linguine",
        price: 280,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description:
          "Linguine pasta with tender beef in creamy stroganoff sauce",
      },
      {
        id: "italian-spaghetti-with-meatballs",
        name: "Italian Spaghetti with Meatballs",
        price: 235,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description:
          "Classic spaghetti served with hearty meatballs in tomato sauce",
      },
      {
        id: "spanish-sardines-fettuccine",
        name: "Spanish Sardines Fettuccine",
        price: 240,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description: "Fettuccine tossed with Spanish sardines in savory sauce",
      },
      {
        id: "fresh-tuna-penne",
        name: "Fresh Tuna Penne",
        price: 245,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description: "Penne pasta with fresh tuna and Mediterranean flavors",
      },
      {
        id: "chicken-pesto-fusilli",
        name: "Chicken Pesto Fusilli",
        price: 245,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description:
          "Fusilli pasta with grilled chicken in vibrant pesto sauce",
      },
      {
        id: "beef-mechado-fettuccine",
        name: "Beef Mechado Fettuccine",
        price: 265,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description:
          "Fettuccine with slow-cooked beef mechado in rich tomato sauce",
      },
      {
        id: "macaroni-and-cheese",
        name: "Macaroni and Cheese",
        price: 220,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description:
          "Creamy macaroni and cheese topped with crispy chicken skin",
      },
    ],
  },

  {
    category: "Salad",
    items: [
      {
        id: "green-salad",
        name: "Green Salad",
        price: 140,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description: "Fresh mixed greens with light vinaigrette dressing",
      },
      {
        id: "grilled-tuna-salad",
        name: "Grilled Tuna Salad",
        price: 205,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description:
          "Grilled tuna served over fresh greens with savory dressing",
      },
      {
        id: "grilled-chicken-salad",
        name: "Grilled Chicken Salad",
        price: 205,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description: "Grilled chicken breast on a bed of fresh vegetables",
      },
      {
        id: "forest-salad",
        name: "Forest Salad",
        price: 195,
        image: LIGHT_BITES_IMAGE,
        tags: [],
        description:
          "Mixed salad with fiddlehead ferns, mushrooms, and vinaigrette",
      },
    ],
  },
];

const mealsData = [
  {
    category: "Solo Meals",
    items: [
      {
        id: "beef-with-broccoli",
        name: "Beef with Broccoli",
        price: 225,
        image: MEALS_IMAGE,
        tags: [],
        description:
          "Tender beef strips stir-fried with fresh broccoli in savory sauce",
      },
      {
        id: "salisbury-steak",
        name: "Salisbury Steak",
        price: 210,
        image: MEALS_IMAGE,
        tags: [],
        description: "Juicy beef patty smothered in rich mushroom gravy",
      },
      {
        id: "roasted-leg-part-chicken",
        name: "Roasted Leg Part Chicken",
        price: 210,
        image: MEALS_IMAGE,
        tags: [],
        description: "Crispy roasted chicken leg quarter with herbs and spices",
      },
      {
        id: "chicken-barbeque",
        name: "Chicken Barbeque",
        price: 225,
        image: MEALS_IMAGE,
        tags: [],
        description:
          "Grilled chicken barbeque marinated in sweet and savory sauce",
      },
      {
        id: "fried-chicken-lollipops",
        name: "Fried Chicken Lollipops",
        price: 205,
        image: MEALS_IMAGE,
        tags: [],
        description: "Crispy fried chicken lollipops served with dipping sauce",
      },
      {
        id: "pinoy-adobo-manok",
        name: "Pinoy Adobo Manok",
        price: 185,
        image: MEALS_IMAGE,
        tags: [],
        description: "Classic Filipino chicken adobo in tangy soy-garlic sauce",
      },
    ],
  },

  {
    category: "Breakfast Meals",
    items: [
      {
        id: "breakfast-platter",
        name: "Breakfast Platter",
        price: 420,
        image: MEALS_IMAGE,
        tags: [],
        description:
          "Hearty breakfast platter with assorted favorites and sides",
      },
      {
        id: "bangsilog",
        name: "Bangsilog",
        price: 210,
        image: MEALS_IMAGE,
        tags: [],
        description: "Beef tapa with garlic rice, fried egg and atchara",
      },
      {
        id: "daing-na-bangus",
        name: "Daing na Bangus",
        price: 220,
        image: MEALS_IMAGE,
        tags: [],
        description: "Crispy fried boneless milkfish with garlic rice and egg",
      },
      {
        id: "crispy-chicken-adobo-flakes",
        name: "Crispy Chicken Adobo Flakes",
        price: 180,
        image: MEALS_IMAGE,
        tags: [],
        description: "Crispy adobo chicken flakes served with rice and egg",
      },
    ],
  },

  {
    category: "Group Meals",
    items: [
      {
        id: "beef-kare-kare",
        name: "Beef Kare Kare",
        price: 865,
        image: MEALS_IMAGE,
        tags: [],
        description: "Rich peanut sauce stew with beef and vegetables",
      },
      {
        id: "beef-caldereta",
        name: "Beef Caldereta",
        price: 515,
        image: MEALS_IMAGE,
        tags: [],
        description: "Spicy tomato-based beef stew with potatoes and carrots",
      },
      {
        id: "beef-ribs-in-bbq-sauce",
        name: "Beef Ribs in Bbq Sauce",
        price: 495,
        image: MEALS_IMAGE,
        tags: [],
        description: "Tender beef ribs glazed in smoky barbeque sauce",
      },
      {
        id: "beef-callos",
        name: "Beef Callos",
        price: 360,
        image: MEALS_IMAGE,
        tags: [],
        description: "Savory tripe and beef stew in tomato sauce",
      },
      {
        id: "dinakdakan",
        name: "Dinakdakan",
        price: 385,
        image: MEALS_IMAGE,
        tags: [],
        description: "Grilled pork face and ears in spicy vinegar dressing",
      },
      {
        id: "chicken-with-mushrooms",
        name: "Chicken with Mushrooms",
        price: 365,
        image: MEALS_IMAGE,
        tags: [],
        description: "Tender chicken cooked with mushrooms in creamy sauce",
      },
    ],
  },

  {
    category: "Grains",
    items: [
      {
        id: "veg-risotto",
        name: "Veg Risotto",
        price: 250,
        image: MEALS_IMAGE,
        tags: [],
        description:
          "Creamy vegetable risotto cooked with savory stock and cheese",
      },
      {
        id: "adlai-and-mushroom-risotto",
        name: "Adlai and Mushroom Risotto",
        price: 275,
        image: MEALS_IMAGE,
        tags: [],
        description:
          "Hearty adlai grains cooked with mushrooms, onions and parmesan",
      },
    ],
  },

  {
    category: "Soup",
    items: [
      {
        id: "cream-of-mushroom",
        name: "Cream of Mushroom",
        price: 265,
        image: MEALS_IMAGE,
        tags: [],
        description: "Velvety cream of mushroom soup with garlic croutons",
      },
      {
        id: "roasted-cauliflower",
        name: "Roasted Cauliflower",
        price: 225,
        image: MEALS_IMAGE,
        tags: [],
        description:
          "Roasted cauliflower soup with pickled red onions and croutons",
      },
      {
        id: "broccoli-cheddar",
        name: "Broccoli Cheddar",
        price: 225,
        image: MEALS_IMAGE,
        tags: [],
        description: "Rich broccoli cheddar soup with garlic croutons",
      },
      {
        id: "puree-of-squash",
        name: "Puree of Squash",
        price: 195,
        image: MEALS_IMAGE,
        tags: [],
        description:
          "Smooth butternut squash puree topped with cream and almonds",
      },
    ],
  },
];

const delicaciesData = [
  {
    category: "Exotic Delicacies",
    items: [
      {
        id: "fried-frogs",
        name: "Fried Frogs",
        price: 210,
        image: SPECIALS_IMAGE,
        tags: [],
        description:
          "Crispy frogs coated with adobo glaze and served with fried shallots",
      },
    ],
  },
  {
    category: "Native Delicacies",
    items: [
      {
        id: "forest-salad",
        name: "Forest Salad",
        price: 195,
        image: SPECIALS_IMAGE,
        tags: [],
        description:
          "Fresh fiddlehead ferns, pickled mushrooms, and signature vinaigrette",
      },
    ],
  },
];

const menuData = [
  { id: 0, data: drinksData },
  { id: 1, data: mealsData },
  { id: 2, data: lightBitesData },
  { id: 3, data: delicaciesData },
];
export default function useMenuData() {
  return menuData;
}
