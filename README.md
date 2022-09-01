# mvsynopticproject

# 🕹 Technologies

### 💻 Frontend

- React (npx create react)
- Material UI
- Styled Components
- emailjs

### ⚙️ Backend

- Express
- MongoDB
- MongoDB Compass
- OAuth
- Morgan (debugging)
- Cors
- Dotenv
- Nodemon (hot reloading)

To start the project:

Backend
`npm run start`

Frontend:
`npm run start`

# UML

Created a UML diagram to plan out my database:

<p align="center">
<img src="./assets/DBUML.png " width="900" />
</p>

```
@startuml

rectangle MongoDB {
rectangle OAuth {
  entity User {
        id
        name
        dob
        email
        password
  }
}

entity Table {
        id
        spaces
}

entity Restaurant {
        id
        location
        tables
}

entity Menu {
        id
        type //food or drinks
}


entity Food extends Menu {
        id
        dish
        price
        allergens
        description
        type // starter, main, side dish, dessert
}

entity Drinks extends Menu {
        id
        drink
        price
        alcoholic
}


entity Order {
        id
        user_id
        restaurant_id
        table_id
        food_id [Food]
        drink_id [Drinks]
        order_total
        payment_status
}
Order::user_id -- User::id
Order::food_id -- Food::id
Order::drink_id -- Drinks::id
Order::restaurant_id -- Restaurant::id
Order::table_id -- Table::id
}


@enduml


```

## Testing my endpoints on Postman

<p align="center">
<img src="./assets/Postman.png " width="900" />
</p>
