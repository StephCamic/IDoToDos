# IDoToDos
1. Project Explanation: As a former luxury wedding planner, I often found myself wishing I could refer my clients to an easy-to-use digital wedding planning checklist that didn’t require couples to download an entirely separate wedding app for access. This project is a very basic version of this idea. The "I Do To-Dos" checklist is best suited for users accessing this checklist at the beginning of their wedding planning timeline, and most ideally with about a one-year overall lead time in mind, but users can input any date in the future to access their overall countdown & general checklist items. The website allows users to check off and hide any completed tasks and only display their remaining to-dos (with completed tasks "grayed out" in web/mobile view in case users need to reference/uncheck completed items, but with completed items completely hidden in print view).

Further development (not possible for this current iteration of the project but just a more fleshed out imagination of the site) would include the ability for users to log-in and save their wedding date/already checked off items, so they would not have to check off already completed items each time they logged in. 

Some things I included in my original Project Plan that are also not yet functioning in this current version of the site include user ability to input their own checklist items or amend the to-do list items shown, and autopopulation of their actual remaining months left in the planning process. Both of those items just proved to be more intensive than current project timeline and my current coding skills allowed for. I also switched the API selected for the project, as Google Calendar API had more requirements for use than this current version of the project could handle.

2. Project Access: Users should be able to simply clone this git repositiory, open the index.html file, and run the website through a Live Server or local server.

3.	Responsive Design Tools & Technologies: I use HTML, CSS (Grid, Flexbox, Media Queries), JavaScript, & Weatherbit API in this project.

4.	Feature Implementation: 
    
    Feature 1C: Use a regular expression to validate user input and either prevent the invalid input or inform the user about it. I used this feature for my wedding date entry on the home page; the overall to-do checklist will not populate until a valid wedding date is inputted, and the page will tell users if date inputted does not work within parameters.
    
    Feature 1F: Visualize data in a user friendly way. I created the checklist to look organized & well-separated by monthly tasks, with tasks able to be literally “checked-off” as needed.
    
    Feature 1J: Calculate and display data based on an external factor. I use the users wedding date input to display how many months are remaining until the user’s wedding date at the top of the checklist.
    
    Feature 2A: By integrating Weatherbit API, retrieve data from said API and use it to display something within my website. In the to-do checklist, under the "12-9 Months Before Your I Do Date" section within the checklist item for "venue and final date," I used Weatherbit API historical data to display the temperature on the user's inputted wedding date in the year of 2023 (the last full calendar year recorded), with the thought that couples could reference this data while considering specific weather data on their preferred wedding date.
    
    Feature 3C: Implement modern interactive UI features (e.g. table/data sorting, autocomplete, drag-and-drop, calendar-date-picker, etc). I used a calendar-date-picker for the actual wedding date input on home page, if preferred to typing it in manually.