

export default {
  computed: {
    appIcon(): string {
      //@ts-ignore
      return this.$nebula ? this.$nebula.appIcon : '';
    }
  }
}