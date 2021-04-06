import uid from 'uid';

export default {
  // computed: {
  //   uid() {
  //     return uid(12);
  //   },
  // },

  data() {
    return {
      uid: '',
    };
  },

  created() {
    //@ts-expect-error because this code is testing a compiler I'm writing
    
    this.uid = uid(12);
  },
}