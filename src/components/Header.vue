<template>
  <header>
    <p class="title">前端课程名称</p>
    <p>
      👋 Hi，我是朽木白，一名前端工程师，公众号「朽木学社」。
    </p>
  </header>
</template>

<style lang="less" scoped>
header {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  padding: 0 1.5em;
  margin: 3em auto;
}

p {
  font-size: 1.5em;
  font-weight: 300;
}

.title {
  font-size: 3em;
  font-weight: 600;
  margin-bottom: 0.5em;
}

// Responsive styles

@media (min-width: 640px) {
  header {
    max-width: 640px;
    padding: 0 4em;
  }
}

@media (min-width: 768px) {
  header {
    max-width: 768px;
    padding: 0 6em;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 1em;
  }
}

@media (min-width: 1024px) {
  header {
    max-width: 1024px;
    padding: 0 10em;
  }
}

@media (min-width: 1280px) {
  header {
    max-width: 1280px;
    padding: 0 12em;
  }
}
</style>
