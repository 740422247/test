import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const msg = "this is table";
    const notable = () => {
      console.log(111);
    };


    
    const objparams = {
      name: "aaa",
      id: "1",
    };

    return {
      msg,
    };
  },
});
