import React, { useParams } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from './../../shared/util/validators';
import Button from './../../shared/components/FormElements/Button';


export const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'First Place',
    description: 'First place of Ibrahim AlRayyan house',
    imageUrl: 'https://bloximages.newyork1.vip.townnews.com/thedesertreview.com/content/tncms/assets/v3/editorial/f/fb/ffb5de7a-eff4-11e7-8c16-23a73bf85f92/5a4be0b0b2cae.image.jpg',
    address: 'New York, NY 10036, USA!',
    creatorId: 'u1',
    location: {
      lat: 40.7580013,
      lng: -73.9877574
    },
  },
  {
    id: 'p2',
    title: 'First Place',
    description: 'Second place of Ibrahim AlRayyan house',
    imageUrl: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-witness/d/d6/River_Obelisk.jpg',
    address: 'New York, NY 10036, USA!',
    creatorId: 'u1',
    location: {
      lat: 40.7580013,
      lng: -73.9877574
    }
  },
  {
    id: 'p2',
    title: 'First Place',
    description: 'Second place of Ibrahim AlRayyan house',
    imageUrl: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-witness/d/d6/River_Obelisk.jpg',
    address: 'New York, NY 10036, USA!',
    creatorId: 'u3',
    location: {
      lat: 40.7580013,
      lng: -73.9877574
    }
  }
]

const UpdatePlace = props => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center" >
        <h2>Could not find place!</h2>
      </div>
    )
  }

  return (
    <form OnSubmit={() => {}} > 
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={() => { }}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        type="textarea"
        label="Description"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid description"
        onInput={() => { }}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" >UPDATE PLACE</Button>
    </form>
  )
}

export default UpdatePlace;
