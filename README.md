# Discord Clone

A clone of Discord's webpage build using React with Redux

## Utilized

- React and Redux
  - `npx create-react-app discord-clone --template redux`
- Firebase
  - Deployment
    - Config files obtained in 'Project settings' on Firebase website.
  - Firestore (database)
    - Setup:
      - Go to `Firestore Database` and click `Create database`
      - Click `Start in **test mode**`
      - Any location is fine for `Cloud Firestore location`
      - Go to `Authentication`, enable `Google` and enter an email for `Project support email`
      - Install firebase using `npm i firebase`
      - Create a `firebase.js` file in the `src` folder, copy/paste the `firebaseConfig` code in the file and declare **standard** variables and **exports**
    - To prevent **Firestore from expiring in a month**, go to `Firestore Database` > `Rules` and modify the code to the following: 
    ```
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /{document=**} {
          allow read, write;
        }
      }
    }
    ```
- Material UI
  - `npm install @mui/material @emotion/react @emotion/styled`
  - `npm install @mui/icons-material @mui/material @emotion/styled @emotion/react`

## Front-end dependencies
- `npm install npm install @mui/material @emotion/react @emotion/styled`
- `npm install @mui/icons-material @mui/material @emotion/styled @emotion/react`
- `npm install firebase`

## Back-end dependecies
