M.AutoInit();
const lunch = document.getElementsByClassName('lunch-btn');
const menuArea = document.getElementById('menu-area');
const breakfast = document.getElementsByClassName('breakfast-btn');

for (var i = 0; i < breakfast.length; i++) {
  breakfast[i].addEventListener('click', showBreakfast);
}
for (var i = 0; i < lunch.length; i++) {
  lunch[i].addEventListener('click', showLunch);
}


function clearLunch() {
  menuArea.innerHTML = '';
}
function clearBreakfast() {
  menuArea.innerHTML = '';
}


function showBreakfast() {
  clearLunch();

  const div = document.createElement('div');
  
  div.innerHTML = `
  <div class="col s12">
  <h5 class="center-align orange-color">all day</h5>
</div>
<div class="menu-col col s12">
  <div class="menu-container">
    <div class="sub-menu-container col s6">
      <div class="category-container">
        <h4>Traditional Breakfast</h4>
        <h5>Ted's Traditional Breakfast</h5>
        <p>One Belgian waffle topped with whipped cream and powdered sugar
          Add blueberries or strawberries<br>$7.98</p>
        <h5>Maxine's French Toast</h5>
        <p>Four slices of raisin bread dipped in a cinnamon egg wash topped with powered sugar
          Add blueberries or strawberries<br>$7.98</p>
        <h5>The Lumberjack Pancakes</h5>
        <p>Two buttermilk pancakes topped with powdered sugar and whipped cream
          Add blueberries or strawberries<br>$8.98</p>
        <h5>Loaded Breakfast Burrito</h5>
        <p>Three scrambled eggs, bacon, sausage, ham, onions, red peppers, potatoes, white cheddar cheese, grilled in our Italian butter, served with Bays potatoes or hashbrowns<br>$13.98</p>
        <h5>Biscuits and Gravy</h5>
        <p>Fresh made biscuits covered in our homemade sausage gravy and two eggs your way with scallion garnish<br>$8.98</p>
        <h5>Veggie Frittata</h5>
        <p>Three eggs, yellow squash, zucchini, tomato, spinach, onions, goat cheese, served with Bays potatoes or hashbrowns with scallion garnish<br>$10.98</p>
        <h5>Smoked Whitefish Frittata</h5>
        <p>Three eggs, smoked whitefish, tomatoes, onions, bacon chive cream cheese, served with Bays potatoes or hashbrowns and scallion garnish<br>$15.98</p>
      </div>
      <div class="category-container">
        <h4>Benedict</h4>
        <h5>Traditional Benedict</h5>
        <p>Two poached eggs over ham and tomatoes served on a toasted pretzel bread bun smothered in house made hollandaise and scallion garnish<br>$7.98</p>
        <h5>Smoked Whitefish Benedict</h5>
        <p>Two poached eggs over ham and tomatoes served on a toasted pretzel bread bun smothered in house made hollandaise with scallion garnish<br>$15.98</p>
        <h5>Ultimate Porker Benedict</h5>
        <p>Two poached eggs over pulled pork, ham and bacon, served on a toasted pretzel bun smothered in house made hollandaise with scallion garnish<br>$12.98</p>
        <h5>The Greek Benedict</h5>
        <p>Two poached eggs over Gyro meat, tomatoes, onions, feta cheese served on a bed of spinach smothered in house made hollandaise with scallion garnish<br>$12.98</p>
        <div class="category-container sides">
          <h4>Sides</h4>
          <h5>Egg</h5>
          <p>$1.69</p>
          <h5>Toast</h5>
          <p>$.89</p>
          <h5>Sausage (2)</h5>
          <p>$3.50</p>
          <h5>Bacon (3)</h5>
          <p>$2.50</p>
          <h5>Hashbrown</h5>
          <p>$2.98</p>
          <h5>Bay's Potato</h5>
          <p>$3.49</p>
        </div>
      </div>
    </div>
    <div class="sub-menu-container col s6">
      <div class="category-container">
      <h4>Specialties</h4>
      <h5>Bay Harbor Breakfast</h5>
      <p>Two eggs your way with your choice of ham, bacon or sausage, served with toast and Bays potatoes or hashbrowns<br>$8.98</p>
      <h5>Bay's Corned Beef Hash</h5>
      <p>Corned beef, bacon, onions, red peppers, potatoes, topped with two eggs your way and smothered in house made hollandaise with scallion garnish<br>$11.98</p>
      <h5>Bay's Veggie Hash</h5>
      <p>Yellow squash, zucchini, onions, red pepper, tomato, potatoes, mushrooms, goat cheese topped with two eggs your way with scallion garnish. Tzatziki sauce on the side<br>$10.98</p>
      <h5>Bay's Prime Rib Hash</h5>
      <p>Shaved prime rib, mushrooms, onions, red peppers, potatoes topped with two eggs your way and smothered in house made hollandaise with scallion garnish<br>$14.98</p>
    </div>
    <div class="category-container">
      <h4>Omelettes</h4>
      <h5>Farm Fresh Omelette</h5>
      <p>Ham, sausage, red pepper, onion, white cheddar cheese, served with Bay's potatoes or hashbrowns and toast<br>$11.98</p>
      <h5>Greek Omelette</h5>
      <p>Gyro meat, onion, tomatoes, spinach and feta cheese, served with Bay's potatoes or hashbrowns and toast<br>$12.98</p>
      <h5>Prime Rib Omelette</h5>
      <p>Shaved prime rib, mushrooms, onions, red pepper, white cheddar cheese, served with Bays potatoes or hashbrowns and toast<br>$14.98</p>
      <h5>Ultimate Porker Omelette</h5>
      <p>Shaved prime rib, mushrooms, onions, red peppers, potatoes topped with two eggs your way and smothered in house made hollandaise with scallion garnish<br>$12.98</p>
      <h5>Build Your Own Omelette</h5>
      <p>First item free, served with Bays potatoes or hashbrowns and toast<br><br>Items include: tomato, onion, spinach, veggies, mushrooms, bacon, sausage, ham, prime rib, cheese<br>$8.98</p>
    

    <div class="category-container sides">
      <h4>Lighter Fare</h4>
      <h5>Yogurt Parfait</h5>
      <p>Fresh strawberries, granola, fresh blueberries<br>cup $6.98</p>
      <h5>Granola</h5>
      <p>Dried cherries<br>cup $4.98 bowl $6.98</p>
      <h5>Oatmeal</h5>
      <p>cup $4.98 bowl $6.98<br>add blueberries $1.50<br>add dried cherries $1.50</p>
      <h5>Quinoa</h5>
      <p>Pecans, dried cherries, cooked in almond milk served with brown sugar and syrup<br>cup $5.98 bowl $7.98</p>
      <h5>Fresh Fruit</h5>
      <p>Fresh blueberries, fresh strawberries<br>cup $3.98 bowl $5.98</p>
    </div>
    </div>
  </div>
</div>
  `
  document.getElementById('menu-area').appendChild(div);
}


function showLunch() {
  clearBreakfast();

  const div = document.createElement('div');
  
  div.innerHTML = `
  <div class="col s12">
  <h5 class="center-align orange-color">after 11</h5>
</div>
<div class="menu-col col s12">
  <div class="menu-container">
    <div class="sub-menu-container col s6">
      <div class="category-container">
        <h4>Sandwiches</h4>
        <h5>Parmesan Encrusted Grilled Cheese</h5>
        <p>Parmesan encrusted white bread with American, white cheddar cheese, tomato and basil. Served with chips and a pickle<br>$9.98</p>
        <h5>Philly Cheese Steak</h5>
        <p>House cooked prime rib sliced on a hoagie bun with green peppers, onions and swiss cheese, side of Au Jus. Served with chips and a pickle<br>$14.98</p>
        <h5>Pulled Pork Sandwich</h5>
        <p>Slow roasted pork, red onions, BBQ sauce with swiss cheese, sweet pickles and mustard on a toasted pretzel bun. Served with chips and a pickle<br>$9.98</p>
        <h5>Jalepeño Chicken Popper</h5>
        <p>Seared chicken topped with house made jalepeño marmalade and bacon chive cream cheese on a pretzel bun. Served with chips and a pickle<br>$9.98</p>
        <h5>Reuben Sandwich</h5>
        <p>Sliced corned beef, sauerkraut, swiss cheese and 1000 island dressing on marble rye bread. Served with chips and a pickle<br>$10.98</p>
        <h5>Cali Reuben Sandwich</h5>
        <p>Sliced turkey, cole slaw, swiss, 1000 island dressing on marble rye bread. Served with chips and a pickle<br>$10.98</p>
        <h5>T.B.P.S Sandwich</h5>
        <p>
        Turkey, bacon, pesto, swiss, on wheat bread. Served with chips and a pickle<br>$9.98</p>
        <h5>B.L.T Sandwich</h5>
        <p>Bacon, lettuce, tomato, on white bread. Served with chips and a pickle<br>$9.98</p>
      </div>
      <div class="category-container">
        <h4>Burgers</h4>
        <h5>Bay's Big Burger</h5>
        <p>1/2lb. beef patty topped with a fried egg (over hard), bacon, American cheese, haystack onions and BBQ sauce. Served with chips and a pickle<br>$13.98</p>
        <h5>Build Your Own Burger</h5>
        <p>1/2lb. beef patty topped with lettuce, tomato and onion. Served with chips and a pickle<br>$9.98<br>add cheese $1.00<br>add bacon $1.98</p>
        <h5>The Curry Burger</h5>
        <p>1/2lb. beef patty topped with American cheese, shredded lettuce, sweet pickles and house made sweet curry aioli. Served with chips and a pickle<br>$11.98</p>
        <h5>Cracked Black Pepper Burger</h5>
        <p>1/2lb. beef patty seasoned with cracked black pepper topped with white cheddar cheese, lettuce, haystack onions and Dijon mustard. Served with chips and a pickle<br>$12.98</p>
        <h5>Cajun Burger</h5>
        <p>1/2lb. beef patty seasoned with Cajun, topped with Swiss cheese, sautéed red peppers and red onion, chipotle aioli. Served with chips and a pickle<br>$10.98</p>
      </div>
    </div>
    <div class="sub-menu-container col s6">
      <div class="category-container">
      <h4>Wraps</h4>
      <h5>Chicken Salad Wrap</h5>
      <p>
        Chicken salad mix, lettuce, tomato, all wrapped in a flour tortilla. Served with chips and a pickle<br>$9.98</p>
      <h5>Buffalo Chicken Wrap</h5>
      <p>Chicken tenders, lettuce, blue cheese, bacon and buffalo sauce all wrapped in a flour tortilla. Served with chips and a pickle<br>$9.98</p>
      <h5>Greek Wrap</h5>
      <p>Gyro meat, spinach, red onions, tomatoes, feta cheese, tzatziki sauce all wrapped in a flour tortilla. Served with chips and a pickle<br>$11.98</p>
      <h5>Veggie Wrap</h5>
      <p>Yellow squash, zucchini, tomato, red onions, mushrooms, spinach, tzatziki sauce all wrapped in a flour tortilla. Served with chips and a pickle<br>$9.98</p>
      <h5>Bay's Club Wrap</h5>
      <p>Ham, turkey, bacon, lettuce, tomato, red onion, with 1000 Island dressing all wrapped in a flour tortilla. Served with chips and a pickle<br>$12.98</p>
    </div>

    

    <div class="category-container sides">
      <h4>Soups</h4>
      <h5>Potato, Bacon, Chive</h5>
      <p>cup $2.98 bowl $5.98</p>
      <h5>Soup of the Day</h5>
      <p>cup $2.98 bowl $5.98</p>
      <h4>Salads</h4>
      <p>add chicken $4.98</p>
      <h5>Chef Salad</h5>
      <p>Fresh Romaine lettuce, red pepper, red onion, tomato, topped with mustard pretzels<br>small $5.98 </p>
      <h5>Chicken Salad</h5>
      <p>Chicken salad mix on top of a bed of fresh Romaine lettuce with candied pecans<br>$9.98</p>
      <h5>Strawberry-N-Feta Salad</h5>
      <p>Spinach, dried cherries, strawberries, feta cheese, candied pecans with a house made white balsamic vinaigrette<br>$10.98</p>
      <h5>Blue Goat Salad</h5>
      <p>Fresh Romaine lettuce, blueberries goat cheese, candied pecans and house made Blueberry vinaigrette<br>$10.98</p>
      <h5>Greek  Salad</h5>
      <p>Spinach, red onion, tomato, feta cheese topped with Gyro meat and tzatziki sauce<br>$12.98</p>
      <h5>Salad Dressings</h5>
      <p>Salad Dressings</p>
    </div>
    </div>
  </div>
  `
  document.getElementById('menu-area').appendChild(div);
}






