# react-time-expiry
A react module component for time expiry warning after  a session is about to end.

## Install

```sh
npm install --save react-time-expiry
```



**Paramaters :**

- time = time in minutes for the modal to last, default is 60 seconds
- onClickOk = what to do when ok is clicked, will dismiss the modal after the function call
- onCancel = what to do when cancel is clicked or it is clicked outside the component, will dismiss the modal after the function call
- Message = optional message after warning of some seconds remaining

## Usage

No Params
```javascript
  import SessionAlert from 'react-time-expiry';

  <SessionAlert />
```

With params
```javascript
  import SessionAlert from 'react-time-expiry';

  <SessionAlert
    time={3}
    Message="Extend more ?"
  />
```


## Output

No Params

<img width="652" alt="screen shot 2019-01-20 at 9 33 41 pm" src="https://user-images.githubusercontent.com/12614476/51441570-19feaa80-1cfb-11e9-99ce-2869b7df5756.png">




With params

<img width="684" alt="screen shot 2019-01-20 at 9 35 44 pm" src="https://user-images.githubusercontent.com/12614476/51441597-64802700-1cfb-11e9-9c2f-e9a24d0d79e6.png">
