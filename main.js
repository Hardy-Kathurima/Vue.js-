Vue.component("greeting", {
  template: "<p>Components can be used in different vue instances.</p>",
  data: function () {
    return {
      Nickname: "nicky",
    };
  },
});

var app = new Vue({
  el: "#vue-app",
  data: {
    name: "Hardy",
    website: "https://www.google.com",
    websiteUrl: '<a href="https://www.google.com">Hardy Website </a> ',
    age: 25,
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    Name: "",
    Age: "",
    error: false,
    success: false,
    output: "",
    characters: ["hardy", "brian", "leon", "becky"],
    ninjas: [{
        name: "hardy",
        age: 35,
      },
      {
        name: "nelson",
        age: 24,
      },
      {
        name: "Anita",
        age: 19,
      },
    ],
  },
  methods: {
    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert("you clicked me");
    },
    logName: function () {
      console.log("you entered your name");
    },
    logAge: function () {
      console.log("you entered your age");
    },
    // addToA: function () {
    //   return this.a + this.age
    // },
    // addToB: function () {
    //   return this.b + this.age
    // }
    readRefs: function () {
      this.output = this.$refs.input.value;
    },
  },
  computed: {
    addToA: function () {
      return this.a + this.age;
    },
    addToB: function () {
      return this.b + this.age;
    },
    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby,
      };
    },
  },
});