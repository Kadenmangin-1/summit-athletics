export default function handler(req, res) {
  const schedule = {
    id: "summit-athletics-schedule",
    title: "Summit Athletics Collective Schedule",
    description: "Game and practice schedule for all sports programs",
    sports: [
      {
        id: "hockey",
        name: "Hockey",
        divisions: [
          {
            id: "hockey-u10",
            name: "U10 - Squirts",
            ageRange: "8-10",
            events: [
              {
                id: "h-u10-1",
                type: "game",
                date: "2025-01-18",
                time: "10:00 AM",
                endTime: "11:30 AM",
                location: "Pegula Ice Arena - Rink 1",
                opponent: "State College Lions",
                homeAway: "home"
              },
              {
                id: "h-u10-2",
                type: "practice",
                date: "2025-01-20",
                time: "6:00 PM",
                endTime: "7:00 PM",
                location: "Pegula Ice Arena - Rink 2",
                notes: "Skating drills and stickhandling"
              },
              {
                id: "h-u10-3",
                type: "game",
                date: "2025-01-25",
                time: "2:00 PM",
                endTime: "3:30 PM",
                location: "Twin Ponds Ice Rink",
                opponent: "Harrisburg Hawks",
                homeAway: "away"
              }
            ]
          },
          {
            id: "hockey-u14",
            name: "U14 - Bantam",
            ageRange: "12-14",
            events: [
              {
                id: "h-u14-1",
                type: "game",
                date: "2025-01-19",
                time: "1:00 PM",
                endTime: "2:30 PM",
                location: "Pegula Ice Arena - Rink 1",
                opponent: "Pittsburgh Penguins Jr",
                homeAway: "home"
              },
              {
                id: "h-u14-2",
                type: "practice",
                date: "2025-01-22",
                time: "7:00 PM",
                endTime: "8:30 PM",
                location: "Pegula Ice Arena - Rink 1",
                notes: "Power play and penalty kill"
              }
            ]
          }
        ]
      },
      {
        id: "soccer",
        name: "Soccer",
        divisions: [
          {
            id: "soccer-u12",
            name: "U12 - Youth",
            ageRange: "10-12",
            events: [
              {
                id: "s-u12-1",
                type: "game",
                date: "2025-01-20",
                time: "11:00 AM",
                endTime: "12:30 PM",
                location: "Memorial Field",
                opponent: "Centre County United",
                homeAway: "home"
              },
              {
                id: "s-u12-2",
                type: "practice",
                date: "2025-01-23",
                time: "5:30 PM",
                endTime: "7:00 PM",
                location: "Memorial Field",
                notes: "Passing and positioning drills"
              },
              {
                id: "s-u12-3",
                type: "game",
                date: "2025-01-27",
                time: "10:00 AM",
                endTime: "11:30 AM",
                location: "Altoona Sports Complex",
                opponent: "Altoona FC",
                homeAway: "away"
              }
            ]
          }
        ]
      },
      {
        id: "basketball",
        name: "Basketball",
        divisions: [
          {
            id: "basketball-u10",
            name: "U10 - Juniors",
            ageRange: "8-10",
            events: [
              {
                id: "b-u10-1",
                type: "game",
                date: "2025-01-21",
                time: "6:00 PM",
                endTime: "7:00 PM",
                location: "State College Area High School Gym",
                opponent: "Bellefonte Bears",
                homeAway: "home"
              },
              {
                id: "b-u10-2",
                type: "practice",
                date: "2025-01-24",
                time: "5:00 PM",
                endTime: "6:30 PM",
                location: "Park Forest Middle School Gym",
                notes: "Dribbling and shooting fundamentals"
              }
            ]
          },
          {
            id: "basketball-u14",
            name: "U14 - Varsity",
            ageRange: "12-14",
            events: [
              {
                id: "b-u14-1",
                type: "game",
                date: "2025-01-22",
                time: "7:00 PM",
                endTime: "8:30 PM",
                location: "State College Area High School Gym",
                opponent: "Central Mountain Wildcats",
                homeAway: "home"
              }
            ]
          }
        ]
      },
      {
        id: "lacrosse",
        name: "Lacrosse",
        divisions: [
          {
            id: "lacrosse-u12",
            name: "U12 - Youth",
            ageRange: "10-12",
            events: [
              {
                id: "l-u12-1",
                type: "practice",
                date: "2025-01-19",
                time: "4:00 PM",
                endTime: "5:30 PM",
                location: "Tussey Mountain Turf Field",
                notes: "Stick skills and ground balls"
              },
              {
                id: "l-u12-2",
                type: "game",
                date: "2025-01-26",
                time: "1:00 PM",
                endTime: "2:30 PM",
                location: "Tussey Mountain Turf Field",
                opponent: "Nittany Valley Lightning",
                homeAway: "home"
              }
            ]
          }
        ]
      }
    ]
  };
  
  res.status(200).json(schedule);
}
