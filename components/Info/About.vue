<template>
  <div
    class="overflow-hidden shadow rounded-xl mt-5 bg-black bg-opacity-5 text-gray-500 p-15"
  >
    <p class="text-5xl mb-10">
      About Me
    </p>
    <div class="flex gap gap-15">
      <img src="~/assets/profile.jpg" class="w-full md:w-[600px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0">
      <div class="col-span-12 md:col-span-8 space-y-2.5">
        <div class=" md:mr-12 xl:mr-16">
          <h3 class="text-4xl font-medium dark:text-white mb-2.5 ">
            Who am i?
          </h3><p class="text-gray-lite  dark:text-color-910 leading-7">
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
          </p><p class="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
            My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
        </div>
        <div>
          <h3 class="text-4xl font-medium my-5 dark:text-white">
            Personal Info
          </h3><div class=" grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="flex">
              <span class="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              ><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" /></svg></span><div class="space-y-1">
                <p class="text-xs text-gray-lite dark:text-color-910">
                  Phone
                </p><h6 class="font-medium dark:text-white">
                  <a class="hover:text-[#FA5252] duration-300 transition" href="tel:+1234567890">+123 456 7890</a>
                </h6>
              </div>
            </div><div class="flex">
              <span class="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 384 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              ><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg></span><div class="space-y-1">
                <p class="text-xs text-gray-lite dark:text-color-910">
                  Location
                </p><h6 class="font-medium dark:text-white">
                  Hong kong china
                </h6>
              </div>
            </div><div class="flex">
              <span class="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              ><path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z" /></svg></span><div class="space-y-1">
                <p class="text-xs text-gray-lite dark:text-color-910">
                  Email
                </p><h6 class="font-medium dark:text-white">
                  <a class="hover:text-[#FA5252] duration-300 transition" href="mailto:ibthemes21@gmail.com">example@mail.com</a>
                </h6>
              </div>
            </div><div class="flex">
              <span class="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              ><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" /></svg></span><div class="space-y-1">
                <p class="text-xs text-gray-lite dark:text-color-910">
                  Birthday
                </p><h6 class="font-medium dark:text-white">
                  May 27, 1990
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="text-5xl mt-10">
      What I do!
    </p>
    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5">
      <div class="flex gap gap-3 bg-gray-200 p-5 rounded-xl dark:bg-slate-800">
        <img class="w-10 h-10 object-contain  block" src="~/assets/profile.jpg" alt=""><div class="space-y-2" />
        <div class="w-full">
          <h3 class="dark:text-white text-2xl font-semibold">
            Web Development
          </h3>
          <p class=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const cardInformation = [
  {
    icon: '',
    title: '',
    description: ''
  }
]
console.warn(cardInformation)
</script>
