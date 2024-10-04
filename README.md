### After using this repository as template
- cd repository
- npm install (to install all the dependencies listed in package.json)

### Image files referenced in HTML template
- Install html-loader using "npm install -D html-loader"
- Add the following object to the modules.rules array in webpack.common.js
{
    test: /\.html$i,
    loader: "html-loader",
} 

### Local image files we use in Javascript code
- Add the following object to the modules.rules array in webpack.common.js
{
    test: /\.(png|svg|jpg|jpeg|gif)$i,
    type: "asset/resource",
}
- default import the image using import variable from "./image.png";

### Terminal commands 
- npm run build
- npm run dev
- npm run deploy
