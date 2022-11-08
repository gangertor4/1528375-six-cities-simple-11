import { LocationsContainer } from '../../components/locations-container/locations-container';
import { OffersType, City } from '../../types/types';
import { OffersList } from '../../components/offers-list/offers-list';
import { Map } from '../../components/map/map';
import { useState } from 'react';

type MainPageProps = {
  placesCount: number;
  offers: OffersType[];
  city: City;
}

function MainPage({placesCount, offers, city}: MainPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<OffersType | undefined>(undefined);

  const onOfferHover = (offerId: number) => {
    const currentOffer = offers.find((offer) => offer.id === offerId) as OffersType;
    setSelectedOffer(currentOffer);
  };


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

            <OffersList offers = {offers} onOfferHover = {onOfferHover}/>

          </section>
          <div className="cities__right-section">

            <Map city={city} offers={offers} selectedOffer={selectedOffer} height={'836px'} classname={'cities__map'} />

          </div>
        </div>
      </div>
    </main>
  );
}

export {MainPage};
