# knight
This is a custom framework based on koa2

## Description

This is a framework where the convention is greater than the configuration.

Implementation ideas reference from [egg](https://github.com/eggjs/egg)

## Agreement

| Directory   | Description |
|-------------|-------------|
| controller | parsing user's input and send back the relative result after processing |
| service  | abstract layer which is used to encapsulate business logics in complex business circumstances |
| config | allows users to overwrite configuration in sequence and maintain different configs depending on different environments |
| routers.js |  describe the corresponding relationship between the request URL and the Controller that processes the request eventually |

## TODO
- [ ] Refactor using TypeScript
- [ ] Use Decorator routing
