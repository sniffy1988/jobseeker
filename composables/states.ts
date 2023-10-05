export const useColor = () => useState<string>('color', () => 'pink')

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
    name: string;
    url:string;
    salary:number;
    status: 'applied'| 'screening'| 'tech'| 'rejected'| 'offer';
    note: string;
    dateApplication: Date;
    lastChanged: Date;
  }
  export const useJobStore = defineStore('job', {
    state: () : {
        jobs: Job[]
    } => ({
      jobs: [],
    }),
    actions: {
      // since we rely on `this`, we cannot use an arrow function
      add(payload:Job) {
        this.jobs.push(payload)
      },
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
        }
    }
  })