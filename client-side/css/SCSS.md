# How we use SCSS in our projects

## With Angular 2+

1. Before generating your project with the Angular CLI, remember to add the SCSS flag.
```
    ng new name-of-your-app --style=scss
```

If you forgot to do this, or want to convert your current Angular project to SCSS, run
```
ng set defaults.styleExt scss
```
  * NOTE: This will allow Angular to start accepting and automatically generating .scss files. _However_, you will need to go through your current .css files and convert those manually.

2. In order to take advantage of the mixins and variables you will be creating with SCSS, create the following structure:

```
    | - src/
        | - scss/
            | - variables.scss
            | - mixins.scss
            | - styles.scss
```

* NOTE: styles.scss will already exist in the src/ folder. This is addressed below.

3. After you create your files for the variables and mixins, import them both into your styles.scss

```
// top of src/scss/styles.scss


1 | @import './variables';
2 | @import './mixins';
```

4. Finally you will need to change where Angular pulls your styles.scss from. in `.angular-cli.json`, change the styles property to the following: 

```
"styles" : [
    "scss/styles.scss"
],
```

5. In order to use our variables or mixins in our individual component files, we will need to import those files. Lucky for us, Angular CLI allows us to use a tilde (~) to point to absolute paths. No more **"../../../../../"** ad infinitum!!

```
// In any component.scss file:

@import '~scss/variables';
@import '~scss/mixins';
```
**That's it!**

## SCSS-specific Standards

  ### Nesting Styles:
  * We definitely want to take advantage of the excellent time-saving functionality available to us via SCSS code nesting. **So instead of this:**

  ```
            1  |    body {
            2  |        font-family: 'Roboto', sans-serif;
            3  |    }
            4  |
            5  |    ul li {
            6  |        list-style-type: none;
            7  |    }
            8  |    ul li p {
            9  |        font-family: 'Helvetica Nue', sans-serif;
            10 |    }
            11 |
            12 |    ul li p a {
            13 |         text-decoration: none;
            14 |         color: #333;
            15 |    }
            16 |
            17 |    ul li p a:hover {
            18 |        text-decoration: none;
            19 |        font-weight: bold;
            20 |    }
            21 |    
            22 |    main {
            23 |        background-color: #ededed;    
            24 |    }


  ```
**You should do this:**

```
        1  |  body {
        2  |        font-family: 'Roboto', sans-serif;
        3  |        ul li {
        4  |            list-style-type: none;
        5  |             p {
        6  |                 font-family: 'Helvetica Nue', sans-serif;
        7  |                 a {
        8  |                    text-decoration: none;
        9  |                    color: #333;
        10 |                    &:hover {
        11 |                        text-decoration: none;
        12 |                        font-weight: bold;
        13 |                    }
        14 |                  }
        15 |             }
        16 |         }
        17 |    main {
        18 |        background-color: #ededed;    
        19 |        }
        20 |     }

```
    
**Much cleaner and faster to write!**

  ## Variables: 
    
* For your application you will most likely have a color palette that you want to go with. Let's pretend you base colors are #1D0C85 and #0F0642 and your accent colors are #B3A6FF and #D4D4FF. Instead of repeating those hex values over and over, in your variables.scss file, just add
```
        //In src/scss/variables.scss

        1 | $base-color: #1D0C85;
        2 | $secondary-color: #0F0642;
        3 | $primary-accent: #B3A6FF;
        4 | $secondary-accent: #D4D4FF;
```
* Then, in whatever other .scss files you need those colors, you just reference those variables. EASY!

  ## Mixins: 

* Let's say you want to reuse a certain batch of css styles across several elements, but each time you will be passing in a different argument. May I introduce mixins?

```
        //In src/scss/mixins.scss

        @mixin inline-link($font-size) {
            font-size: $font-size;
            color: $secondary-accent;
            text-decoration: none;
        }
```

* Then in the component.scss file you need to use that mixin, you simply write: 

```
        //In **/**/**/whatever.component.scss

        .reset-password-link {
            @include inline-link(3em);
            &:hover {
                font-weight: bolder;
            }
        }
```
* NOTE: __@include__ is necessary to register the mixin.

  ## Tint and Shade

  * Now let's say you want to dynamically lighten or darken a color across the entire application, but you want to be able to change the amount you're lightening or darkening. SCSS to the rescue!!

  ```
        // To lighten a color towards white

        @function tint($color, $percentage) {
            @return mix(#fff, $color, $percentage);
        } 


        //To Darken a color toward black

        @function shade($color, $percentage) {
            @return mix(#000, $color, $percentage);
        }
  ```

  * This takes advantage of the built-in __mix__ function that comes from SCSS. To use our tint or shade functions, simply apply them similar to this way:

  ```
        .tabs {
            background-color: $primary-color;
            &:hover {
                background-color: tint(@primary-color, 45%);
            }
        }
  ```
* SO COOL!

## That's about it. After this, just have fun!

