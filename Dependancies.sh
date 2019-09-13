#!/bin/bash
#install node
brew install node

#install mongo
brew brew tap mongodb/brew
brew install mongodb-community@4.2
brew services start mongodb-community@4.2


cd backend
npm i
#start server
npm start
../

# install angular
npm install -g @angular/cli 
cd frontend
npm i
#start frontend
ng s