<template>
  <main class="origion-container min-h-full w-full text-center text-gray-700 dark:text-gray-200 flex flex-col">
    <Header />
    <router-view />
    <Footer />
  </main>
</template>

<style>
html{
  overflow: overlay;
}
html::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: transparent;
}

html::-webkit-scrollbar-thumb {
  background-color: rgb(199, 199, 199);
  border-radius: 5px
}
</style>
