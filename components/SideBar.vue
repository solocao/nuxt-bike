<template>
  <aside>
    <div class="sidearea">
      <label for="pricerange">最高价:
        <span>${{ pricerange }}</span>
      </label>

      <Slider v-model="value2" range></Slider>
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span>
    </div>
    <shop-switch v-if="!sale" />
    <div class="sidearea callout">
      <h4>Special Sale!</h4>
      <p>Shop now because half our items are greatly reduced</p>
    </div>
    <div class="sidearea callout">
      <h4>Contact Us</h4>
      <p>Questions? Call us at 1-888-555-SHOP, we're happy to be of service.</p>
    </div>
  </aside>
</template>

<script>
import ShopSwitch from './ShopSwitch.vue';

export default {
  props: {
    sale: {
      type: Boolean,
      default: false
    },
    pricerange: {
      type: [Number, String],
      default: 300
    }
  },
  data() {
    return {
      value2: [20, 50],
      min: 0,
      max: 400
    };
  },
  components: {
    ShopSwitch
  }
};
</script>

<style lang="stylus" scoped>
aside {
  background: white;
  float: left;
  padding: 20px;
}

.sidearea {
  border-bottom: 1px solid #ccc;

  &:last-of-type {
    border: none;
  }
}

.callout {
  padding: 20px 0;

  h4 {
    padding-bottom: 10px;
  }
}

label {
  padding: 15px 0;
  text-align: center;
}

/* --input range-- */
.sidearea:first-of-type {
  padding-bottom: 40px;
}

label {
  padding: 15px 0;
  text-align: center;
}

span {
  font-family: 'Barlow', sans-serif;
}

.max {
  font-size: 12px;
  float: right;
  color: #565656;
}

.min {
  float: left;
  font-size: 12px;
  color: #565656;
}
</style>
