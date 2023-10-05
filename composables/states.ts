import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// export const useCounterStore = defineStore('counter', {
//     state: () => ({
//       count: 0,
//     }),
//     actions: {
//       // since we rely on `this`, we cannot use an arrow function
//       increment() {
//         this.count++
//       },
//       randomizeCounter() {
//         this.count = Math.round(100 * Math.random())
//       },
//     },
//   })

  interface Job  {
    id: any;
    name: string;
    url:string;
    salary:number;
    status: 'applied'| 'screening'| 'tech'| 'rejected'| 'offer';
    note: string;
    role: string;
    dateApplication: Date;
    lastChanged: Date;
  }
  export const useJobStore = defineStore('job', {
    state: () : {
        jobs: Job[]
    } => ({
      jobs: []
    }),
    persist: {
        debug: true
    },
    actions: {
      // since we rely on `this`, we cannot use an arrow function
      add(payload:Job) {
        this.jobs.push(payload)
      },
      deleteJob(id: unknown) {
        this.jobs = this.jobs.filter(it => it.id !== id)
      },
      updateJob(payload: Job) {
        this.jobs = this.jobs.map(it => it.id === payload.id ? payload : it)
      }
    },
    getters: {
        count(state) {
            return state.jobs.length;
        },
        screenCount(state) {
            return state.jobs.filter(it => it.status === 'screening').length
        },
        techCount(state) {
            return state.jobs.filter(it => it.status === 'tech').length
        },
        currentJob(state) {
            return (id : unknown) => state.jobs.filter(it => it.id === id)[0]
        }
    }
  })