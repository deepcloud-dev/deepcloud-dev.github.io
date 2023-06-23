<script setup>
import Navbar from "@/components/LandingNavbar.vue";
import FooterComponent from "@/components/Footer.vue";
import Email from "@/components/Email.vue";
import { ref } from "vue";

let navLang = (navigator.language || navigator.userLanguage).split("-")[0];
if (!["pt", "es", "en"].includes(navLang)) {
  navLang = "en";
}

// navLang = "pt";

const lang = ref(navLang);
const text = ref({
  hero: {
    title: {
      pt: "Sua jornada de nuvem começa com a Deep Cloud",
      en: "Your cloud journey begins with Deep Cloud",
      es: "Tu viaje en la nube comienza con Deep Cloud",
    },
    text: {
      pt: "Transforme sua visão em uma arquitetura em nuvem perfeita com facilidade, enquanto lidamos com as complexidades. Sua história começa aqui.",
      en: "Transform your vision into a perfect cloud architecture with ease, while we handle the complexities. Your story starts here.",
      es: "Transforma tu visión en una arquitectura en la nube perfecta con facilidad, mientras nosotros nos encargamos de las complejidades. Tu historia comienza aquí.",
    },
  },
  card: {
    one: {
      title: {
        pt: "Criação de arquiteturas em nuvem simplificada",
        en: "Simplified cloud architecture creation",
        es: "Creación simplificada de arquitecturas en la nube",
      },
      text: {
        pt: "Barreiras técnicas são eliminadas e a configuração de infraestrutura se torna acessível a todos. A plataforma intuitiva permite a criação de arquiteturas personalizadas com apenas alguns cliques, sem necessidade de conhecimentos especializados.",
        en: "Technical barriers are eliminated, and infrastructure configuration becomes accessible to everyone. The intuitive platform enables the creation of customized architectures with just a few clicks, without the need for specialized knowledge.",
        es: "Se eliminan las barreras técnicas y la configuración de infraestructura se vuelve accesible para todos. La plataforma intuitiva permite la creación de arquitecturas personalizadas con solo unos pocos clics, sin necesidad de conocimientos especializados.",
      },
    },
    two: {
      title: {
        pt: "Melhoria na eficiência e segurança ",
        en: "Improved efficiency and security",
        es: "Mejora en eficiencia y seguridad",
      },
      text: {
        pt: "Garantia de que todas as arquiteturas criadas na Deep Cloud sejam otimizadas em termos de desempenho, segurança e escalabilidade. Backups, firewalls, redes e recursos de dimensionamento automático são configurados automaticamente, seguindo as melhores práticas do mercado.",
        en: "Ensuring that all architectures created in Deep Cloud are optimized in terms of performance, security, and scalability. Backups, firewalls, networks, and auto-scaling resources are configured automatically, following industry best practices.",
        es: "Garantizamos que todas las arquitecturas creadas en Deep Cloud estén optimizadas en términos de rendimiento, seguridad y escalabilidad. Los respaldos, firewalls, redes y recursos de escalado automático se configuran automáticamente, siguiendo las mejores prácticas del mercado.",
      },
    },
    three: {
      title: {
        pt: "Promoção de escalabilidade e flexibilidade",
        en: "Promotion of scalability and flexibility",
        es: "Promoción de escalabilidad y flexibilidad",
      },
      text: {
        pt: "A solução se adapta às constantes necessidades dos negócios, fornecendo uma base sólida que pode acompanhar o crescimento e a demanda. Com a Deep Cloud, é possível expandir o negócio de forma ágil e eficiente.",
        en: "The solution adapts to the ever-changing needs of businesses, providing a solid foundation that can keep up with growth and demand. With Deep Cloud, it is possible to expand the business swiftly and efficiently.",
        es: "La solución se adapta a las necesidades cambiantes de los negocios, brindando una base sólida que puede acompañar el crecimiento y la demanda. Con Deep Cloud, es posible expandir el negocio de manera ágil y eficiente.",
      },
    },
  },
  section: {
    one: {
      title: {
        pt: "Liberdade para construir arquiteturas em nuvem personalizadas, sem barreiras técnicas",
        en: "Freedom to build custom cloud architectures without technical barriers",
        es: "Libertad para construir arquitecturas de nube personalizadas sin barreras técnicas",
      },
      text: {
        pt:
          "A plataforma Deep Cloud capacita empreendedores e startups a criarem suas infraestruturas em nuvem de forma rápida e eficiente. " +
          "<br><br>" +
          "A eliminação das barreiras técnicas e a simplificação do processo de configuração permitem que arquiteturas personalizadas sejam construídas por qualquer pessoa, sem a necessidade de conhecimentos especializados em infraestrutura e segurança.",
        en:
          "The Deep Cloud platform empowers entrepreneurs and startups to quickly and efficiently build their cloud infrastructures." +
          "<br><br>" +
          "Eliminating technical barriers and simplifying the configuration process allows custom architectures to be built by anyone, without the need for specialized infrastructure and security knowledge.",
        es:
          "La plataforma Deep Cloud empodera a los empresarios y empresas emergentes para que construyan de manera rápida y eficiente sus infraestructuras en la nube" +
          "<br><br>" +
          "La eliminación de las barreras técnicas y la simplificación del proceso de configuración permiten que cualquier persona construya arquitecturas personalizadas, sin necesidad de infraestructura especializada ni conocimientos de seguridad",
      },
      image: {
        title: {
          pt: "Nossa visão",
          en: "Our vision",
          es: "Nuestra visión",
        },
        text: {
          pt: "Nossa visão é revolucionar a forma como as empresas constroem suas arquiteturas em nuvem, oferecendo uma plataforma unificada e intuitiva que simplifica e otimiza o processo de configuração",
          en: "Our vision is to revolutionize the way companies build their cloud architectures by offering a unified and intuitive platform that simplifies and streamlines the configuration process",
          es: "Nuestra visión es revolucionar la forma en que las empresas construyen sus arquitecturas en la nube ofreciendo una plataforma unificada e intuitiva que simplifica y agiliza el proceso de configuración",
        },
      },
    },
    two: {
      title: {
        pt: "Uma ideia inovadora e em crescimento",
        en: "An innovative and growing idea",
        es: "Una idea innovadora y en crecimiento",
      },
      text: {
        pt: "Através da Deep Cloud, é possível selecionar provedores de nuvem desejados, como AWS e GCP, e configurar arquiteturas de forma intuitiva",
        en: "Through the Deep Cloud, it is possible to select desired cloud providers, such as AWS and GCP, and intuitively configure architectures",
        es: "A través de Deep Cloud, es posible seleccionar los proveedores de nube deseados, como AWS y GCP, y configurar arquitecturas de manera intuitiva",
      },
    },
    three: {
      title: {
        pt: "Desafie os limites da inovação em nuvem",
        en: "Challenge the boundaries of cloud innovation",
        es: "Desafíe los límites de la innovación en la nube",
      },
      text: {
        pt: "Descubra como a Deep Cloud pode transformar sua visão em uma arquitetura perfeita, eliminando barreiras técnicas, simplificando a configuração e oferecendo eficiência, segurança e escalabilidade. Conheça a chave para impulsionar seu negócio",
        en: "Discover how the Deep Cloud can transform your vision into a seamless architecture, removing technical barriers, simplifying configuration, and delivering efficiency, security, and scalability. Know the key to boost your business",
        es: "Descubra cómo Deep Cloud puede transformar su visión en una arquitectura perfecta, eliminando barreras técnicas, simplificando la configuración y brindando eficiencia, seguridad y escalabilidad. Conoce la clave para impulsar tu negocio",
      },
    },
  },
});
</script>

<template>
  <div>
    <navbar :lang="lang" />
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
      >
        <div class="absolute top-0 w-full h-full bg-center bg-theme">
          <!--          <span-->
          <!--            id="blackOverlay"-->
          <!--            class="w-full h-full absolute opacity-75 bg-black"-->
          <!--          ></span>-->
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  {{ text.hero.title[lang] }}
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                  {{ text.hero.text[lang] }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
      </div>

      <section class="pb-20 bg-blueGray-200 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
                  >
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">
                    {{ text.card.one.title[lang] }}
                  </h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    {{ text.card.one.text[lang] }}
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"
                  >
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">
                    {{ text.card.two.title[lang] }}
                  </h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    {{ text.card.two.text[lang] }}
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
                  >
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">
                    {{ text.card.three.title[lang] }}
                  </h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    {{ text.card.three.text[lang] }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
              >
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                {{ text.section.one.title[lang] }}
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
                v-html="text.section.one.text[lang]"
              ></p>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
              >
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-emerald-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    {{ text.section.one.image.title[lang] }}
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    {{ text.section.one.image.text[lang] }}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-20">
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
              class="text-blueGray-50 bg-gray-50 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-emerald-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-300"
                >
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">
                  {{ text.section.two.title[lang] }}
                </h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  {{ text.section.two.text[lang] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="register" class="pb-20 relative block bg-blueGray-800">
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
              class="text-blueGray-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">
                {{ text.section.three.title[lang] }}
              </h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                {{ text.section.three.text[lang] }}
              </p>
            </div>
          </div>
          <!--          <div class="flex flex-wrap mt-12 justify-center">-->
          <!--            <div class="w-full lg:w-3/12 px-4 text-center">-->
          <!--              <div-->
          <!--                class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"-->
          <!--              >-->
          <!--                <i class="fas fa-medal text-xl"></i>-->
          <!--              </div>-->
          <!--              <h6 class="text-xl mt-5 font-semibold text-white">-->
          <!--                Excelent Services-->
          <!--              </h6>-->
          <!--              <p class="mt-2 mb-4 text-blueGray-400">-->
          <!--                Some quick example text to build on the card title and make up-->
          <!--                the bulk of the card's content.-->
          <!--              </p>-->
          <!--            </div>-->
          <!--            <div class="w-full lg:w-3/12 px-4 text-center">-->
          <!--              <div-->
          <!--                class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"-->
          <!--              >-->
          <!--                <i class="fas fa-poll text-xl"></i>-->
          <!--              </div>-->
          <!--              <h5 class="text-xl mt-5 font-semibold text-white">-->
          <!--                Grow your market-->
          <!--              </h5>-->
          <!--              <p class="mt-2 mb-4 text-blueGray-400">-->
          <!--                Some quick example text to build on the card title and make up-->
          <!--                the bulk of the card's content.-->
          <!--              </p>-->
          <!--            </div>-->
          <!--            <div class="w-full lg:w-3/12 px-4 text-center">-->
          <!--              <div-->
          <!--                class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"-->
          <!--              >-->
          <!--                <i class="fas fa-lightbulb text-xl"></i>-->
          <!--              </div>-->
          <!--              <h5 class="text-xl mt-5 font-semibold text-white">Launch time</h5>-->
          <!--              <p class="mt-2 mb-4 text-blueGray-400">-->
          <!--                Some quick example text to build on the card title and make up-->
          <!--                the bulk of the card's content.-->
          <!--              </p>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </section>
      <email :lang="lang" />
    </main>
    <footer-component :lang="lang" />
  </div>
</template>
