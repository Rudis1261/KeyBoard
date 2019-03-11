## Keyboard

### Pre-requisites
You will need to have the following things installed for this to work:
```powershell
# in a powershell (admin)
npm install -global --production windows-build-tools
```

```shell
npm install -g @angular/cli electron
```

### Getting started
```shell
npm install
./node_modules/.bin/electron-rebuild $(electron -v)
```

### Starting the application in dev mode

`In one terminal`
```shell
ng serve
```

`In another terminal`
```shell
npm start 
```