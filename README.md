
# 📸 Fotozer 

Fotozer is a website clone, inspired by [Flickr](https://www.flickr.com/). Fotozer can be used – and is best suited – for photo-sharing, photo organizing, and archiving. Community members can share views and fave for beautiful public picture. It is ideal for photographers and in-house creative staff, as well as marketing initiatives. 

**Live site:**  [Fotozer](https://fotozer.herokuapp.com/) 

## ✅  Wiki Link 

* [Backend Routes](https://github.com/FloraKho/Fotozer/wiki/Backend-Route)
* [Database Schema](https://github.com/FloraKho/Fotozer/wiki/Database-Schema)
* [Feature List](https://github.com/FloraKho/Fotozer/wiki/Feature-List)
* [Frontend Routes](https://github.com/FloraKho/Fotozer/wiki/Frontend-Routes)


## 💜 Landing Page

You can access to Login Page, Signup Page here. Also, we have a demo user button for you to check the website.

<img width="1914" alt="Screen Shot 2022-06-30 at 13 30 56" src="https://user-images.githubusercontent.com/91162637/176776849-3fd7c905-0435-4ec7-a4eb-e66258198ef6.png">

## 🧡 Login Page
<img width="1908" alt="Screen Shot 2022-06-30 at 13 31 20" src="https://user-images.githubusercontent.com/91162637/176776955-f83d4940-86f6-43a7-afaa-5ef709c0a89a.png">

## 💚 Explore Page
You can see all public picture from all community members.

<img width="1918" alt="Screen Shot 2022-06-30 at 13 31 39" src="https://user-images.githubusercontent.com/91162637/176776987-ce176d90-4129-41c5-818f-29f679d136f2.png">

## 💙 Photostream

You can see your personal photo in photostream page.

<img width="1428" alt="Screen Shot 2022-06-30 at 13 31 59" src="https://user-images.githubusercontent.com/91162637/176777272-ed732652-60d2-4cf9-a2b5-d3846ea824b1.png">

## 💛 Favorites

When you star a photographer's picture, the picture will show up in `/favorites`

<img width="1437" alt="Screen Shot 2022-06-30 at 13 32 09" src="https://user-images.githubusercontent.com/91162637/176777382-b845f83b-50f8-4491-9117-dd2c635e1e43.png">

## 🤎 Search Page

You can search photo by using photo's title or photographer's name

<img width="1438" alt="Screen Shot 2022-06-30 at 13 33 13" src="https://user-images.githubusercontent.com/91162637/176777503-c702722b-82f5-42ae-8b9e-0cb37984f394.png">

## 💖 Photo Detail Page

In this page, you can see the a signle photo title and description. If you are the owner of photo, you can delete the photo using trash button; if you are not the owner of photo, you can fave the star button, and the photo would show on your `/favorites`. In Photo Detail Page, you can also create, edit and delete your personal comment.

<img width="1436" alt="Screen Shot 2022-06-30 at 13 33 51" src="https://user-images.githubusercontent.com/91162637/176777657-71839f77-2d06-4d4d-be66-d98d81db78df.png">
<img width="1440" alt="Screen Shot 2022-06-30 at 13 33 58" src="https://user-images.githubusercontent.com/91162637/176777670-f7e82d0c-50bc-4533-afa1-d130beb4f0d5.png">




## 👩‍💻 Tech Stack

**Frameworks, Platforms and Libraries:**

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

**Database:**

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

**Hosting:** 

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)





## 💻 Run Locally

Clone the project

```bash
  git clone https://github.com/FloraKho/Fotozer.git
```

Go to the project directory

```bash
  cd fotozer
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## 🖥 Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
PORT=5000
DB_USERNAME=auth_app
DB_PASSWORD=«auth_app user password»
DB_DATABASE=auth_db
DB_HOST=localhost
JWT_SECRET=«generate_strong_secret_here»
JWT_EXPIRES_IN=604800
AWS_ACCESS_KEY_ID=<<AWS>>
AWS_SECRET_ACCESS_KEY=<<AWS>>
```
If you have AWS set up, change <Name Of Backet> in `/backend/awsS3.js`

```
const NAME_OF_BUCKET = '<NAME OF BACKET>'
```



## 💾 Database setup

To deploy this project run

```bash
  psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"
  npx dotenv sequelize db:create
  npx dotenv sequelize db:migrate
  npx dotenv sequelize db:seed:all
  --> drop: npx dotenv sequelize db:drop
```

## 🗓To-do-list

* **Albums Feature**

(database, redux, and Albums Page for user are completed, checked in `Albums` branch)


## Appendix

* Photos credited to [Unsplash](https://unsplash.com/) and [Flickr](https://www.flickr.com/)
* Icons credited to [Font awesome](https://fontawesome.com/) , [ICONS8](https://icons8.com/), and [flaticon](https://www.flaticon.com/)
