//jshint esversion:6
const data = [
  {
    principal: 2500,
    time: 1.8
  },
  {
    principal: 1000,
    time: 5
  },
  {
    principal: 3000,
    time: 1
  },
  {
    principal: 2000,
    time: 3
  }
];

let rate;

function getInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

let interestData = [];

function interestCalculator(dataObj) {
  dataObj.forEach(data => {
    if (data.principal >= 2500 && data.time > 1 && data.time < 3) {
      rate = 3;
      data.rate = rate;
      data.Interest = getInterest(data.principal, data.rate, data.time);
    } else if (data.principal >= 2500 && data.time >= 3) {
      rate = 4;
      data.rate = rate;
      data.Interest = getInterest(data.principal, data.rate, data.time);
    } else if (data.principal <= 2500 || data.time <= 1) {
      rate = 2;
      data.rate = rate;
      data.Interest = getInterest(data.principal, data.rate, data.time);
    } else {
      rate = 1;
      data.rate = rate;
      data.Interest = getInterest(data.principal, data.rate, data.time);
    }
    interestData.push(data);
    console.log(interestData);
    return interestData;
  });
}
interestCalculator(data);
