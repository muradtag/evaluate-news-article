# Evaluate A News Article with Natural Language Processing

## Project Desciption

This is the 3rd and final project of [Udacity](https://www.udacity.com/course/react-nanodegree--nd019)'s Become a React Developer Nanodegree program.

This project aims to build web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using an exciting new api called [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis). This tool will give us back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

Node and express will be the webserver and routing, and webpack will be our build tool of choice. Using webpack, we will set up the app to have development and production environments, each with their own set of tools and commands.

We will also use Jest to test JavaScript functions of our application.

### What to learn from this project

1. Using Webpack as a build tool for your projects and creating different environments for production and development.
2. Refreshed my skills in using Node.js and Express.
3. Using Sass to style your project.
4. Unit Testing using Jest.
5. Service Workers.
6. Refreshed my skills using APIs.

### Problems I faced during this project

The main problem I faced is integrating different versions of all the dependancies to match together.

## Installation

Make sure Node and npm are installed from the terminal.

```
node -v
npm -v
```

1. Move to the project folder

```
cd <project directory>
```

2. Clone the repo

```
git clone <repo>
```

3. Install npm

```
npm install
```

4. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

5. Configure environment variables using dotenv package
   1. Install the dotenv package
   ```
   npm install dotenv
   ```
   2. Create a new `.env` file in the root of your project
   3. Fill the `.env` file with your API key like this:
   ```
   API_KEY=**************************
   ```
6. Start the project

|       Command        |    Action     |
| :------------------: | :-----------: |
| `npm run build-prod` | Build project |
|     `npm start`      |  Run project  |

7. Open browser at http://localhost:8081/
