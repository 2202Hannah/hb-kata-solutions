function getEvenNumbers(nums) {
  return nums.filter(num => num % 2 === 0);

  /*
    This function takes an array of integers and returns an array containing only even integers
  */
}

function flipBooleans(bools) {
  return bools.map(bool => !bool);

  /*
    This function takes an array of booleans and should return an array of the opposite booleans.
    E.g. [true, true, false] => [false, false, true]
  */
}

function translateKey(student, keyToChange, translation) {
  const studentTranslated = {};
  delete Object.assign(studentTranslated, student, {
    [translation]: student[keyToChange]
  })[keyToChange];

  return studentTranslated;

  /*
    Northcoders is expanding to France 🎉🥖. 
    Unfortunately, our team on the ground in Paris doesn't speak the best English and has been providing us with student data partly in French. 
    This function will take an object representing a student's data, a key that needs changing, and its English translation.  
    E.g. 
    const student = {
      prénom: 'Carla',
      surname: 'Bruni',
      job: 'Artist'
    }
    const keyToChange = 'prénom'
    const translation = 'firstName'

    It returns a **new object** with the key successfully translated into English.
    E.g. 
    {
      firstName: 'Carla',
      surname: 'Bruni,
      job: 'Artist'
    }
  */
}

function findFirstDentist(people) {
  let answer = null;
  let dentists = people.filter(person => person.isDentist === true);

  for (let i = 0; i < people.length; i++) {
    if (people[i].isDentist === true) {
      answer = dentists[0];
    }
  }
  return answer;
  /*
    This function takes an array of people objects and returns the first found dentist object from the array.
  */
}

function tallyPeopleInManchester(people) {
  let count = 0;

  for (let i = 0; i < people.length; i++) {
    if (people[i].lives.city === "Manchester") {
      count++;
    }
  }

  return count;

  /* This function receives an array of people objects in for format:
    [
      { name: 'Emmeline', lives: { country: 'UK', city: 'Manchester' }, age: 32 }
    ]

    The function should return the number of people who live in the city of Manchester
  */
}

function getPugOwners(dogs) {
  const ownerArray = [];
  let pugArray = dogs.filter(dog => dog.breed === "Pug");

  for (let i = 0; i < pugArray.length; i++) {
    ownerArray.push(pugArray[i].owner);
  }

  return ownerArray;

  /*
    This function takes an array of dog objects and returns an array of the names of all the pug owners.
    E.g. [
      {name: 'Beatrice', breed: 'Lurcher', owner: 'Tom'},
      {name: 'Max', breed: 'Pug', owner: 'Izzi'},
      {name: 'Poppy', breed: 'Pug', owner: 'Anat'}
    ]
    will return ['Izzi', 'Anat']
  */
}

function pluraliseKeys(obj) {
  const pluralisedObj = {};

  for (key in obj) {
    const pluralKey =
      Array.isArray(obj[key]) && obj[key].length > 1 ? key + "s" : key;
    pluralisedObj[pluralKey] = obj[key];
  }

  return pluralisedObj;
  /*
  /*
    In this function you will be provided with an object. That object is storing information on keys. 
    E.g. {
      name: 'Tom',
      job: ['writing katas', 'marking'],
      favouriteShop: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    };

    In some cases, however, the keys have been very badly named. Good naming convention tells us that the keys containing arrays should be named as plurals. 
    This function should return a **new object** that is a copy of the input but with any keys that contain arrays pluralised (an 's' added to the end.)
  
    
    E.g. {
      name: 'Tom',
      jobs: ['writing katas', 'marking'],
      favouriteShops: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    }
  */
}

function getWordLengths(str) {
  let lengthArray = [];

  if (str.length > 0) {
    lengthArray = str.split(" ").map(word => word.length);
  }

  return lengthArray;
  /*
    This function takes a string and returns an array of the lengths of each word in the string.
    E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
  */
}

function getPalindromes(words) {
  let palindromeArray = [];

  for (let i = 0; i < words.length; i++) {
    if (
      words[i] ===
      words[i]
        .split("")
        .reverse()
        .join("")
    ) {
      palindromeArray.push(words[i]);
    }
  }
  return palindromeArray;
  /*
    This function takes an array of words and returns an array containing only the palindromes.
    A palindrome is a word that is spelled the same way backwards.
    E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] =>  ['racecar', 'tacocat']
  */
}

function replaceLettersWithXs(str) {
  return str.replace(/[a-z]|[A-Z]/g, "X");

  /* 
    This function will receive a string with a mix of characters. It should return the string with all letters replaced by dashes ('X').
    For example 'I love Greg' should return 'X XXXX XXXX', and 'Hard as 1, 2, 3' should return 'XXXX XX 1, 2, 3'.
  */
}

function validMobileNumber(num) {
  return /((07)|((\+|00)447)){1}[0-9]{9}\b/.test(num);

  /*
    This function will receive the string of a mobile number. It should return true if the number is a valid UK number and false if not.
    A valid mobile number may begin with '07' followed by 9 more digits.
    It may also begin with '+447' followed by 9 more digits.
    It may also begin with '00447' followed by 9 more digits.
    Anything else is invalid.
  */
}

function sumDigitsFromString(str) {
  const strArray = str.split("");
  let totalAmount = 0;

  for (let i = 0; i < strArray.length; i++) {
    const queryNumber = strArray[i];

    if (parseFloat(queryNumber)) {
      totalAmount += parseFloat(queryNumber);
    }
  }

  return totalAmount;
  /*
    This function takes a string with a jumble of letters and numbers. It should add together all the numbers that appear in the string and return the total.
    E.g. 'foo5bar6cat1' => 12
    'foo99cat' => 18
    Tip: For this one, it might be useful to know that the value `NaN` in JavaScript behaves oddly. For example, if you do `typeof NaN` it tells you it's a `"number"`. Odd, eh?
  */
}

function getWilliams(arr) {
  return arr.filter(name => name.match(/([A-Z])\w+\sWilliams\b/g));

  /*
    This function takes an array of full names and returns an array containing only the people whose last name is Williams.
    E.g. ['Charlotte Jones', 'Rebecca Williams', 'Harry Williams', 'John Williamson', 'William Jones'] => ['Rebecca Williams', 'Harry Williams']
  */
}

function getFactorials(nums) {
  const factorial = num => (num ? num * factorial(num - 1) : 1);
  return nums.map(factorial);

  // My original, incorrect workings out are commented below
  // newArray = [];
  // let answer = 1;

  // for (let i = 0; i < nums.length; i++) {
  //   //if (nums[i] === 0 || nums[i] === 1) {
  //     //newArray.push[answer];

  //     for (let j = nums[i]; j >= 1; j--) {
  //       newArray.push(nums[i] * j);
  //     }

  //   }

  //   console.log(newArray);
  // return newArray;
  /*
    This function takes an array of positive integers and returns an array of the factorials of these numbers.
    E.g. [4, 3, 2] => [24, 6, 2]

    The factorial of a number is the product of that number and all the integers below it.
    E.g. the factorial of 4 is 4 * 3 * 2 * 1 = 24
  */
}

function largestNumber(num) {
  const numberArray = num
    .toString()
    .split("")
    .sort()
    .reverse();
  return parseFloat(numberArray.toString().replaceAll(",", ""));

  /*
    This function takes a number and returns the largest number that can be made with the same digits.
    E.g. if num is 23, the function should return 32.
    E.g. if num is 9, the function should return 9.
    E.g. if num is 581 the function should return 851.
  */
}

function generateMatrix(n) {
  const matrixArray = [];
  const nullArray = [];

  for (let i = 0; i < n; i++) {
    nullArray.push(null);
  }

  for (let i = 0; i < n; i++) {
    matrixArray.push(nullArray);
  }

  return matrixArray;
  /*
    This function takes a number, n, and returns an n*n nested array populated with the value null.
    E.g. if n is 3, we want:
    [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  */
}

function findWrongWayFruit(orchard) {
  const comparisonArr = [];
  let wrongIndex = 0;

  orchard.forEach((item, index) => {
    if (index === 0) {
      comparisonArr.push(item);
    } else if (comparisonArr.includes(item)) {
      comparisonArr.push(item);
    } else wrongIndex = index;
  });

  if (comparisonArr.length === 1) {
    wrongIndex = 0;
  }

  return wrongIndex;
  /*
    This array takes an array of fruit in the format:
    ['apple', 'apple', 'apple', 'apple', 'elppa', 'apple']

    The fruit will all be the 'right way round' apart from 1 fruit!
    Your function should return its index position. E.g. in this example, 4.
    NB The fruit will not always be apple but it will always be an orchard of the same kind of fruit.
  */
}

function pairDNA(dna) {
  const DNAArray = [];
  const basePair = {
    G: "C",
    T: "A",
    C: "G",
    G: "C",
    A: "T"
  };

  dna
    .toUpperCase()
    .split("")
    .forEach(letter => {
      for (key in basePair) {
        if (letter === key) {
          DNAArray.push(letter + basePair[key]);
        }
      }
    });

  return DNAArray;
  /*
    This function takes a string of DNA such as 'GTCA' and returns an array containing correctly matched DNA pairs.
    E.g. 'GTTC' => ['GC', 'TA', 'TA', 'CG']
    If any nonsensical letters are passed as DNA they should be ignored.
    E.g. 'GYTC' => ['GC', 'TA', 'CG']
  */
}

function tallyHashtagsAndMentions(str) {
  const newArray = str.split("");
  let hashtagCount = 0;
  let mentionCount = 0;

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].startsWith("#")) {
      hashtagCount++;
    }
    if (newArray[i].startsWith("@")) {
      mentionCount++;
    }
  }
  return { hashtags: hashtagCount, mentions: mentionCount };
  /* 
    This function receives a string that will contain a number of mentions and hashtags as on Twitter.

    E.g. "So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"

    The function should return an object describing the number of hashtags and mentions found:
    { hashtags: 2, mentions: 1 }
  */
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getEvenNumbers,
  flipBooleans,
  translateKey,
  findFirstDentist,
  tallyPeopleInManchester,
  getPugOwners,
  pluraliseKeys,
  getWordLengths,
  getPalindromes,
  replaceLettersWithXs,
  validMobileNumber,
  sumDigitsFromString,
  getWilliams,
  getFactorials,
  largestNumber,
  generateMatrix,
  findWrongWayFruit,
  pairDNA,
  tallyHashtagsAndMentions
};
