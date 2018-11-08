import { Factory, faker } from 'ember-cli-mirage';

function randomTime() {
  let time = faker.random.number({ min: 0, max: 60 * 24 - 1 });
  let pad = num => num.toString().length === 1 ? '0' + num : num;

  return pad(Math.floor(time / 60)) + ':' + pad(time % 60) + ':00';
}

export default Factory.extend({
  areaOfEducation() { return faker.random.arrayElement(["school", "course"]); },
  eventCategory() { return faker.random.arrayElement(["beginner", "intermediate", "professional"]); },
  designation() { return faker.lorem.words(); },

  subscriptionDateFrom() { return faker.date.past(1); },
  subscriptionDateTo() { return faker.date.future(2, this.subscriptionDateFrom); },
  subscriptionTimeFrom() { return randomTime(); },
  subscriptionTimeTo() { return randomTime(); },

  dateFrom() { return faker.date.future(1, this.subscriptionDateTo); },
  dateTo() { return faker.date.future(1, this.dateFrom); },
  timeFrom() { return randomTime(); },
  timeTo() { return randomTime(); },

  buildingAddress() { return faker.address.streetAddress(); },
  location() { return faker.address.streetAddress(); },
  price() { return faker.commerce.price(); },
  allowSubscriptionInternetByStatus() { return faker.random.boolean(); },
  typeOfSubscription() { faker.random.number({ min: 1, max: 5 }); },
  freeSeats() { return faker.random.number({ min: 0, max: 20 }); }
});
