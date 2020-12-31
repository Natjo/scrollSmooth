
# Scroll smooth

![version](https://img.shields.io/github/manifest-json/v/Natjo/scrollSmooth)


Smooth scroll for device with no touchable screen.  
Add momentum to the scroll.

## Params
| Keys | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| onscroll(scrollY) | function | - | return offset of scroll |


## Usage

```html
<div data-scroll>
  <div data-scroll-content>
  <!-- content -->
  </div>
</div>
```
## javascript

### DOM content
Just put the id of the popin.
```javascript
import ScrollSmooth from './modules/scrollSmooth';
ScrollSmooth(scrollY => {
	console.log(scrollY)
});

```


## Demo
[See codepen demo](https://codepen.io/natjo/pen/ExVxqKm)
