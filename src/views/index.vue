<script setup>
import Navbar from "@/components/LandingNavbar.vue";
import FooterComponent from "@/components/Footer.vue";
import Email from "@/components/Email.vue";
import { ref } from "vue";

let navLang = (navigator.language || navigator.userLanguage).split("-")[0];
if (!["pt", "es", "en"].includes(navLang)) {
  navLang = "en";
}

const href_lang = window.location.href.split("/").pop().split("-")[0];

if (["pt", "es", "en"].includes(href_lang)) {
  navLang = href_lang;
}

import imagePath from "@/assets/img/background_4.png";

const lang = ref(navLang);
const text = ref({
  hero: {
    title: {
      pt: "Sua jornada na nuvem começa com a Deep Cloud",
      en: "Your cloud journey begins with Deep Cloud",
      es: "Tu viaje en la nube comienza con Deep Cloud",
    },
    text: {
      pt: "Transforme sua visão em uma arquitetura em nuvem perfeita com facilidade, enquanto lidamos com as complexidades. Conecte sua conta da cloud provider enquanto cuidaremos do resto.",
      en: "Transform your vision into a perfect cloud architecture with ease, while we handle the complexities. Connect your cloud provider account while we take care of the rest.",
      es: "Transforme su visión en una arquitectura de nube perfecta con facilidad, mientras nosotros manejamos las complejidades. Conecte su cuenta de proveedor de nube mientras nosotros nos encargamos del resto.",
    },
  },
  card: {
    one: {
      title: {
        pt: "Criação de arquiteturas em nuvem",
        en: "Creating cloud architectures",
        es: "Creación de arquitecturas en la nube",
      },
      text: {
        pt: "Barreiras técnicas são eliminadas e a configuração da uma infraestrutura se torna acessível a todos. A plataforma intuitiva permite a criação de arquiteturas personalizadas com apenas alguns cliques, sem necessidade de conhecimentos aprofundados.",
        en: "Technical barriers are eliminated and the configuration of an infrastructure becomes accessible to everyone. The intuitive platform allows the creation of custom architectures with just a few clicks, without the need for in-depth knowledge.",
        es: "Se eliminan las barreras técnicas y la configuración de una infraestructura se vuelve accesible para todos. La plataforma intuitiva permite la creación de arquitecturas personalizadas con solo unos pocos clics, sin necesidad de conocimientos profundos.",
      },
    },
    two: {
      title: {
        pt: "Melhoria na eficiência e segurança",
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
        pt: "Escalabilidade e flexibilidade",
        en: "Scalability and flexibility",
        es: "Escalabilidad y flexibilidad",
      },
      text: {
        pt: "A solução se adapta às constantes necessidades do seu negócio, fornecendo uma base sólida que pode acompanhar o seu crescimento e a sua demanda. Com a Deep Cloud, é possível expandir o negócio de forma ágil e eficiente.",
        en: "The solution adapts to the constant needs of your business, providing a solid foundation that can keep up with your growth and demand. With the Deep Cloud, it is possible to expand the business in an agile and efficient way.",
        es: "La solución se adapta a las necesidades constantes de su negocio, brindando una base sólida que puede mantenerse al día con su crecimiento y demanda. Con Deep Cloud es posible expandir el negocio de manera ágil y eficiente.",
      },
    },
  },
  section: {
    one: {
      title: {
        pt: "Liberdade para construir a sua arquitetura sem barreiras técnicas",
        en: "Freedom to build your architecture without technical barriers",
        es: "Libertad para construir tu arquitectura sin barreras técnicas",
      },
      text: {
        pt:
          "A plataforma Deep Cloud capacita equipes, empreendedores e Startups a criarem suas infraestruturas em nuvem de forma rápida e eficiente." +
          "<br><br>" +
          "A eliminação das barreiras técnicas e a simplificação do processo de configuração permitem que arquiteturas personalizadas sejam construídas por qualquer pessoa, sem a necessidade de conhecimentos especializados em infraestrutura e cloud.",
        en:
          "The Deep Cloud platform empowers teams, entrepreneurs and Startups to quickly and efficiently build their cloud infrastructures." +
          "<br><br>" +
          "Removing technical barriers and simplifying the configuration process allows custom architectures to be built by anyone, without the need for specialized infrastructure and cloud knowledge.",
        es:
          "La plataforma Deep Cloud empodera a equipos, emprendedores y Startups para construir de manera rápida y eficiente sus infraestructuras en la nube." +
          "<br><br>" +
          "Eliminar las barreras técnicas y simplificar el proceso de configuración permite que cualquier persona construya arquitecturas personalizadas, sin necesidad de infraestructura especializada ni conocimientos de la nube.",
      },
      image: {
        title: {
          pt: "Nossa visão",
          en: "Our vision",
          es: "Nuestra visión",
        },
        text: {
          pt: "Nossa visão é revolucionar a forma como as empresas constroem suas arquiteturas em nuvem, oferecendo uma plataforma unificada e intuitiva que simplifica e otimiza o processo de configuração.",
          en: "Our vision is to revolutionize the way companies build their cloud architectures by offering a unified and intuitive platform that simplifies and streamlines the configuration process.",
          es: "Nuestra visión es revolucionar la forma en que las empresas construyen sus arquitecturas en la nube ofreciendo una plataforma unificada e intuitiva que simplifica y agiliza el proceso de configuración.",
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
        pt: "A Deep Cloud está em fase de desenvolvimento e testes. <br><br>Assim que estiver disponível, será possível, em poucos cliques, configurar uma nova arquitetura 100% segura e escalável, do jeito que seu projeto precisa.<br><br>Traga a sua ideia para a Deep Cloud e cresça com a gente.",
        en: "Deep Cloud is in the development and testing phase. <br><br>As soon as it is available, it will be possible, in a few clicks, to configure a new 100% secure and scalable architecture, the way your project needs.<br><br>Bring your idea to the Deep Cloud and grow with us.",
        es: "Deep Cloud se encuentra en fase de desarrollo y pruebas. <br><br>En cuanto esté disponible, será posible, en unos pocos clics, configurar una nueva arquitectura 100% segura y escalable, de la forma que tu proyecto necesita.<br><br>Lleva tu idea a la Nube Profunda y crece con nosotros.",
      },
    },
    three: {
      title: {
        pt: "Desafie os limites da inovação em nuvem",
        en: "Challenge the boundaries of cloud innovation",
        es: "Desafíe los límites de la innovación en la nube",
      },
      text: {
        pt: "Descubra como a Deep Cloud pode transformar sua visão em uma arquitetura perfeita, eliminando barreiras técnicas, simplificando a configuração e oferecendo eficiência, segurança e escalabilidade. <br><br>Conheça a chave para impulsionar seu negócio.",
        en: "Discover how the Deep Cloud can transform your vision into a seamless architecture, removing technical barriers, simplifying configuration, and delivering efficiency, security, and scalability. <br><br>Know the key to boost your business.",
        es: "Descubra cómo Deep Cloud puede transformar su visión en una arquitectura perfecta, eliminando barreras técnicas, simplificando la configuración y brindando eficiencia, seguridad y escalabilidad. <br><br>Conoce las claves para impulsar tu negocio.",
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
        class="relative pt-36 pb-32 flex content-center items-center justify-center min-h-screen-75"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          :style="{ backgroundImage: `url(${imagePath})` }"
        ></div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 class="text-white font-semibold text-5xl">
                  {{ text.hero.title[lang] }}
                </h1>
                <p class="mt-4 text-lg text-blueGray-50">
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
                    <i class="fa-solid fa-cloud"></i>
                  </div>
                  <h6 class="text-xl font-semibold">
                    {{ text.card.one.title[lang] }}
                  </h6>
                  <p class="mt-2 mb-4 text-blueGray-500 text-justify">
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
                    <i class="fa-solid fa-gear"></i>
                  </div>
                  <h6 class="text-xl font-semibold">
                    {{ text.card.two.title[lang] }}
                  </h6>
                  <p class="mt-2 mb-4 text-blueGray-500 text-justify">
                    {{ text.card.two.text[lang] }}
                  </p>
                </div>
              </div>
            </div>

            <div class="lg:pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
                  >
                    <i class="fa-solid fa-right-left"></i>
                  </div>
                  <h6 class="text-xl font-semibold">
                    {{ text.card.three.title[lang] }}
                  </h6>
                  <p class="mt-2 mb-4 text-blueGray-500 text-justify">
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
                <i class="fa-brands fa-medapps text-2xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                {{ text.section.one.title[lang] }}
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600 text-justify"
                v-html="text.section.one.text[lang]"
              ></p>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-theme"
              >
                <img
                  alt="..."
                  src="@/assets/img/7.png"
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
                      class="text-theme fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    {{ text.section.one.image.title[lang] }}
                  </h4>
                  <p class="text-md font-light mt-2 text-white text-justify">
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
                src="@/assets/img/18.png"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="pt-12 md:pt-0">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-400"
                >
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">
                  {{ text.section.two.title[lang] }}
                </h3>
                <p
                  class="mt-4 text-lg leading-relaxed text-blueGray-500 text-justify"
                  v-html="text.section.two.text[lang]"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="register" class="pb-28 relative block bg-theme">
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
              class="text-theme fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4 pt-20 lg:pt-24 lg:pb-48">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">
                {{ text.section.three.title[lang] }}
              </h2>
              <p
                class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-100"
                v-html="text.section.three.text[lang]"
              ></p>
            </div>
          </div>
        </div>
      </section>
      <email :lang="lang" />
    </main>
    <footer-component :lang="lang" />
  </div>
</template>
