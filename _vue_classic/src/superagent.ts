import superagent from 'superagent';
import router from '@/router';

export const request = superagent.agent()
  .use((req) => {
    req.on('response', (res) => {
      if (res.status === 401) {
        console.log("forbidden - redirecting to home");
        router.push({name: "Home"});
      }
    });
  });
