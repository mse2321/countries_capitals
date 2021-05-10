
const Home = () => {

    return (
        <section class="intro_wrap">
            <p class="intro">Welcome to the Countries &amp; Capitals App! Here you can learn more about each one and pull data from geonames.com. Click the button below to get started.</p>
            <div class="button_wrap">
            <a href="#/list"><button ng-click="list()">Browse Countries</button></a>
            </div>
        </section>
    );
  }
  
  export default Home;
  