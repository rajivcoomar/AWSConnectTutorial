The import of Card JSON doesn't work.
You have to delete the View and insert a new View.

In that Select the Cards from drop-down and select Version 1.

Here is JSON which you can use to fill in the manual value of each attribute ( as shown in the video)

```
{
  "Heading": "Welcome to Read the Manual",
  "CardsPerRow": "1",
  
  "Back": "Back",
  "NoMatchFound": "Can't find match?",
  "Cards": [
    {
      "Summary": {
        "Id": "reservation",
        "Heading": "Make new reservation"
      }
    },
    {
      "Summary": {
        "Id": "card_1",
        
        "Heading": "Car rental - New York",
        "Status": "Upcoming Dec 5, 2022",
        "Description": "This card doesn't have any actions at Solution card."
		}
    },
    {
      "Summary": {
        "Id": "trip_mexico",
       
        "Heading": "Trip to mexico",
        "Status": "Upcoming Dec 5, 2022",
        "Description": "This card doens't have any content"
      }
    },
    {
      "Summary": {
        "Id": "fligh_france",
        
        "Heading": "Flight to France",
        "Status": "Upcoming Dec 5, 2022",
        "Description": "This card has React Content."
      }
    },
    {
      "Summary": {
        "Id": "refund_atlanta",
      
        "Heading": "Refund trip to Atlanta",
        "Status": "Upcoming Dec 5, 2022",
        "Description": "Short optional decription here and should fit in 1 line."
      }
    }
  ]
}
```
