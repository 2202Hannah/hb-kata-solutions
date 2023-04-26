const treatDoggos = dogs => {
  const updatedDogArray = dogs.map(dog => {
    return { name: dog.name, age: dog.age, hasRabies: !dog.hasRabies };
  });
  return updatedDogArray;
};

module.exports = treatDoggos;
