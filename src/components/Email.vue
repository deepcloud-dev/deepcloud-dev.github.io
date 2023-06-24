<script setup>
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";
import EllipsisLoading from "@/components/EllipsisLoading.vue";

defineProps({
  lang: String,
});

const text = ref({
  email: {
    title: {
      pt: "Quer conhecer mais sobre o projeto?",
      en: "Would you like to learn more about the project?",
      es: "¿Quieres saber más sobre el proyecto?",
    },
    text: {
      pt: "Registre seu email abaixo e receba uma notificação quando a plataforma estiver disponível",
      en: "Register your email below and receive a notification when the platform is available",
      es: "Registra tu correo electrónico a continuación y recibe una notificación cuando la plataforma esté disponible",
    },
    input: {
      pt: "Seu melhor email",
      en: "Your best email",
      es: "Tu mejor correo electrónico",
    },
    button: {
      pt: "Registre-se",
      en: "Register",
      es: "Regístrate",
    },
    success: {
      pt: "E-mail registrado com sucesso!",
      en: "Email successfully registered!",
      es: "Correo electrónico registrado con éxito!",
    },
  },
});

const email = ref();
const loading = ref(false);
const saved = ref(false);

async function save() {
  loading.value = true;

  setDoc(doc(db, "email-list", uuidv4()), {
    email: email.value,
    dthr: new Date(),
    lang: navigator.language || navigator.userLanguage,
  }).finally(() => {
    email.value = "";
    loading.value = false;
    saved.value = true;
  });
}
</script>

<template>
  <section class="relative block py-24 lg:pt-0 bg-theme">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200"
          >
            <div class="flex-auto p-5 lg:p-10">
              <form @submit.prevent="save">
                <ellipsis-loading v-if="loading" />
                <div v-if="!loading">
                  <div v-if="!saved">
                    <h4 class="text-2xl font-semibold">
                      {{ text.email.title[lang] }}
                    </h4>
                    <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      {{ text.email.text[lang] }}
                    </p>
                    <div class="relative w-full mb-3 mt-8">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        {{ text.email.input[lang] }}
                      </label>
                      <input
                        v-model="email"
                        required
                        type="email"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div class="text-center mt-6">
                      <button
                        class="bg-theme text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        {{ text.email.button[lang] }}
                      </button>
                    </div>
                  </div>
                  <div v-if="saved">
                    <h4 class="text-2xl font-semibold text-center">
                      {{ text.email.success[lang] }}
                    </h4>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
