const trips = [
  {
    id: 1,
    date: "Ontem",
    score: 7.2,
    distance: "21.6 km",
    from: "Midtown, San Jose, CA",
    to: "Downtown, San Francisco, CA"
  },
  {
    id: 2,
    date: "12 Out",
    score: 8.3,
    distance: "547.9 km",
    from: "Burbank Avenue, San Martin, CA",
    to: "Llagas Avenue, Los Angeles, CA"
  },
  {
    id: 3,
    date: "12 Out",
    score: 8.3,
    distance: "547.9 km",
    from: "Burbank Avenue, San Martin, CA",
    to: "Llagas Avenue, Los Angeles, CA"
  },
  {
    id: 4,
    date: "12 Out",
    score: 8.3,
    distance: "547.9 km",
    from: "Burbank Avenue, San Martin, CA",
    to: "Llagas Avenue, Los Angeles, CA"
  }
];

const drivingData = [
  {
    id: 1,
    status: "bad",
    action: "breaking",
    icon: require("../assets/images/Icon/BreakingBad.png")
  },
  {
    id: 2,
    status: "fair",
    action: "speeding",
    icon: require("../assets/images/Icon/SpeedingFair.png")
  },
  {
    id: 3,
    status: "good",
    action: "breaking",
    icon: require("../assets/images/Icon/BreakingGood.png")
  }
];

const location = {
  latitude: 40.73978092263567,
  longitude: -73.87333547273988,
  latitudeDelta: 0.06,
  longitudeDelta: 0.06
};

export { trips, drivingData, location };
