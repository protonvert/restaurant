// create and return a fragment

export default function getMenuPage() {
    console.log('menu')
    return menuHTML;
}

const menuHTML = 
`
<div class="content__menu">
<h2>Our Selections</h2>
<!-- <p id='motto'>Level up your productivity with a cup of our freshly brewed coffee.</p> -->
<h3 id='coffee-title'>Coffee</h3>
<ul id='coffee-list'>
  <li>The Twister</li>
  <li>Chocolate Paradise</li>
  <li>Mississipi Mudflower</li>
  <li>Caramel Cinnamon Latte</li>
  <li>Coconut Cream Cold Brew</li>
  <li>Espresso Fudge Mocha</li>
  <li>Spiced Pumpkin Latte</li>
  <li>Vanilla Almond Latte</li>
  <li>Dark Chocolate Espresso</li>
</ul>

<h3 id='tea-title'>Tea</h3>
<ul id='tea-list'>
  <li>Moroccan Mint</li>
  <li>Ginger Lemon Green Tea</li>
  <li>Earl Grey Lavender</li>
  <li>Chamomile Citrus</li>
  <li>Jasmine Pearl</li>
  <li>Rooibos Chai</li>
  <li>Peach Oolong</li>
  <li>Berry Burst Herbal Infusion</li>
  <li>Masala Chai</li>
</ul>
</div>
`