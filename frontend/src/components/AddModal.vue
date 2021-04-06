<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header"> This is the default title! </slot>
          <div class="cursor-pointer" @click="close">
            <MdiIcon :icon="mdiCloseBox" size="2rem" color="red" />
          </div>
        </header>

        <section class="modal-body">
          <slot name="body"> </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer"> </slot>
          <!-- <button type="button" class="btn-txt-close" @click="close">
            Close
          </button> -->
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
import { mdiCloseBox } from "@mdi/js";
import MdiIcon from "./MdiIcon.vue";
export default {
  name: "AddModal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
  data() {
    return {
      mdiCloseBox,
    };
  },
  components: {
    MdiIcon,
  },
};
</script>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 50%;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
