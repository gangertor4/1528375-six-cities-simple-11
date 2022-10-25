import { LocationsContainer } from '../../components/locations-container/locations-container';
import { CitiesCard } from '../../components/cities-card/cities-card';

type AvalibalePlaces = {
  placesCount: number;
}

function MainPage({placesCount}: AvalibalePlaces): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">

        <LocationsContainer />

      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesCount} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <article className="cities__card place-card">
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
                <div className="cities__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/apartment-01.jpg" width={260} height={200} alt="Place image" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€120</b>
                      <span className="place-card__price-text">/&nbsp;night</span>
                    </div>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: '80%'}} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Beautiful &amp; luxurious apartment at great location</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>

              <CitiesCard
                placesImgUrl={'img/room.jpg'}
                placesCost={80}
                placesName={'Wood and stone place'}
                placesType={'Private room'}
              />
              <CitiesCard
                placesImgUrl={'img/room.jpg'}
                placesCost={80}
                placesName={'Wood and stone place'}
                placesType={'Private room'}
              />
              <CitiesCard
                placesImgUrl={'img/room.jpg'}
                placesCost={80}
                placesName={'Wood and stone place'}
                placesType={'Private room'}
              />
              <CitiesCard
                placesImgUrl={'img/room.jpg'}
                placesCost={80}
                placesName={'Wood and stone place'}
                placesType={'Private room'}
              />

            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map" />
          </div>
        </div>
      </div>
    </main>
  );
}

export {MainPage};