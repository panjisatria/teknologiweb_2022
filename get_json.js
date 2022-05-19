Vue.createApp({
    data() {
      return {       
        artikel: null, //variabel article
      };
    },
    methods: {
      getMarkdownData()
      {               
        var converter = new showdown.Converter(); //mendefinisikan konverter
        axios
          .get(
            "https://raw.githubusercontent.com//panjisatria/teknologiweb_2022/main/contents/artikel.html"
          )
          .then((res) => {           
            var html = converter.makeHtml(res.data); //eksekusi konverter
            this.article = html; //update variabel article
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getMarkdownData()
    },
  }).mount("#app");
