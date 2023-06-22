import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig, reCAPTCHA_site_key } from "../config/firebase.config";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(reCAPTCHA_site_key),
  isTokenAutoRefreshEnabled: true,
});
