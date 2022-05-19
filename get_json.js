Vue.createApp({
    data() {
      return {       
        artikel: null, //variabel artikel
      };
    },
    methods: {
       getHeaderData() {
      axios
        .get('https://raw.githubusercontent.com/dewinura/tekweb2022/main/contents/header.json')
        .then((res) => {
          console.log(res.data);
          this.header = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
     getArticlesData() {
      axios
        .get(
          'https://raw.githubusercontent.com/panjisatria/teknologiweb_2022/main/contents/articles.json'
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
