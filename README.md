[![esdoc](https://doc.esdoc.org/github.com/fingerpich/indulgeInnerChild/badge.svg)](https://doc.esdoc.org/github.com/fingerpich/indulgeInnerChild/)

# Indulge your child
Control a 3d spirograph in a web application

# Code 
This web application use Preact, Redux , three.js which make it lightweight and powerful and clean code.
and by using core-js we are able to use ES7 features
and also we are using less, autoprefixer, extract-text-webpack-plugin to generate css and make it in a separated file.


## Installation

**1. Clone this repo:**

```sh
git clone https://github.com/fingerpich/indugeInnerChild.git
cd indugeInnerChild
```

**2. Install the dependencies:**

```sh
npm install
```

> You're done installing! Now let's get started developing.



## Development Workflow


**3. Start a live-reload development server:**

```sh
npm run dev
```
> open localhost:8080 in your browser

> This is a full web server nicely suited to your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.


**4. Generate a production build in `./build`:**

```sh
npm run build
```

You can now deploy the contents of the `build` directory to production!

> **Example:** deploy to [surge.sh](https://surge.sh):
>
> `npm i surge && surge build -d my-app.surge.sh`

##Generate Help
to generate documentation after installing npm requirements run
```sh
esdoc
```
and  then you could  see documentation in doc/index.js
