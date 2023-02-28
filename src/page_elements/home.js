// create and return a fragment

export default function getHomePage() {
    console.log('test')
    return homeHTML;
}

const homeHTML = 
`
        <div class="content__intro">
          <h1 id="hero-text">The Coffee Hut</h1>
        </div>

        <div class="content__welcome">
          <h2>Experience the Benefits of Productivity</h2>
          <!-- <p id='motto'>Level up your productivity with a cup of our freshly brewed coffee.</p> -->
          <p>
            At The Coffee Hut, we believe that a great cup of coffee can do
            wonders for productivity. Our expertly roasted and brewed coffee
            beans are carefully selected to provide a smooth and balanced flavor
            that will give you the energy and focus you need to tackle your day.
            The caffeine in our coffee helps to improve mental alertness and
            concentration, while the rich aroma and taste can also help to
            reduce stress and increase motivation. Whether you're looking to
            power through a workday, study for an exam, or simply need a
            pick-me-up, our coffee is the perfect fuel for your productivity
            needs.
          </p>
        </div>

        <div class="content__whyUs">
          <h2>Why Us?</h2>
          <!-- <p id='motto'>Level up your productivity with a cup of our freshly brewed coffee.</p> -->
          <p>
            At The Coffee Hut, we take great pride in providing our customers
            with the best coffee experience possible. Here are some reasons why
            you should choose us: Quality: We use only the finest coffee beans,
            which are expertly roasted and brewed to ensure a rich and flavorful
            cup every time. Variety: Our menu features a wide variety of coffee
            drinks, from classic favorites like cappuccinos and lattes to more
            unique options like cold brew and pour-overs. Atmosphere: Our cozy
            and welcoming café provides the perfect setting to enjoy your coffee
            and get some work done or catch up with friends. Service: Our
            friendly and knowledgeable baristas are always happy to help you
            find your new favorite drink or answer any questions you may have.
            Convenience: We offer both dine-in and takeout options, so you can
            enjoy our coffee on the go or in the comfort of our café. Overall,
            choosing The Coffee Hut means choosing quality, variety, atmosphere,
            service, and convenience. We are committed to providing our
            customers with the best coffee experience possible, and we look
            forward to serving you soon.
          </p>
        </div>
`