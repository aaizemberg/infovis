var data = [{"fecha":"2017-11-10","titulo":"Las noticias de la semana [28/oct .. 3/nov]","imagen":"https://pbs.twimg.com/media/DORrXh2WAAAKPxq.jpg","url":"https://twitter.com/aaizemberg/status/928985695611432960"},
{"fecha":"2017-11-08","titulo":"1.495.952 viajes en @BAecobici, desde el 1/1 al 31/10 del 2017 sobre un heatmap","imagen":"https://pbs.twimg.com/media/DOJGZVwXUAETzDR.jpg","url":"https://twitter.com/aaizemberg/status/928382621549199360"},
{"fecha":"2017-11-07","titulo":"Leyendo feeds rss desde google colab python interactive notebooks","imagen":"https://pbs.twimg.com/media/DOC0iXWW0AADPHF.jpg","url":"https://twitter.com/aaizemberg/status/927940921978773504"},
{"fecha":"2017-11-07","titulo":"BID y UNSAM | Seminario Internacional de Big Data y Transporte","imagen":"img/bid_av_2017-11-07.jpg","url":"https://youtu.be/mqj6TGHu8LU?t=23122"},
{"fecha":"2017-09-26","titulo":"Lanzamiento de la Lic. en Analítica Empresarial y Social","imagen":"img/av_bigdata_itba_wordcloud.jpg","url":"https://www.itba.edu.ar/agenda/lanzamiento-nueva-carrera-de-grado/"},
{"fecha":"2016-05-18","titulo":"Big Data en Argentina: presente y futuro","imagen":"https://pbs.twimg.com/media/CivY6ETXIAAOPjr.jpg","url":"img/Agenda_BigData_PyF_2016.jpg"},
{"fecha":"2014-05-06","titulo":"La Revolución Big Data: nuevas formas de pensar y trabajar","imagen":"img/itba-sede.jpg","url":"https://www.clarin.com/tech/revolucion-big-data-pensar-trabajar_0_B1-cFAKDQg.html"}];

var figures = d3.select("div#news").selectAll("figure").data(data).enter().append("figure");

figures.append("a")
  .attr("href",function(d,i) {return d.url;})
    .append("img")
    .attr("src",function(d,i) {return d.imagen;})
    .attr("width",500);

figures.append("figcaption")
  .html(function(d,i) {return  "<div align='left'>" + d.fecha + "</div><b>" + d.titulo + "</b>";});
