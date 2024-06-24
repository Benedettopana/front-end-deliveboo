<script>
import dropin from "braintree-web-drop-in";
import axios from "axios";
import { store } from "../../data/store.js";

export default {
  data() {
    return {
      clientToken: null,
      dropinInstance: null,
      axios,
      store,
    };
  },
  async mounted() {
    await this.getClientToken();
    this.setupBraintreeDropIn();
  },
  methods: {
    async getClientToken() {
      const response = await axios.get(`${store.apiUrl}/payment/token`);
      this.clientToken = response.data.token;
    },
    setupBraintreeDropIn() {
      dropin.create(
        {
          authorization: this.clientToken,
          container: "#dropin-container",
        },
        (err, instance) => {
          if (err) {
            console.error(err);
            return;
          }
          this.dropinInstance = instance;
        }
      );
    },
    async submitPayment() {
      this.dropinInstance.requestPaymentMethod(async (err, payload) => {
        if (err) {
          console.error(err);
          return;
        }
        const response = await axios.post(`${store.apiUrl}/payment/process`, {
          payment_method_nonce: payload.nonce,
          amount: "10.00", // Example amount, replace with your own
        });
        if (response.data.success) {
          alert("Payment successful!");
        } else {
          alert("Payment failed: " + response.data.message);
        }
      });
    },
  },
};
</script>
<template>
  <div>
    <div id="dropin-container"></div>
    <button @click="submitPayment">Pay</button>
  </div>
</template>

<style lang="scss" scoped></style>
