# OOCSS (Object Oriented CSS) 

[All you need to know about css](http://getbootstrap.com/css/#buttons)

## Bootstrap is shit... but they know how to write some css...

``` 
<a class="btn btn-primary"></a>
<a class="btn btn-success"></a>
```
The class btn-primary extends the base styles from btn


## Don't do this

```
.helloThere { background: green; }
```

Never use camelCase, dash-case please...

## Extending classes

```
.btn {
  border-radius: 2px;
}

.btn.btn-primary {
  background: blue;
}
```

## Transitions

```
.sidebar {
  opacity: 0;
  visibility: hidden; // Never forget this one
  transition: all 0.24s ease-in-out; // Keep tranistion lengths between 0.16s and 0.32s
}

.sidebar.active {
  opacity: 1;
  visibility: visible;
}
```

Transtions that are too fast will not be noticed... Transitions too slow will annoy the user...

## Object based classes

```
.car {

}

.car .door {

}

.car .door .handle {

}

.car .window {

}

```

Describe classes as objects and their children as if they were properties on the object.

## Colors matter, never use black

[Never use black, always use a darker shade of your primary color...](https://ianstormtaylor.com/design-tip-never-use-black/)