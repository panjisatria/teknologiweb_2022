Vue.createApp({
    data() {
      return {       
        artikel: null, //variabel artikel
      };
    },
    methods: {
      getMarkdownData()
      {               
        var converter = new showdown.Converter(); //mendefinisikan konverter
        axios
          .get(
            'https://raw.githubusercontent.com/panjisatria/teknologiweb_2022/main/contents/artikel.html'
          )
          .then((res) => {           
            var html = converter.makeHtml(res.data); //eksekusi konverter
            this.artikel = html; //update variabel artikel
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
     getArticlesData() {
      axios
        .get(
          'https://raw.githubusercontent.com/panjisatria/teknologiweb_2022/main/contents/artikel.html'
      )
        .then((res) => {
          console.log(res.data);
          this.articles = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
    beforeMount() {
      this.getMarkdownData()
    },
  }).mount("#app");
