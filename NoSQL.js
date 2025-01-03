




//Queries 



//Player Statistics Analysis

db.FIFAWC.aggregate([
  {
    $group: {
      _id: null,
      AvgRating: { $avg: "$Rating" },
      MaxRating: { $max: "$Rating" },
      MinRating: { $min: "$Rating" },
      AvgAge: { $avg: "$Age" },
      MaxAge: { $max: "$Age" },
      MinAge: { $min: "$Age" },
      AvgHeight: { $avg: { $toDouble: "$Height" } },
      AvgWeight: { $avg: { $toDouble: "$Weight" } },
      AvgBallControl: { $avg: "$Ball_Control" },
      AvgDribbling: { $avg: "$Dribbling" },
      AvgMarking: { $avg: "$Marking" },
      AvgSlidingTackle: { $avg: "$Sliding_Tackle" },
      AvgStandingTackle: { $avg: "$Standing_Tackle" },
      AvgAggression: { $avg: "$Aggression" },
      AvgReactions: { $avg: "$Reactions" },
      AvgAttackingPosition: { $avg: "$Attacking_Position" },
      AvgInterceptions: { $avg: "$Interceptions" },
      AvgVision: { $avg: "$Vision" },
      AvgComposure: { $avg: "$Composure" },
      AvgCrossing: { $avg: "$Crossing" },
      AvgShortPass: { $avg: "$Short_Pass" },
      AvgLongPass: { $avg: "$Long_Pass" },
      AvgAcceleration: { $avg: "$Acceleration" },
      AvgSpeed: { $avg: "$Speed" },
      AvgStamina: { $avg: "$Stamina" },
      AvgStrength: { $avg: "$Strength" },
      AvgBalance: { $avg: "$Balance" },
      AvgAgility: { $avg: "$Agility" },
      AvgJumping: { $avg: "$Jumping" },
      AvgHeading: { $avg: "$Heading" },
      AvgShotPower: { $avg: "$Shot_Power" },
      AvgFinishing: { $avg: "$Finishing" },
      AvgLongShots: { $avg: "$Long_Shots" },
      AvgCurve: { $avg: "$Curve" },
      AvgFreekickAccuracy: { $avg: "$Freekick_Accuracy" },
      AvgPenalties: { $avg: "$Penalties" },
      AvgVolleys: { $avg: "$Volleys" },
      AvgGKPositioning: { $avg: "$GK_Positioning" },
    }
  },
  {
    $project: {
      _id: 0
    }
  }
])


//display players details, only the names, rating, nationality, club, and club position for players with a rating greater than 90

db.FIFAWC.find({ Rating: { $gt: 90 } }, { Name: 1, Rating: 1, Nationality: 1, Club: 1, Club_Position: 1, _id: 0 })


//find players with a height greater than 200 cm and display their names, rating, height, weight, and age


db.FIFAWC.find(
  { Height: { $gt: 200 } },
  { Name: 1, Rating: 1, Height: 1, Weight: 1, Age: 1, _id: 0 }
)

//find players whose contract expires in 2022 and display their names, joining date, leaving date, club name, club position, and preferred position

db.FIFAWC.find({ Contract_Expiry: 2022 }, { Name: 1, Club_Joining: 1, Contract_Expiry: 1, Club: 1, Club_Position: 1, Preferred_Position: 1, _id: 0 })

//get a list of player names with a preferred position of "ST"
db.FIFAWC.find({ Preferred_Position: "ST" }, { Name: 1, _id: 0 })

//Display the count of people born in years 1992-1998.

db.FIFSWC.aggregate([
  {
    $addFields: {
      BirthYear: {
        $year: {
          $dateFromString: {
            dateString: "$Birth_Date",
            format: "%m/%d/%Y"
          }
        }
      }
    }
  },
  {
    $match: {
      BirthYear: { $gte: 1992, $lte: 1998 }
    }
  },
  {
    $group: {
      _id: "$BirthYear",
      Count: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      YearOfBirth: "$_id",
      Count: 1
    }
  },
  {
    $sort: { YearOfBirth: 1 }
  }
])


//Filter players with good fitness, Players of age group between 25-30, having height greater than 180, and BMI between 19 and 25,  Strength and Stamina both > 88 and jumping and heading greater than 70.

db.FIFAWC.aggregate([
  {
    $match: {
      Age: { $gte: 25, $lte: 30 },
      Height: { $gt: 180 },
      Strength: { $gt: 88 },
      Stamina: { $gt: 88 },
      Jumping: { $gte: 70 },
      Heading: { $gte: 70 }
    }
  },
  {
    $addFields: {
      WeightInLbs: { $multiply: ["$Weight", 2.20462] },
      HeightInInches: { $multiply: ["$Height", 0.393701] }
    }
  },
  {
    $addFields: {
      BMI: {
        $divide: [
          { $multiply: ["$WeightInLbs", 703] },
          { $multiply: ["$HeightInInches", "$HeightInInches"] }
        ]
      }
    }
  },
  {
    $match: {
      BMI: { $gte: 19, $lte: 25 }
    }
  },
  {
    $project: {
      Name: 1,
      Height: 1,
      Weight: 1,
      BMI: 1,
      Strength: 1,
      Stamina: 1,
      Jumping: 1,
      Heading: 1,
      _id: 0
    }
  }
])



// retrieve goalkeepers and their specific goalkeeper-related statistics

db.FIFAWC.find(
  { Preferred_Position: "GK" },
  { Name: 1, GK_Positioning: 1, GK_Diving: 1, GK_Kicking: 1, GK_Handling: 1, GK_Reflexes: 1, _id: 0 }
)



//Contract Duration Analysis- displays the average, maximum, and minimum contract durations of players

db.FIFAWC.aggregate([
  {
    $addFields: {
      Contract_Duration: {
        $subtract: ["$Contract_Expiry", "$Club_Joining"]
      }
    }
  },
  {
    $group: {
      _id: null,
      AvgContractDuration: { $avg: "$Contract_Duration" },
      MaxContractDuration: { $max: "$Contract_Duration" },
      MinContractDuration: { $min: "$Contract_Duration" }
    }
  },
  {
    $project: {
      _id: 0,
      AvgContractDuration: 1,
      MaxContractDuration: 1,
      MinContractDuration: 1
    }
  }
])



// Player club analysis- Average rating for the  top 5 clubs and a list of players with their names, ratings, and contract expiry dates

db.FIFAWC.aggregate([
  {
    $group: {
      _id: "$Club",
      AvgRating: { $avg: "$Rating" },
      Players: { $push: { Name: "$Name", Rating: "$Rating", Contract_Expiry: "$Contract_Expiry" } }
    }
  },
  {
    $sort: { AvgRating: -1 }
  },
  {
    $limit: 5
  },
  {
    $project: {
      _id: 0,
      Club: "$_id",
      AvgRating: 1,
      Players: 1
    }
  }
])


// players age distribution, provides a distribution of player ages, showing the count of players for each age

db.FIFAWC.aggregate([
  {
    $group: {
      _id: "$Age",
      Count: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      Age: "$_id",
      Count: 1
    }
  },
  {
    $sort: { Age: 1 }
  }
])

// Players with Exceptional Shooting Skills-  find players with exceptional shooting skills, focusing on attributes like
   Shot_Power, Finishing, Long_Shots, and Curve. Displays player names and relevant attributes.

db.FIFAWC.find(
  {
    $and: [
      { Shot_Power: { $gte: 85 } },
      { Finishing: { $gte: 85 } },
      { Long_Shots: { $gte: 85 } },
      { Curve: { $gte: 85 } }
    ]
  },
  { Name: 1, Shot_Power: 1, Finishing: 1, Long_Shots: 1, Curve: 1, _id: 0 }
)

// Players with Exceptional Defensive Skills
db.FIFAWC.find({
  $and: [
    { Marking: { $gte: 90 } },
    { Sliding_Tackle: { $gte: 90 } },
    { Standing_Tackle: { $gte: 90 } }
  ]
}, { Name: 1, Marking: 1, Sliding_Tackle: 1, Standing_Tackle: 1, _id: 0 })


// Players with Exceptional Ball Control and Dribbling Skills
db.FIFAWC.find({
  $and: [
    { Ball_Control: { $gte: 90 } },
    { Dribbling: { $gte: 90 } }
  ]
}, { Name: 1, Ball_Control: 1, Dribbling: 1, _id: 0 })


// Players with Exceptional Passing Skills
db.FIFAWC.find(
  {
    $and: [
      { Short_Pass: { $gte: 85 } },
      { Long_Pass: { $gte: 85 } },
      { Vision: { $gte: 85 } },
      { Crossing: { $gte: 85 } }
    ]
  },
  { Name: 1, Short_Pass: 1, Long_Pass: 1, Vision: 1, Crossing: 1, _id: 0 }
)


//Players with Versatile Skills
db.FIFAWC.find(
  {
    $and: [
      { Ball_Control: { $gte: 90 } },
      { Dribbling: { $gte: 90 } },
      { Agility: { $gte: 90 } },
      { Balance: { $gte: 90 } }
    ]
  },
  { Name: 1, Ball_Control: 1, Dribbling: 1, Agility: 1, Balance: 1, _id: 0 }
)
