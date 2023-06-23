<script setup>
import { ref } from "vue";

defineProps({
  lang: String,
});

const date = ref(new Date().getFullYear());

const text = ref({
  title: {
    pt: "Vamos manter contato!",
    en: "Let's keep in touch!",
    es: "¡Mantengámonos en contacto!",
  },
  subtitle: {
    pt: "Siga-nos nas mídias sociais",
    en: "Follow us on the social media",
    es: "Síguenos en las redes sociales",
  },
  links: {
    title: {
      pt: "Links Úteis",
      en: "Useful links",
      es: "Enlaces útiles",
    },
    contact: {
      pt: "Contate-nos",
      en: "Contact Us",
      es: "Contacta con nosotros",
    },
  },
});
</script>

<template>
  <footer class="relative bg-blueGray-200 pt-8 pb-6">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
      style="transform: translateZ(0)"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-blueGray-200 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">{{ text.title[lang] }}</h4>
          <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
            {{ text.subtitle[lang] }}
          </h5>
          <div class="mt-6 lg:mb-0 mb-6">
            <a
              href="https://www.linkedin.com/company/deepcloud-dev"
              target="_blank"
            >
              <button
                class="bg-white text-blueGray-800 shadow-sm font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-linkedin"></i>
              </button>
            </a>
            <a href="https://github.com/deepcloud-dev" target="_blank">
              <button
                class="bg-white text-blueGray-800 shadow-sm font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-github"></i>
              </button>
            </a>
            <a href="mailto:deepcloud.dev@gmail.com">
              <button
                class="bg-white text-blueGray-800 shadow-sm font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fa-regular fa-envelope"></i>
              </button>
            </a>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
              >
                {{ text.links.title[lang] }}
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.linkedin.com/company/deepcloud-dev"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/deepcloud-dev"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
                <!--                <li>-->
                <!--                  <a-->
                <!--                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"-->
                <!--                    href="#terms"-->
                <!--                  >-->
                <!--                    Terms & Conditions-->
                <!--                  </a>-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                  <a-->
                <!--                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"-->
                <!--                    href="#privacy"-->
                <!--                  >-->
                <!--                    Privacy Policy-->
                <!--                  </a>-->
                <!--                </li>-->
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="mailto:deepcloud.dev@gmail.com"
                  >
                    {{ text.links.contact[lang] }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © {{ date }} Deep Cloud by Deep Thought.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
