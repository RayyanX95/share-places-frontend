import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from './../../shared/util/validators';
import Button from './../../shared/components/FormElements/Button';


import './PlaceForm.css';
import { useForm } from './../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card';

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
  const [loading, setLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: '',
      isValid: false,
    },
    description: {
      value: '',
      isValid: false,
    }
  });

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          }
        },
        true
      );
    }
    setLoading(false);
  }, [setFormData, identifiedPlace]);



  const placeUpdateSubmitHandler = e => {
    e.preventDefault();

    console.log("UpdatePlace: ", formState.inputs);
  }

  if (!identifiedPlace) {
    return (
      <Card>
        <div className="center" >
          <h2>Could not find place!</h2>
        </div>
      </Card>
    )
  };

  if (loading) {
    return <h1>loading...</h1>
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler} >
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        type="textarea"
        label="Description"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid description"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid} >UPDATE PLACE</Button>
    </form>
  )
}

export default UpdatePlace;
