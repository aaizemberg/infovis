var data = [
  {"fecha":"2017-11-10","titulo":"Las noticias de la semana [28/oct .. 3/nov]","imagen":"https://pbs.twimg.com/media/DORrXh2WAAAKPxq.jpg","url":"https://twitter.com/aaizemberg/status/928985695611432960"},
  {"fecha":"2017-11-08","titulo":"1.495.952 viajes en @BAecobici, desde el 1/1 al 31/10 del 2017 sobre un heatmap","imagen":"https://pbs.twimg.com/media/DOJGZVwXUAETzDR.jpg","url":"https://twitter.com/aaizemberg/status/928382621549199360"},
  {"fecha":"2017-11-07","titulo":"Leyendo feeds rss desde google colab python interactive notebooks","imagen":"https://pbs.twimg.com/media/DOC0iXWW0AADPHF.jpg","url":"https://twitter.com/aaizemberg/status/927940921978773504"}
];

var figures = d3.select("div#news").selectAll("figure").data(data).enter().append("figure");

figures.append("a")
  .attr("href",function(d,i) {return d.url;})
    .append("img")
    .attr("src",function(d,i) {return d.imagen;})
    .attr("width",500);

figures.append("figcaption")
  .html(function(d,i) {return  "<div align='left'>" + d.fecha + "</div><b>" + d.titulo + "</b>";});
