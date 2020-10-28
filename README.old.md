# lab03-pokedex
LAB 03: Design Pokedex Day 1 (no API)
===

Multi-day lab to build a searchable, pageable, sortable pokemon viewer that calls a real API!

The API is available here: https://alchemy-pokedex.herokuapp.com. You will not need it until day 2 of the lab. 

Long story shot, on load the page should show a list of all pokemon. Then, if the user searches (that is, after clicking the "Search" button) the list should be filtered down to pokemon whose names include the search query. The user should be able to sort the pokemon in ascending or descending order according to a category.

### Desktop

```
+----------------------------------+
| Header                      Nav  |
+----------------------------------+
| Search |                         |
| Sort   |◼️◻️◻️◼️◻️◻️◻️◻️◼️◻️◻️              |
|        |◻️◻️◼️◻️◻️◼️◻️◻️◼️◻️◻️              |
|        |◻️◻️◼️◻️◻️                    |
|        |                         |
+--------+-------------------------+
```

## Parts

Manage all state in App.js using callbacks in child components.

### PokeList and PokeItem components

* Displays a pokemon image
* Name
* Relevant data (attack, defence, anything you used in search/sort). 
* Feel free to put other attributes.

### SearchBar component

Offers controls for filtering:

* Search on pokemon name with a text input and a button. This should filter the list down to pokemon whose name include the query.

### Sort component

Two Dropdowns to let users sort pokemon in 1) ascending/descending order and 2) by category.

Offer sorting based one of (offer the user a dropdown):

1. Pokemon name (default)
1. Type
1. Attack
1. Defence

---

## Points Break Down

Looking For | Points (10)
:--|--:
[ ] In README.md, show a screenshot of diagram of Component Hierarchy, labeling the flow of `props` and location of `state` | 1
[ ] Deployed on Netlify, nice looking CSS | 1
[ ] `PokeList` component that takes in (as props) a list of pokemon and filters, renders a list of `PokeItem` components on load and after searches | 2
[ ]`Searchbar` component (input and submit button) that takes a callback to manage App.js state (successfully filters pokemon on the screen) | 2
[ ] Working `Sort` component with TWO dropdowns for sorting pokemon in ascending/descending order by a given category | 2
[ ] Add a SearchCategory (with a callback) with a group of radio button to search for pokemon by different categories | + 1

(Tomorrow: wire it with an API and add React router!)