## Household Simple FE

## Requirements
- Node v16
- Yarn Package manager
- Angular CLI `npm install -g @angular/cli`

## Installation
- Clone this repo `git clone https://github.com/gabrielarlo/simple-household-census-fe.git`
- run `cd ./simple-household-census-fe`
- Run `yarn install`
- Run `ng serve` to serve the server
- Go to `http://localhost:4200`
  - Note: Make sure that the BE is running.

### Code Updates
- run `git pull`
- run `yarn install`
- finally run `ng serve`

### Serve Locally or with same router
- check the local-ip the pc to be as host of the app. should start with `192.168.x.x`
  - to check `ipconfig` or `ifcondig`
- open this file `environments/environment.staging.ts` and change the **HOST_IP**
```
export const environment = {
  production: false,
  api: 'http://{HOST_IP}:8000/api',
  name: 'Household Census',
};
```
- open the port of the host to port `4200`
- run `ng serve -c=staging --host 0.0.0.0`
- if the port is successfully open then go to other pc then browse this url: `http://{HOST_IP}:42000`


## NOTE: 
- Backend and Frontend should run in same host/pc.


## Credential
```
Email: admin@hc.com
Pass: secret@1234
```
