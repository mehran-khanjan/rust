# E-Commerce backend

## Features

- [ ] Create
    - [x] User account
        - [x] Being able to create new user account
        - [x] The user being able to login to their account
        - [x] The user would be logged out after a certain period of time
        - [x] The user should be able to logout
    - [ ] Admin account
        - [ ] Account Setup
            - [ ] Create new admin account
            - [ ] Admin should be able to login to their account
            - [ ] Admin would be logged out after a certain period of time
            - [ ] Admin should be able to logout
        - [ ] Products
            - [ ] Be able to create new products

- [ ] Read
    - [x] Get a list of all products with:
        - [x] All corresponding price
        - [x] All corresponding number of items in stock
    - [x] Get one product
        - [x] With the corresponding price, description of the product and number of items in stock
    - [ ] Get a list of all users accounts (only admin)
        - [ ] with Username, First Name, Last Name and Telephone Number
    - [ ] Get individual user account (admin only)
        - [ ] with Username, First Name, Last Name and Telephone Number



- [ ] Update


- [ ] Delete

### APIs

Users endpoints:
- `POST /api/v1/user/create_account` 
- `POST /api/v1/user/login`
- `POST /api/v1/user/logout`

Admin endpoints:
- `POST /api/v1/admin/create_account`
- `POST /api/v1/admin/login`
- `POST /api/v1/admin/logout`
- `POST /api/v1/admin/new_product` - create product
- `GET /api/v1/users` - list all users
- `GET /api/v1/users/:id` - list one user

Other endpoints:
- `GET /api/v1/products` - List all product
- `GET /api/v1/products/:id` - List one product


## Tech

-  Axum 0.7.5
    - Features:
        - macros

- Tokio v1.37.0
    - Features:
        - macros
        - rt-multi-thread
        - net
- dotenvy v0.15.7
- dotenvy_macro v0.15.7
- serde v1.0.198
    - Features:
        - derive
## Setup


## Database


## Testing

> Using curl
