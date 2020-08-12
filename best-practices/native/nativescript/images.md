To handle image in Nativescript sometimes looks hard and frustrating to do so.

Doing some research I found this video from Alexander Ziskind:

https://www.youtube.com/watch?v=KgK_d-1lG84&t=46s

That video shows how `nativescript-images-generator-hook` plugin can make that task very easy.
`https://market.nativescript.org/plugins/nativescript-images-generator-hook`

This plugin runs only in build moment. It is a build hook called to verify all images added in `App_resources\images` folder. Then its create copy from each image in small scale and save in to the respective folder,its depends witch platform you are building the app (android/ios).

### How to setup:

1 - Install the plugin
`npm install nativescript-images-generator-hook --save-dev`

2 - Create a folder named `images` inside `App_Resources` folder.
3 - Add all our images in `images` folder.
Remember that images should be in the highest resolution as the app will use.
4 - Rename the image file, adding this suffix `@?x`.
`?` will be a number from 1 to 5.

Example: `logoheader@3x.png`

P.S.: The image name `can not` have space or uppercase. That I find out when I compile.

Example.:

Valid file name:

```
  logoheader.png (this will be treated as 1x)
  logoheader@?x.png (?=1-5)
  logo_header<suffix>.png
  logo-header<suffix>.png
```

Not Valid file name:

```
  logo header.png
  logoHeader.png
  LogoHeader.png
  logo-Header.png
  Logo-Header.png
```

Setup is done.

### How to use the image

Similar as `http://` protocol. In the code you can make reference to the image using `res://` (`res` means resource), with image name without suffix and extension. Like: `res://logoheader`

Example:
On html page: `<Image src="res://logoheader"></Image>`.
On css file: `background-image: url('res://logoheader');`
On .ts files: `this.page.backgroundImage='res://logoheader';`

That is it. 

All time consuming to generate all images we need for each particular screen size nightmare, is gone.


  
