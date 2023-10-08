# prism-cpp-doxygen

Add doxygen comment highlight support to prism language-cpp.

Still working.

Usage:

```html
<script src="https://cdn.jsdelivr.net/npm/prism-cpp-doxygen/prism-cpp-doxygen.min.js"></script>
```

Grammar:

```html
<pre><code class="language-doxycpp">/** @brief xxx */
/*!
 * @param xxx uuu
 */
/// @return Null
//! \param value The original number.
int square(int value) { return value * value; }
</code></pre>
```

Screenshot:

![](/screenshot.png)
