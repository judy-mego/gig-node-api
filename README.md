
# Mock Server

## Getting started
To install all node_modules 
```
npm install
```
## Install Mongo
brew update
brew install mongodb

### Troubleshooting 
```
 sudo mkdir -p /data/db
 sudo chmod 777 /data/db
 cp parameters.json.dist parameters.json
```
## Run Fixtures
```
npm run fixtures
```
## RUN MOCK_SERVER
Run server
```
npm run start-dev 
```
Run Mongo
```
sudo mongod
```
