# angular-element-input-text
Input element using Angular elements (@angular/elements)

# Installation

```sh
$ npm install
```
# Usage

After installing the module:
  - Create Angular Element
  ```sh
$ npm run build:elements

```
- It will create an elements folder with angular-element
- Use it in any html page
- Currently used in index.html and served using http-server
  ```sh
  $ npm run start:elements
  ```
- It will listen to http://localhost:8080 port

# Implementaion

1. Create project
```sh 
$ ng new <ProjName>
```
2. To Create angular elements
```sh 
$ npm i @angular/elements @webcomponents/custom-elements --save
```
3. To bundle package
```sh 
$ npm i concat document-register-element fs-extra --save
```
4. Register component in the module using *createCustomElement* (check app.module.ts)
5. Configure bundle file like *concatenate.js* file
6. Bundle the files (js/html/css) using command *npm run build:elements*

