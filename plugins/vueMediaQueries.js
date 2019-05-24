import Vue from 'vue';
import json2mq from 'json2mq';
import MobileDetect from 'mobile-detect';


const VueMediaQuery = Vue => {
  if (Vue.prototype.$mq) return;

  Object.defineProperty(Vue.prototype, '$mq', {
    get: () => {
      return query => {
        if (typeof window === 'undefined') return false;
        const mq = window.matchMedia(
          json2mq(query),
        );

        const md = new MobileDetect(window.navigator.userAgent);

        if (md.mobile()) {
          return false;
        }
        return mq.matches;
      }
    },
  });
};

Vue.use(VueMediaQuery);
