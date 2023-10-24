## 理解 Viewport、`em`、`rem` 的原理和用法，分辨率、`px`、`ppi`、`dpi`、`dp` 的区别和实际应用

### Viewport

Viewport 是用户在浏览器中看到的网站的区域，在移动设备上，它帮助保持页面的可读性和可用性，无论屏幕尺寸如何, 在 HTML 中，可以通过 `<meta name="viewport" content="width="device-width, initial-scale=1">` 标签来控制 Viewport

#### 参数

- **width**:
  `width` 键用于设置 viewport 的宽度。通常设置为 `device-width`，这意味着 viewport 的宽度将等于设备的屏幕宽度

  ```html
  <meta name="viewport" content="width=device-width" />
  ```

- **initial-scale**:
  `initial-scale` 键用于设置页面首次加载时的缩放级别。设置为 `1` 意味着页面将以 100%的缩放级别加载，没有缩放

  ```html
  <meta name="viewport" content="initial-scale=1" />
  ```

- **maximum-scale** 和 **minimum-scale**:
  `maximum-scale` 和 `minimum-scale` 键分别用于设置页面的最大和最小缩放级别。这些键可以帮助开发者控制用户能够缩放页面的程度

  ```html
  <meta name="viewport" content="maximum-scale=3, minimum-scale=0.5" />
  ```

- **user-scalable**:
  `user-scalable` 键用于控制用户是否可以缩放页面。设置为 `no` 将禁止用户缩放页面

  ```html
  <meta name="viewport" content="user-scalable=no" />
  ```

- **viewport-fit**:
  `viewport-fit` 是一个相对较新的键，用于控制页面如何在带有刘海（notch）或圆角的设备上显示。它的值可以是 `auto`, `contain`, 或 `cover`
  ```html
  <meta name="viewport" content="viewport-fit=cover" />
  ```

通过合理地设置这些键值，开发者可以确保他们的网站或 web 应用能在多种设备和屏幕尺寸上提供良好的用户体验。每个键的具体设置可能需要根据应用的具体需求和目标用户的设备类型来确定。

#### `em` 和 `rem`

- `em` 和 `rem` 是 CSS 中的相对单位，他们勇于创建可伸缩和响应式的布局

- `em` 是相对于其父元素字体大小的单位，例如，如果父元素的字体大小是 `16px`, 那么 `1em` 等于 `16px`

- `rem`(root em) 是相对于跟元素（HTML 元素）的字体大小的单位

### 分辨率

分辨率是指屏幕上水平和垂直像素的数量，通常以 `宽度 x 高度` 的格式表示，例如 1920x1080

#### `px`

`px`（像素） 是屏幕上的一个点，他是 CSS 中的绝对单位

#### `ppi` 和 `dpi`

- `ppi`(pixels per inch, 每英寸像素数) 和 `dpi`(dots per inch, 每英寸点数) 是度量显示质量的单位， `ppi` 更多是用于屏幕显示，而 `dpi` 更多的是用于打印

- 通常 `ppi` 和 `dpi` 越高，图像的清晰度和质量越好

#### `dp`

`dp` 是一个虚拟单位，主要用于 Android 开发，使元素在不同密度的屏幕上保持大致相同的无力大小，`1dp` 等于一个像素在 160 dpi 屏幕密度上的大小

### 实际应用

- 使用 Viewport 和相对单位（如 em 和 rem）可以帮助开发者创建响应式和可访问的网站，以适应不同设备和屏幕尺寸

- px 是一个基本单位，但在创建响应式设计时，可能会转向使用 em 或 rem

- 在选择显示器或打印材料时，可能会考虑 ppi 和 dpi，以确保足够的清晰度和质量

- 在 Android 开发中，dp 单位帮助确保 UI 元素在不同屏幕密度上保持一致的物理尺寸
