# Installation and Setting Up Expo Project

1. Get the latest nodejs through here -> https://nodejs.org/en/

2. Get Expo XDE for your computer -> https://expo.io/tools
   Download the Expo App on your phone to scan the QR code as well. (For Step 7)

3. Once Expo is downloaded and install, you can sign in using github, or register with your email. 
   Click on 'Create a new project'. A project folder containing all the files needed to run your react native app will be created. 

4. I am using sublime text for my code editor. Some of the packages I used are:
   ```sh
   ESlint
   Babel
   ```
   Whichever editor you are using, you might want to install babel package in case there are compatiblity issues with the code.

5. Stack Navigator will be used for the one-page stacking for the application.
   Open cmd and enter:
   ```sh
   npm install --save react-navigation
   ```
[If your npm install does not work, cd to a folder or your desktop and enter the above command line. A "node-modules" folder will be created. Then copy the folder over into your designated project folder (local installation).]

6. I have also included a rating feature in the app.js. You will need the package to display the rating features as well.
   Open cmd and enter:
   ```sh
   npm install react-native-star-rating --save
   ```
   when done, enter this next:
   ```sh
   npm install react-native-vector-icons --save
   ```
7. Download the files I have uploaded as a zip and extract them to the project folder you have created using Expo.

8. Restart Expo on your computer for the packages to be updated. When done, press the 'Share' button and use the Expo App on your phone to scan the QR code. 
