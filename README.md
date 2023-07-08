# Habit-Tracker-Backend:
 This is Basic Habit Tracking Application for Users to Track Daily Habits for a week and this file is Readme for this Web Application.
 It's a Web App built with Node.js and EJS. It allows users to define habits and track their progress on a daily basis for a week.
## Contributed By:- Arpan Choudhury
![image](https://github.com/DataWorker2001/Habit-Tracker-Backend/assets/123379937/5c854218-a61c-4142-8715-1720fa48de2a)

![image](https://github.com/DataWorker2001/Habit-Tracker-Backend/assets/123379937/bc3a1896-f2fa-4335-a0cc-352a87cb973b)

## Folder Structure:-<br/>

habit-tracking-backend-app<br/>
├── public/<br/>
│   ├── css/<br/>
│   │   └── style.css<br/>
├── controllers/<br/>
│   └── habitController.js<br/>
├── models/<br/>
│   └── habit.js<br/>
├── routes/<br/>
│   └── habitRoutes.js<br/>
├── views/<br/>
│   └── index.ejs<br/>
│   └── habitForm.ejs<br/>
│   └── habitDetails.js<br/>
├── .gitignore<br/>
├── .gitattributes<br/>
├── package.json<br/>
├── package-lock.json<br/>
├── server.js<br/>
└── README.md<br/>

## Features of this App:-<br/>

1) Add multiple habits to track, such as reading a book, going to the gym, etc only for 1 user.<br/>
2) Track the status of each habit daily: done, not done, or none.<br/>
3) View all current habits and add new habits to track.<br/>
4) View a weekly overview of each habit, including the status of the habit for the past seven days.<br/>
5) Toggle the status of habits for the current day or any previous day.<br/>
6) Store habit data in a database.<br/>
7) [Bonus Feature] Track the longest streak and the number of days a user completed a habit since its creation.<br/>
--------------------------------------------------------x------------------------------------------------<br/>
8) No Authentication or seperate session of DB used for users. A single shared session limits this app accurate and best usage limit to 1 user on multiple devices, but with more than 1 user the data is disrupted. Multiple users can use it in different time slots or during different times of day or even in different weeks or months, for better segregation and understanding of the user to identify their data. Also if the habits of 2 users are totally different like no similar habits like one possesses all bad habits and other possesses all good habits, then 2 users can use this.<br/>
9)  In future it will be tried to classify/categorise the user habits as well as classify them daywise (timewise) for a single user first and then for multiple ones.<br/>
   
## Getting Started<br/>
### Prerequisites:-<br/>
Node.js <br/>
MongoDB <br/>
Express <br/>
Mongoose <br/>
### Installation Steps:- <br/>

#### 1. Clone the repository:- <br/>

```bash
git clone https://github.com/DataWorker2001/Habit-Tracker-Backend
```

#### 2. Install the dependencies:<br/>
```bash
cd habit-tracking-backend-app
npm install
```

#### 3. Configure the database connection:<br/>
In server.js use your own mongoDB username and Password from connection string of MongoDB Campus or Cloud MongoDB to configure the DB connection.

#### 4. Start the application:<br/>
```bash
npm start
```

#### 5. Open your web browser and visit http://localhost:3000 to access the Habit Tracking App.<br/>

## Contributing:<br/>
#### Contributions are most easily and thankfully welcome! If you'd like to contribute to this project, please follow these steps:<br/>
1.Fork the repository.<br/>
2.Create a new branch for your feature/fix.<br/>
3.Make the necessary changes and commit them.<br/>
4.Push the changes to your forked repository.<br/>
5.Submit a pull request explaining the changes you've made.<br/>

## License<br/>
This project is licensed under the GNU General Public License.<br/>

## Acknowledgements<br/>
The libraries and resources that you used in the development of this project are Visual Studio Code and MongoDB Cloud database finally with render for deployment.<br/>

## Contact<br/>
1. Email - arpanchoudhury.iitjee@gmail.com<br/>
2. Project Link: https://github.com/DataWorker2001/Habit-Tracker-Backend.<br/>
