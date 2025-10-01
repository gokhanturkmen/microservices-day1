
import axios from 'axios';
import CircuitBreaker from 'opossum';

async function slowCall(){
  return axios.get('http://localhost:4000/slow');
}

const breaker = new CircuitBreaker(slowCall, {
  errorThresholdPercentage: 50,
  resetTimeout: 5000,
  timeout: 1000 // if request >1s => failure
});

breaker.fallback(() => ({ data: { ok:false, source:'fallback' } }));

breaker.on('open',     () => console.warn('Circuit OPEN'));
breaker.on('halfOpen', () => console.info('Circuit HALF-OPEN'));
breaker.on('close',    () => console.info('Circuit CLOSE'));

(async () => {
  for(let i=0;i<10;i++){
    try {
      const res = await breaker.fire();
      console.log('Resp', res.data);
    } catch(e){
      console.error('Err', e.message);
    }
    await new Promise(r => setTimeout(r, 500));
  }
})();
